const types = ["none", "ingredient", "quantity", "size", "preparation"];
export default function IngredientComponentEditor(props) {
  console.log(props);
  const defaults = {
    type: "none",
    value: "",
    onChange: (event) => console.log(event.target.value),
  };

  const form = { ...defaults, ...props };
  const optionMapper = (type) => (
    <option value={type} key={type}>
      {type}
    </option>
  );
  const options = types.map(optionMapper);

  return (
    <div style={{ display: "inline-block" }}>
      <select onChange={form.onChange} name="type" value={form.type}>
        {options}
      </select>
      <input
        value={form.originalText}
        name="originalText"
        onChange={form.onChange}
      />
    </div>
  );
}
