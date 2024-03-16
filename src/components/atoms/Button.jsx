import PropTypes from "prop-types";

const Button = ({ text, onClick, type, className, color, hoverColor }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-block bg-${color} hover:bg-${hoverColor} text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  className: "",
  color: "blue-500", // Default Tailwind CSS color class
  hoverColor: "blue-700", // Default Tailwind CSS hover color class
};

export default Button;
