import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingItems from "./ShoppingItems";
import { useForm } from "react-hook-form";

export default function ShoppingListForm({ value }) {
  const {
    register,
    handlesubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    id: uuid(),
    product: "",
    quantity: 0,
  });
  const registerOptions = {
    product: { required: "product cannot be blank" },
  };

  const handleChange = (evt) => {
    setFormData((newData) => {
      return {
        ...newData,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    value(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        name="product"
        id="product"
        placeholder="product name"
        value={formData.product}
        onChange={handleChange}
        {...register("product", registerOptions.product)}
      />
      <small>{errors?.product && errors.product.message}</small>
      <label htmlFor="quantity">quantity</label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={formData.quantity}
        placeholder="quantity"
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
}
