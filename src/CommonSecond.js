import React from "react";
import { NavLink } from "react-router-dom";

const CommonSecond = (props) => {
  return (
    <div>
      <NavLink to={props.visit} className="btn-back">
        {props.btnName}
      </NavLink>
    </div>
  );
};

export default CommonSecond;
