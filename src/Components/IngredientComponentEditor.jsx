export default function IngredientComponentEditor(props) {
  const blackoutStyles = {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "grid",
    gridTemplateRows: "1fr auto 1fr",
    gridTemplateColumns: "1fr auto 1fr",
  };

  const modalStyles = {
    backgroundColor: "white",
    width: "75vw",
    height: "25vh",
    gridColumn: "2/3",
    gridRow: "2/3",
    zIndex: 2,
  };

  const types = ["ingredient", "quantity", "none", "size", "preparation"];
  const typeMapper = (type) => <option key={type}>{type}</option>;

  const state = { type: props.type, ingredient: props.ingredient };

  const updateType = (newValue) =>
    (state.type = newValue && console.log(state));
  const updateIngredient = (newIngredient) =>
    (state.ingredient = newIngredient && console.log(state));

  const closeModal = props.closeModal;
  const saveModal = () => console.log("saved!");
  return (
    <div>
      <div style={blackoutStyles} onClick={closeModal}>
        <div style={modalStyles}>
          <h2 style={{ textAlign: "center" }}>Edit Ingredient</h2>
          <select value={props.type} onChange={updateType}>
            {types.map(typeMapper)}
          </select>
          <input value={props.originalText} onChange={updateIngredient} />
          <button onClick={saveModal}>Save</button>
        </div>
      </div>
    </div>
  );
}
