import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("username is required")
    .min(2, "name must be at least 2 characters"),
  pizzaSize: yup
    .string()
    .trim()
    .oneOf(["small", "medium", "large"], "pizza size is required"),
  pepperoni: yup.boolean(),
  bacon: yup.boolean(),
  mushrooms: yup.boolean(),
  onions: yup.boolean(),
  specialInstructions: yup.string().trim(),
});

export default schema;
