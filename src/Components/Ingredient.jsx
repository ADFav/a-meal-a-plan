import { Component } from "react";
import IngredientComponent from "./IngredientComponent";
import IngredientComponentEditor from "./IngredientComponentEditor";

export default class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = { openEditor: false, componentToEdit: null };
  }

  editOpener(breakdownComponent) {
    return () => {
      const stateSetter = () => ({
        openEditor: true,
        componentToEdit: breakdownComponent,
      });
      this.setState(stateSetter);
    };
  }

  editCloser() {
    const stateSetter = () => ({
      openEditor: false,
      componentToEdit: null,
    });
    this.setState(stateSetter);
  }

  breakdownComponents() {
    return this.props.breakdown.map((breakdownComponent) => {
      const clickHandler = this.editOpener(breakdownComponent);
      return (
        <IngredientComponent onClick={clickHandler} {...breakdownComponent} />
      );
    });
  }

  styles = {
    padding: `5px`,
    borderBottom: `2px solid grey`,
  };

  render() {
    return (
      <div style={this.styles}>
        {this.state.openEditor ? (
          <IngredientComponentEditor
            {...this.state.componentToEdit}
            closeModal={() => this.editCloser()}
          />
        ) : null}
        {this.breakdownComponents()}
      </div>
    );
  }
}
