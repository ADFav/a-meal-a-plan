import { Component } from "react";
import IngredientComponent from "./IngredientComponent";
import IngredientComponentEditor from "./IngredientComponentEditor";
import { update } from "../Services/CRUDService";

export default class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = { openEditor: false, componentToEdit: null };
  }

  editOpener(breakdownComponent) {
    return () => {
      this.controlEditor(true, breakdownComponent);
    };
  }

  editCloser() {
    return () => {
      this.controlEditor(false, null);
    };
  }

  controlEditor(openEditor, componentToEdit) {
    this.setState(() => ({ openEditor, componentToEdit }));
  }

  breakdownComponents() {
    return this.props.breakdown.map((breakdownComponent) => {
      const onClick = this.editOpener(breakdownComponent);
      const props = { onClick, ...breakdownComponent };
      return <IngredientComponent {...props} />;
    });
  }

  styles = {
    padding: `5px`,
    borderBottom: `2px solid grey`,
  };

  editorIfOpened() {
    if (this.state.openEditor) {
      const closeModal = this.editCloser();
      const props = { ...this.state.componentToEdit, closeModal };
      return <IngredientComponentEditor {...props} />;
    }
    return null;
  }

  render() {
    return (
      <div style={this.styles}>
        {this.editorIfOpened()}
        {this.breakdownComponents()}
      </div>
    );
  }
}
