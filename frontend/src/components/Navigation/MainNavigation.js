import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './MainNavigation.css';
import imgBackground from '../../assets/BackImage.jpeg'

const MainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <div>
        <header className="main-navigation">
          <div className="main-navigation__logo">
            <h1>BookingEvents</h1>
          </div>
          <nav className="main-navigation__items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/auth">User</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                  </li>
                  <li>
                    <button onClick={context.logout}>Logout</button>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
        <img className="back-ground-photo" src={imgBackground} alt="#" />
         
        </div>
      );
    }}
  </AuthContext.Consumer>
);

export default MainNavigation;