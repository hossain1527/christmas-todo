import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <React.Fragment>
      <div className="col-lg-6 order-1 order-lg-2 header-img d-none d-sm-block">
        <img src={props.imgSrc} className="animated" alt="homeImg" />
      </div>
      <div className="mt-3">
        <NavLink to={props.visit} className="btn-start">
          {props.btnName}
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Common;
