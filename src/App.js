import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/validation";
import "./App.css";

// Components
import Home from "./components/Home/Home1";
import Form from "./components/Form/Form";
import OrderConfirmed from "./components/OrderConfirmed/OrderConfirmed";

const App = () => {
  // FORM STATE
  const initialFormData = {
    name: "",
    pizzaSize: "",
    pepperoni: false,
    bacon: false,
    mushrooms: false,
    onions: false,
    specialInstructions: "",
  };

  // Errors I want to display in the state that are required
  const initialFormErrors = {
    name: "",
    pizzaSize: "",
    specialInstructions: "",
  };

  const initialOrder = {}; // Object
  const initialDisabled = true; // Boolean

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [order, setOrder] = useState(initialOrder);
  const [disabled, setDisabled] = useState(initialDisabled);

  const history = useHistory();
  const orderCompleted = () => {
    history.push("/confirmed");
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const change = (name, value) => {
    validate(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitNewOrder = (order) => {
    axios
      .post("https://reqres.in/api/orders", order)
      .then((res) => {
        // console.log(res.data);
        setOrder(res.data);
        orderCompleted();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setFormData(initialFormData);
      });
  };

  const submit = () => {
    const order = {
      name: formData.name,
      pizzaSize: formData.pizzaSize,
      toppings: ["pepperoni", "bacon", "mushrooms", "onions"].filter(
        (topping) => !!formData[topping]
      ),
      instructions: formData.specialInstructions,
    };
    submitNewOrder(order);
  };

  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">
          Order Pizza
        </Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form
            data={formData}
            change={change}
            submit={submit}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
        <Route path="/confirmed">
          <OrderConfirmed data={order} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
