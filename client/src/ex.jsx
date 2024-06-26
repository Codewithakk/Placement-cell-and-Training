import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

import vks from "./assets/userprofile.png";
import director from "./assets/userprofile.png";

const Ex = props => (
  <div className="example">
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${director})` }} />
        <ul className="details">
          <li className="author">Akshay Kumar Singh</li>
          <li className="date">Director</li>
          <li className="tags">
            <ul>
              <li>VirtualCareer Hub</li>
              <li>Lucknow</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>A vision to follow</h1>
        <h2>Evolving a brand-name takes years of nurturing</h2>
        <p>
          {" "}
          Evolving a brand-name takes years of nurturing, hard work and passion.
          VirtualCareer Hub Lucknow, which started its journey in 2015, has brought in the
          culture of innovation among its students.{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/director" className="activeclass">           
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
    <div className="blog-card alt">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${vks})` }} />
        <ul className="details">
          <li className="author">Mr. XYZ</li>
          <li className="date">Training and Placement Officer</li>
          <li className="tags">
            <ul>
              <li>VirtualCareer Hub</li>
              <li>Lucknow</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>Exploring the skies</h1>
        <h2>The Training and Placement cell </h2>
        <p>
          The Training and Placement cell of VirtualCareer Hub
          , Lucknow is an integral part of the academics It helps in
          shaping the careers of our students in the field of Information
          Technology.{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/tpo" className="activeclass">Calendar
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
  </div>
);

export default Ex;
