const Button = ({ text, bgColor, onClick }) => {
  return (
    <button
      className={`px-6 py-3 rounded text-white font-semibold focus:outline-none`}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
