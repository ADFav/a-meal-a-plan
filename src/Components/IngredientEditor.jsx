import { Component } from "react";
import IngredientComponentEditor from "./IngredientComponentEditor";

export default class IngredientEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasChanged: false,
      updatedComponents: props.breakdown,
      addedComponents: 0,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(component) {
    const { id, tempId } = component;
    const { updatedComponents } = this.state;
    const componentFinder = (componentToUpdate) =>
      id ? componentToUpdate.id === id : componentToUpdate.tempId === tempId;
    const updatedComponent = updatedComponents.find(componentFinder);

    return ({ target: { name, value } }) => {
      updatedComponent[name] = value;
      this.setState(() => ({ updatedComponents }));
    };
  }

  buttonStyles = {
    borderRadius: "100%",
    color: "white",
    display: "inline-block",
    width: "25px",
    height: "auto",
    textAlign: "center",
    padding: "0",
    margin: "0",
  };

  removeButton(index) {
    const removeStyles = {
      backgroundColor: "red",
      transform: "translate(100%,0%)",
    };
    const style = { ...this.buttonStyles, ...removeStyles };
    const onClick = () => this.removeAtIndex(index);
    return (
      <button style={style} onClick={onClick}>
        -
      </button>
    );
  }

  addButton(index) {
    const addStyles = {
      backgroundColor: "green",
      transform: "translate(0%,100%)",
    };
    const style = { ...this.buttonStyles, ...addStyles };
    const onClick = () => this.addAtIndex(index);
    return (
      <button style={style} onClick={onClick}>
        +
      </button>
    );
  }

  editComponent(component, index) {
    const onChange = this.changeHandler(component);
    const key = component.id;
    const props = { onChange, ...component };
    return (
      <>
        {this.removeButton(index)}
        {this.addButton(index + 1)}
        <IngredientComponentEditor key={key} {...props} />
        <hr />
      </>
    );
  }

  addAtIndex(index) {
    const initialBreakdownComponent = {
      type: "none",
      originalText: "",
      tempId: `tmp-${this.state.addedComponents}`,
    };
    const { updatedComponents, addedComponents } = this.state;
    updatedComponents.splice(index, 0, initialBreakdownComponent);

    this.setState(() => ({
      updatedComponents,
      addedComponents: 1 + addedComponents,
    }));
  }

  removeAtIndex(index) {
    const { updatedComponents } = this.state;
    updatedComponents.splice(index, 1);
    this.setState(() => ({ updatedComponents }));
  }

  render() {
    const { breakdown } = this.props;
    const componentMapper = (component, index) =>
      this.editComponent(component, index);
    return (
      <div>
        <>
          {this.addButton(0)}
          <hr />
        </>
        {breakdown.map(componentMapper)}
      </div>
    );
  }
}
