function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ padding: "8px 12px", cursor: "pointer" }}
    >
      {text}
    </button>
  );
}

export default Button;
