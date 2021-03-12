import colors from "../Utils/colorschemes";

export default function IngredientComponent(props) {
  const typeToColorMap = {
    quantity: colors.greens,
    none: colors.whites,
    ingredient: colors.blues,
    preparation: colors.reds,
    size: colors.greens,
  };
  const colorScheme = typeToColorMap[props.type] || colors.whites;
  const styles = {
    backgroundColor: colorScheme.light,
    color: "black",
    borderBottom: `3px solid ${colorScheme.primary}`,
    fontSize: `16px`,
  };

  return (
    <span style={styles} onClick={props.onClick}>
      {props.originalText}
    </span>
  );
}
