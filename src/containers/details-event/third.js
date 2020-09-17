import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import Image1 from "../../assets/img/screen-5.jpg";
const Third = (props) => {
  const [event, setEvent] = useState([]);
  const history = useHistory();

  return (
    <Fragment>
      <div className="third__wrapper">
        <div className="third__left-container">
          <img src={Image1} alt="" className="third__img" width="50%" />
        </div>
        <div className="third__right-container">
          <div className="third__article">
            <h2 className="third__title">The Dood</h2>
            <p className="third__intro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              architecto quaerat non exercitationem mollitia
            </p>
            <p className="third__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              architecto quaerat non exercitationem mollitia dignissimos earum
              eveniet soluta omnis! Quidem eaque nisi vero odit iusto porro id.
              Accusantium, cupiditate itaque?
            </p>

            <p className="third__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              architecto quaerat non exercitationem mollitia dignissimos earum
              eveniet soluta omnis! Quidem eaque nisi vero odit iusto porro id.
              Accusantium, cupiditate itaque?
            </p>

            <p className="third__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              architecto quaerat non exercitationem mollitia dignissimos earum
              eveniet soluta omnis! Quidem eaque nisi vero odit iusto porro id.
              Accusantium, cupiditate itaque?
            </p>
          </div>
          <h3 className="event__title">Detailed event 2</h3>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};
export default Third;
