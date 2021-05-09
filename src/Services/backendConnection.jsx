import { createContext } from "react";
import Amplify from "aws-amplify";
import awsmobile from "../secrets/aws-exports";
import * as models from "../models";

Amplify.configure(awsmobile);

class AuthConnection {
  constructor(Amplify) {
    this.Auth = Amplify.Auth;
    this.user = null;
  }

  async currentUser() {
    const response = { user: this.user, error: null };
    if (this.user !== null) return response;
    try {
      this.user = this.Auth.currentUserInfo();
      response.user = this.user;
    } catch (error) {
      console.error(error);
      response.error = error;
    } finally {
      return response;
    }
  }

  async signUp(username, password) {
    const response = { user: null, error: null };
    try {
      this.user = await this.Auth.signUp({ username, password });
      response.user = this.user;
    } catch (error) {
      console.error(error);
      response.error = error;
    } finally {
      return response;
    }
  }

  async signIn(username, password) {
    const response = { user: null, error: null };
    try {
      console.log(username, password);
      this.user = await this.Auth.signIn(username, password);
      response.user = this.user;
    } catch (error) {
      console.error(error);
      response.error = error;
    } finally {
      return response;
    }
  }

  async signOut() {
    try {
      await this.Auth.signOut();
      this.user = null;
      return { success: true, error: null };
    } catch (error) {
      console.error(error);
      return { success: false, error: error };
    }
  }
}

class DatabaseConnection {
  constructor(Amplify) {
    this.DataStore = Amplify.DataStore;
  }

  query() {
    return new Query(this);
  }
}

class Query {
  constructor(connection) {
    this.connection = connection;

    this.table = null;
    this.filters = [];
    this.sorts = [];

    this.object = null;
    this.keys = new Set();
  }
  FROM(table) {
    try {
      if (typeof table === "string") {
        this.table = models[table];
        this.object = new this.table();
        const keys = Object.keys(this.object);
        this.keys = new Set(keys);
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Invalid table name: ${table.toUpperCase()}`);
    }

    this.table = table;
    return this;
  }
  WHERE(newFilter) {
    const operations = new Set("==", ">", "<", ">=", "<=");
    if (newFilter.length !== 3) {
      const errMsg = `Filters must have a field, an operation, and a value: received ${newFilter.length} parts`;
      throw new Error(errMsg);
    }
    const [field, operation, value] = newFilter;
    if (!this.keys.has(field)) {
      const errMsg = `Field ${field} not valid on table ${this.table.name}`;
      throw new Error(errMsg);
    }
    if (!operations.has(operation)) {
      const errMsg = `Operation ${operation} not valid`;
      throw new Error(errMsg);
    }
    if (
      typeof value !== typeof this.object[field] ||
      typeof value != "string"
    ) {
      const expectedType = typeof this.object[field];
      const valueType = typeof value;
      const errMsg = `Expected value to be of type ${expectedType}, received ${valueType}`;
      throw new Error(errMsg);
    }

    this.filters.push(newFilter);
    return this;
  }
  LIMIT(maxResults) {
    return this;
  }

  ORDER_BY(newSort) {
    return this;
  }

  send() {
    if (this.table === null) {
      const errMsg = "No table set";
      throw new Error(errMsg);
    }
  }
}

const contextDefault = {
  Auth: new AuthConnection(Amplify),
  Database: new DatabaseConnection(Amplify),
};

const backendConnection = createContext(contextDefault);

export default backendConnection;
