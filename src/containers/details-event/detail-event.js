import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import Image1 from "../../assets/img/screen-5.jpg";
import { fetchEventById } from "../../components/slide/slide.services";
const DetailEvent = (props) => {
  const [event, setEvent] = useState([]);
  const history = useHistory();
  let params = useParams();
  useEffect(() => {
    console.log("HEY HEY HEY USE EFFECT");
    fetchEventById(params.id).then((response) => {
      console.log(response.data);
      setEvent(response.data.story.content);
    });
  }, []);

  return (
    <Fragment>
        <div className="athelas">
          <div className="vh-100 dt w-100 tc bg-dark-gray white cover arld" style={{background:`url(${event.thumbnail}) no-repeat center`}}>
            <div className="dtc v-mid">
            <header className="white-70">
              <h2 className="f6 fw1 ttu tracked mb2 lh-title">Issue Six</h2>
              <h3 className="f6 fw1 lh-title">Summer MMXVI</h3>
            </header>
            <h1 className="f1 f-headline-l fw1 i white-60">{event.title}</h1>
            <blockquote className="ph0 mh0 measure f4 lh-copy center">
              <p className="fw1 white-70">
                {event.summary}
              </p>
              <cite className="f6 ttu tracked fs-normal">Massimo Vignelli</cite>
            </blockquote>
            </div>
          </div>
          <div className="center measure-wide f5 pv5 lh-copy ph2">
            <h1 className="f1 lh-title">The repercussion of ugliness is endless</h1>
            <p>
              The choice of paper size is one of the  first of any given work to be printed. There are two basic paper size systems in the world: the international A sizes, and the American sizes.
            </p>
            <p>
              {event.content}
            </p>
            <br/>
            <p>
              These are the basic DIN sizes in mm. for : A0, 841x1189 - A1, 594x841 -
              A2, 420x594 - A3, 297x420 - A4, 210x297 - A5, 148x210 - A6, 105 x148 -
              A7, 74x 105 - A8, 52x74 - A9, 37x52 - A10, 26x37.
            </p>
            <p>
              The A4 is the basic size for stationary. Two thirds of it is a square,
              a nice economical happenstance resulting from the golden rectangle.
              It is one of the reasons we tend to use as much
              as possible the DIN sizes: proportions are always leading to other nice proportions.
            </p>
            <p>
              This does not happen with the American basic size which leads to nothing. I counted 28 different standard sizes in USA!. The only reason we use it is because everybody in USA uses it, all stationary in USA is that size, so are manilla folders,  les and of ce equipment!
              The repercussion of ugliness is endless.
            </p>
          </div>
        </div>

      <Footer />
    </Fragment>
  );
};
export default DetailEvent;

/* <img src={Image1} alt="" className="event__img" width="50%"/> */
/* <div className="event__wrapper">
        <div className="event__left-container">
          <div className="event__heading">
            <hr />
            <h1 className="event__heading-title">{event.title}</h1>
            <hr/>
            <p className="event__heading-intro">{event.content}</p>
             <div className="event__heading-image">
             <img src={event.thumbnail} alt="" className="event__heading-img" width="50%"/> 
             </div>
          </div>

        </div>
        <div className="event__right-container">
        <p className="event__heading-intro--reverse">{event.summary}</p>
          <h3 className="event__title">Detailed event 2</h3>
        </div>
      </div> */