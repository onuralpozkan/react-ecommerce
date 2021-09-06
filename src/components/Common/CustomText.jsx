import "./CustomText.css";
export const CustomText = ({ text, cssClass }) => (
  <h1 className={cssClass}>{text}</h1>
);
