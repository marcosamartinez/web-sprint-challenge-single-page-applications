import React from "react";
import "./index.css";

const Form = ({ data, change, submit, errors, disabled }) => {
  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div className="form">
      <h2>Edit your order</h2>
      <form id="pizza-form" onSubmit={onSubmit}>
        <div>
          {errors.name}
          <br />
          {errors.pizzaSize}
        </div>
        {/* Name */}
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Enter Name"
            value={data.name}
            onChange={onChange}
          />
        </label>

        {/* Dropdown */}

        <label>
          Pizza Size
          <select
            name="pizzaSize"
            id="size-dropdown"
            value={data.pizzaSize}
            onChange={onChange}
          >
            <option value="">--Select Size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        {/* Checkboxes */}
        <h3>Add Toppings</h3>
        <div className="checkbox-div">
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={data.pepperoni}
              onChange={onChange}
            />
          </label>
          <label>
            Bacon
            <input
              type="checkbox"
              name="bacon"
              checked={data.bacon}
              onChange={onChange}
            />
          </label>
          <label>
            Mushrooms
            <input
              type="checkbox"
              name="mushrooms"
              checked={data.mushrooms}
              onChange={onChange}
            />
          </label>
          <label>
            Onions
            <input
              type="checkbox"
              name="onions"
              checked={data.onions}
              onChange={onChange}
            />
          </label>
        </div>
        {/* Text Area */}
        <label>
          Special Instructions
          <textarea
            id="special-text"
            name="specialInstructions"
            placeholder="Enter any instructions you may have for this order ..."
            value={data.specialInstructions}
            onChange={onChange}
          />
        </label>
        <button disabled={disabled} id="order-button">
          Add to Order
        </button>
      </form>
    </div>
  );
};

export default Form;
