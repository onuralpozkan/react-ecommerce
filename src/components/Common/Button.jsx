import "./Button.css";
export const Button = ({ handleClick, cssClass, label }) => (
  <button onClick={handleClick} className={cssClass}>
    {label}
  </button>
);
