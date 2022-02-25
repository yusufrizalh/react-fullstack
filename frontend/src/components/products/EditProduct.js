import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:8001/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  const updateProduct = async event => {
    event.preventDefault(); // menghindari adanya reload
    await axios.patch(`http://localhost:8001/products/${id}`, {
      title: title,
      price: price
    });
    history.push("/");
  };

  return (
    <div className="container">
      <h2 className="box">Update Product</h2>
      <form onSubmit={updateProduct} className="box">
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
          <button className="button is-link">Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
