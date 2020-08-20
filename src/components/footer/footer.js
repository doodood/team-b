import React, {Fragment} from 'react'
import { Link, useHistory } from "react-router-dom";
import { APP_ROUTES } from "../../utils/route-config";
const Footer = () => {
    return (
        <Fragment>
        <footer className="footer">
          <ul className="nav">
            <li className="nav__item">
              <Link to={APP_ROUTES.HOME} className="nav__link">
                Accueil
              </Link>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Link 2
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Link 3
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Link 4
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
          <p className="copyright">
            &copy; Copyright 2020 by Don Dood. Doody Impact is in the house.
          </p>
        </footer>
        </Fragment>
    )
}
export  {Footer}