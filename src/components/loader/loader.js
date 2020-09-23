import React, { Fragment } from "react";

const Loader = () => {
  return (
    <div className="loader">
      <svg viewBox="0 0 960 300" className="loader__icon">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            Loading
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className="loader__text-copy"></use>
          <use xlinkHref="#s-text" className="loader__text-copy"></use>
          <use xlinkHref="#s-text" className="loader__text-copy"></use>
          <use xlinkHref="#s-text" className="loader__text-copy"></use>
          <use xlinkHref="#s-text" className="loader__text-copy"></use>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
