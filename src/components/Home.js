import React from "react";
import "../components/Home.css";
import LandingImage from "../Assets/owl-img.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content">
      <p className="text">
        <h2 className="title_content">Like Animals</h2>
        Look at me better on Animals page.
        <Link to={"/animals"}>
          <button class="btn3">See More</button>
        </Link>
      </p>

      <div className="langing_img">
        <img className="landing" src={LandingImage} alt="owl" />
      </div>
    </div>
  );
};

export default Home;
