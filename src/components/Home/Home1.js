import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className="header">
      <h1>Bloomtech Eats</h1>
      <h2>
        Order Some of Bloomtech's Finest Cuisine in the Market, Bloomtech Pizza!
      </h2>
      <Link to="pizza">
        <button>Order Pizza now!</button>
      </Link>
    </div>
  );
};

export default Home;
