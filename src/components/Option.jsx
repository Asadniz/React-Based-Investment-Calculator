export default function Option({ label, id, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className="input-group"
        type="number"
        id={id}
        onChange={(event) => handleChange(id, +event.target.value)}
      />
    </div>
  );
}
