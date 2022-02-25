import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const saveProduct = async event => {
    event.preventDefault(); // mencegah adanya reload
    await axios.post("http://localhost:8001/products", {
      title: title,
      price: price
    });
    history.push("/"); // redirect
  };

  return (
    <div className="container">
      <h2 className="box">Add New Product</h2>
      <form onSubmit={saveProduct} className="box">
        <div className="field block">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            required
            type="text"
            className="input"
            placeholder="Enter title here"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <div className="field block">
          <label htmlFor="price" className="label">
            Price
          </label>
          <input
            required
            type="text"
            className="input"
            placeholder="Enter price here"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
        </div>
        <div className="field block">
          <button className="button is-link">Save Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
