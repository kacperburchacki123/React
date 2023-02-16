export default function Input(props: {
  value: string;
  onChange: (text: string) => void;
  name: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
      <label htmlFor="">{props.name}</label>
      <input
        className="form__input"
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
