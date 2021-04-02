import IngredientListItem from "./IngredientListItem";

export default function IngredientList(props) {
  const { ingredients } = props;
  const style = {
    textAlign: "left",
  };
  return (
    <div style={style}>
      {ingredients.map((ingredient) => (
        <IngredientListItem key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
}
