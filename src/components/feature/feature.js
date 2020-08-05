import React, { Fragment } from "react";
import Proptypes from "prop-types";
//import './slide.scss';
import { FaRegThumbsUp } from 'react-icons/fa';
const Feature = ({ icon, title, text }) => {
  return (
    <div className="feature">
      <div className="feature__heading">{title}</div>
      {/* <img src={icon} alt="another"  /> */}
      <FaRegThumbsUp className="feature__icon" size={32} />
      <div className="feature__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  icon: Proptypes.string,
  title: Proptypes.string,
  text: Proptypes.string,
};

export { Feature };
