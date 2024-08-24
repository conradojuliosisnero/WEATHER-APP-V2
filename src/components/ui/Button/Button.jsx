export function Button({ name, onClick }) {
  return (
    <button className="btn-uno" onClick={onClick}>
      {name}
    </button>
  );
}
