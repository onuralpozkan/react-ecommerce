import { Link } from "react-router-dom";

const Slide = ({ pageUrl, className, url, alt, imgIndex }) => {
  return (
    <Link to={pageUrl}>
      <img
        className={`${imgIndex.imgIndex == imgIndex.index ? "active" : ""}`}
        src={url}
        alt={alt}
      />
    </Link>
  );
};

export default Slide;
