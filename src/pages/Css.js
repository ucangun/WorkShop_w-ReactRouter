import React from "react";
import css from "../assets/img/logo_css.png";
import { Link } from "react-router-dom";

const Css = () => {
  return (
    <div className="card">
      <img src={css} alt="" />
      <h3>CSS3 Styling</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        voluptates voluptas similique qui ipsa sunt aliquam? Quos minima
        voluptatibus illo, similique obcaecati blanditiis id eligendi saepe
        voluptates iusto soluta tempore quasi laudantium. Tempore, recusandae
        laboriosam dignissimos eaque illum aspernatur perspiciatis, deleniti
        obcaecati in dolorum at vel optio ratione est. Eius suscipit ab officia
        optio maiores! Vitae soluta accusamus animi quo consequatur ea
        repudiandae? Quis nisi iusto distinctio nihil repudiandae, illum
        voluptas labore, saepe consequuntur sint, nemo velit laudantium deleniti
        rerum ab at? Iure consectetur debitis illum totam, quam eaque ipsum quo
        esse at nulla suscipit soluta. Incidunt labore alias dignissimos.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        voluptates voluptas similique qui ipsa sunt aliquam? Quos minima
        voluptatibus illo, similique obcaecati blanditiis id eligendi saepe
        voluptates iusto soluta tempore quasi laudantium. Tempore, recusandae
        laboriosam dignissimos eaque illum aspernatur perspiciatis, deleniti
        obcaecati in dolorum at vel optio ratione est. Eius suscipit ab officia
        optio maiores! Vitae soluta accusamus animi quo consequatur ea
        repudiandae? Quis nisi iusto distinctio nihil repudiandae, illum
        voluptas labore, saepe consequuntur sint, nemo velit laudantium deleniti
        rerum ab at? Iure consectetur debitis illum totam, quam eaque ipsum quo
        esse at nulla suscipit soluta. Incidunt labore alias dignissimos.
      </p>
      <Link to="/">
        <button className="button_1">Go Back</button>
      </Link>
    </div>
  );
};

export default Css;
