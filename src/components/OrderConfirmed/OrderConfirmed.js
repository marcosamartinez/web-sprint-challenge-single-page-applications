import React from "react";
import "./index.css";

const OrderConfirmed = ({ data }) => {
  return (
    <div className="confirmation">
      <h2>Congrats! Pizza is on it's way!</h2>
      <div>
        <p>Name: {data.name}</p>
        <p>Pizza Size: {data.pizzaSize}</p>
        <p>Toppings:</p>
        <ul>
          {data.toppings.map((topping, idx) => {
            return <li key={idx}>{topping}</li>;
          })}
        </ul>
        <h3>Instructions: {data.instructions}</h3>
      </div>
    </div>
  );
};

export default OrderConfirmed;
