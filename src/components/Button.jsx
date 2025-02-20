/* eslint-disable react/prop-types */
const Button = ({ text, bgColor, onClick }) => {
  return (
    <button
      className={`px-2 py-2 rounded text-sm text-white font-semibold focus:outline-none`}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
