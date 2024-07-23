import React from "react";
import { Link } from "react-router-dom";

const Card = ({ src, url, title }) => {
  return (
    <div className="box">
      <Link to={url}>
        <img src={src} alt="" />
      </Link>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  );
};

export default Card;
