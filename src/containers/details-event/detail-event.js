import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import Image1 from "../../assets/img/screen-5.jpg";
const DetailEvent = (props) => {
  const [event, setEvent] = useState([]);
  const history = useHistory();

  return (
    <Fragment>
      <div className="event__wrapper">
        <div className="event__left-container">
          <div className="event__heading">
            <hr />
            <h1 className="event__heading-title">The Dood</h1>
            <hr/>
            <p className="event__heading-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Modi architecto quaerat non exercitationem mollitia dignissimos earum eveniet soluta omnis!
             Quidem eaque nisi vero odit iusto porro id. Accusantium, cupiditate itaque?</p>
             <div className="event__heading-image">
             </div>
          </div>

        </div>
        <div className="event__right-container">
        <p className="event__heading-intro--reverse">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Modi architecto quaerat non exercitationem mollitia dignissimos earum eveniet soluta omnis!
             Quidem eaque nisi vero odit iusto porro id. Accusantium, cupiditate itaque?</p>
          <h3 className="event__title">Detailed event 2</h3>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};
export default DetailEvent;

/* <img src={Image1} alt="" className="event__img" width="50%"/> */
