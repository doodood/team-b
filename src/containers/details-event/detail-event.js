import React, { useState, useEffect, Fragment } from 'react'
import { Link, useHistory } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import Image1 from "../../assets/img/screen-5.jpg";
const DetailEvent = (props) => {
    const [event, setEvent] = useState([]);
    const history = useHistory();

    return (
        <Fragment>
        <div className="event">
        <img src={Image1} alt="" className="event__img"/>
        <h3 className="event__title">Detailed event</h3>
        </div>
        
            
            <Footer/>
        </Fragment>
    )
}
export default DetailEvent