import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { APP_ROUTES } from "../../utils/route-config";
import { fetchEvents } from "../../components/slide/slide.services";
import { Slide } from "../../components/slide/slide";
import { Feature } from "../../components/feature/feature";
import { Footer } from "../../components/footer/footer";
import Image1 from "../../assets/img/screen-5.jpg";
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
              <Fragment key={event.id}>
              <Link to={`/details-event/${event.slug}`}>
                <Slide
                  img={event.content.thumbnail}
                  title={event.content.title}
                  text={event.content.summary}
                />
                </Link>
              </Fragment>
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
            <img src={Image1} alt="" className="card__img" />
            <h4 className="card__title">The Dood</h4>
            <div className="card__body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          <Link to={APP_ROUTES.DETAILS_EVENT} className="card__btn btn"> Test 2</Link>
          </div>

          <div className="card">
            <img src={Image1} alt="" className="card__img" />
            <h4 className="card__title">The Dood</h4>
            <div className="card__body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Link to={APP_ROUTES.DETAILS_EVENT} className="card__btn btn"> Test 2</Link>
          </div>

          <div className="card">
            <img src={Image1} alt="" className="card__img" />
            <h4 className="card__title">The Dood</h4>
            <div className="card__body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Link to={APP_ROUTES.DETAILS_EVENT} className="card__btn btn"> Test 2</Link>
          </div>

          <div className="card">
            <img src={Image1} alt="" className="card__img" />
            <h4 className="card__title">The Dood</h4>
            <div className="card__body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Link to={APP_ROUTES.THIRD} className="card__btn btn"> Third</Link>
          </div>

          <div className="card">
            <img src={Image1} alt="" className="card__img" />
            <h4 className="card__title">The Secondary</h4>
            <div className="card__body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Link to={APP_ROUTES.SECONDARY} className="card__btn btn"> Secondary layout</Link>
            
          </div>

          <div className="card">
            <img src={Image1} alt="" className="card__img" />
            <h4 className="card__title">The Dood</h4>
            <div className="card__body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Link to={APP_ROUTES.DETAILS_EVENT} className="card__btn btn"> Test 2</Link>
          </div>
        </div>
        <article className="article-section">
      <a href="https://geo.itunes.apple.com/us/movie/primer/id536457427?at=1l3vqFJ&ct=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
        <div role="img" aria-label="Primer movie" className="grow aspect-ratio--4x6 " style={{background: "url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg) no-repeat center center", backgroundSize: "cover"}}></div>
      </a>
      <a href="https://geo.itunes.apple.com/us/movie/the-big-short/id1061320456?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
        <div role="img" aria-label="The Big Short movie" className="grow aspect-ratio--4x6 " style={{background: "url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/the-big-short.jpg) no-repeat center center", backgroundSize: "cover"}}></div>
      </a>
      <a href="https://geo.itunes.apple.com/us/movie/bottle-rocket/id315360821?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
        <div role="img" aria-label="Bottle Rocket movie" className="grow aspect-ratio--4x6 " style={{background: "url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/bottlerocket.jpg) no-repeat center center", backgroundSize: "cover"}}></div>
      </a>
      </article>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
/* 
<Link to={APP_ROUTES.LOGIN}> Login </Link>
onClick={() => history.push(`/details-event/${event.id}`)} */
