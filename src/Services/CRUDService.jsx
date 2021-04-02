import { useContext, createContext } from "react";

import { read, update } from "../MockServices/mockDB";

// function read(query) {
//   return null;
// }

function del(records) {
  return null;
}

// function update(table, records) {
//   return null;
// }

function create(records) {
  return null;
}

function listen(query) {
  return null;
}

const CRUDFunctions = { read, del, update, create, listen };
export const CRUDContext = createContext(CRUDFunctions);

export default function CRUDService() {
  return useContext(CRUDContext);
}

export function CRUDProvider(props) {
  const value = { ...CRUDFunctions, ...props };
  return (
    <CRUDContext.Provider value={value}>{props.children}</CRUDContext.Provider>
  );
}
