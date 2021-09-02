import { Link } from "react-router-dom";
import "./Icon.css";
export const Icon = ({ lineAwesomeClass, text, url }) => {
  return (
    <a href={url} target="_blank">
      <span className="icon-container circle">
        <i className={lineAwesomeClass}></i>
        {text}
      </span>
    </a>
  );
};
