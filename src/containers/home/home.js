import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { APP_ROUTES } from "../../utils/route-config";
import { fetchEvents } from "../../components/slide/slide.services";
import { Slide } from "../../components/slide/slide";
import { Feature } from "../../components/feature/feature";
const Home = () => {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    console.log("HEY HEY HEY USE EFFECT");
    fetchEvents().then((response) => {
      console.log(response);
      setEvents(response.data.stories);
    });
  }, []);

  return (
    <Fragment>
      <div className="home">
        <div className="home_slides">
          {events.map((event) => {
            return (
              <React.Fragment key={event.id}>
                <Slide
                  img={event.content.thumbnail}
                  title={event.content.title}
                  text={event.content.summary}
                />
              </React.Fragment>
            );
          })}
        </div>
        <div className="home_features">
            <Feature
              icon="heart"
              text="'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."
              title="the Dood"
            ></Feature>
            <Feature
              icon="heart"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev."
              title="the Dood2"
            ></Feature>
            <Feature
              icon="heart"
              text="'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."
              title="the Dood3"
            ></Feature>

            <Feature
              icon="heart"
              text="'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."
              title="the Dood"
            ></Feature>
            <Feature
              icon="heart"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev."
              title="the Dood2"
            ></Feature>
            <Feature
              icon="heart"
              text="'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."
              title="the Dood3"
            ></Feature>
        </div>
        <div className="home_cards">
          <div className="card">
            <img src="" alt="" className="card__img"/>
            <h4 className="card__title">Title</h4>
            <div className="card__body">
            <p>TEST</p>
            </div>
            <button className="btn card__btn">CALL</button>
          </div>
          <div className="card">
            <img src="" alt="" className="card__img"/>
            <h4 className="card__title">Title</h4>
            <div className="card__body">
            <p>TEST</p>
            </div>
            <button className="btn card__btn">CALL</button>
          </div>
          <div className="card">
            <img src="" alt="" className="card__img"/>
            <h4 className="card__title">Title</h4>
            <div className="card__body">
            <p>TEST</p>
            </div>
            <button className="btn card__btn">CALL</button>
          </div>
          <div className="card">
            <img src="" alt="" className="card__img"/>
            <h4 className="card__title">Title</h4>
            <div className="card__body">
            <p>TEST</p>
            </div>
            <button className="btn card__btn">CALL</button>
          </div>
          <div className="card">
            <img src="" alt="" className="card__img"/>
            <h4 className="card__title">Title</h4>
            <div className="card__body">
            <p>TEST</p>
            </div>
            <button className="btn card__btn">CALL</button>
          </div>
        </div>
        <footer className="footer">Footer</footer>
      </div>
    </Fragment>
  );
};

export default Home;
{
  /* <Fragment>
<div className="home">
  <div className="home_slides">
    Slides
  </div>
  <div className="home_features">
    <h3 className="features_header">Features</h3>
  </div>
  <footer className="footer">
    Footer
  </footer>
</div>
</Fragment> */
}
