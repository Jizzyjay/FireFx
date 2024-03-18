// import PropTypes from "prop-types";

// const Button = ({ text, onClick, type, textColor, className, color, hoverColor, border, borderColor }) => {
//   return (
//     <button
//       onClick={onClick}
//       type={type}
//       style={{
//         backgroundColor: color,
//         borderColor: borderColor,
//       }}
//       className={`text-white font-bold py-2 px-4 rounded text-${textColor} hover:bg-${hoverColor} ${border ? 'border' : ''} ${className}`}
//     >
//       {text}
//     </button>
//   );
// };

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
//   type: PropTypes.oneOf(["button", "submit", "reset"]),
//   className: PropTypes.string,
//   color: PropTypes.string,
//   hoverColor: PropTypes.string,
//   border: PropTypes.bool,
//   borderColor: PropTypes.string,
//   textColor: PropTypes.string,
// };

// Button.defaultProps = {
//   type: "button",
//   className: "",
//   color: "#4299e1", // Default background color (blue)
//   hoverColor: "#3182ce", // Default hover color (darker blue)
//   border: false,
//   borderColor: "",
// };

// export default Button;


import PropTypes from "prop-types";

const Button = ({ text, onClick, type, textColor, className, color, hoverColor, border, borderColor }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        backgroundColor: color,
        borderColor: borderColor,
      }}
      className={`font-bold py-2 px-4 rounded ${textColor ? `text-${textColor}` : ''} hover:bg-${hoverColor} ${border ? 'border' : ''} ${className}`}
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
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  className: "",
  color: "#4299e1", // Default background color (blue)
  hoverColor: "#3182ce", // Default hover color (darker blue)
  border: false,
  borderColor: "",
};

export default Button;
