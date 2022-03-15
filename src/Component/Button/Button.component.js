import "./button.styles.css";
const Button = ({ text }) => {
  return (
    <div className="button-wrapper">
      <button> {text} </button>
    </div>
  );
};

export default Button;
