import colors from "../../Utils/colorschemes";

export default function IngredientListItem(props) {
  const style = (colorScheme) => ({
    backgroundColor: colorScheme.light,
    color: "black",
    borderBottom: `3px solid ${colorScheme.primary}`,
    fontSize: `16px`,
  });

  const typeToStylesMap = {
    amount: style(colors.greens),
    unit: style(colors.greens),
    none: style(colors.whites),
    ingredient: style(colors.blues),
    preparation: style(colors.reds),
    size: style(colors.greens),
  };

  const keyOrder = ["amount", "unit", "size", "ingredient", "preparation"];

  return (
    <li>
      {keyOrder.map((key) =>
        props.ingredient[key] ? (
          <>
            <span key={key} style={typeToStylesMap[key]}>
              {props.ingredient[key]}
            </span>
            <span> </span>
          </>
        ) : null
      )}
    </li>
  );
}
