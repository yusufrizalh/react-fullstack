import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8001/products");
    setProducts(response.data);
  };

  const deleteProduct = async id => {
    await axios.delete(`http://localhost:8001/products/${id}`);
    getProducts();
  };

  return (
    <div>
      <Navbar />
      <div className="container block">
        <h2 className="box">List Products</h2>
        <div className="columns">
          <div className="column">
            <Link to="/product/add" className="button is-link block">
              New Product
            </Link>
          </div>
          <div className="column">
            <div className="field">
              <label htmlFor="search-form">
                <input
                  type="search"
                  className="input"
                  autoComplete="off"
                  name="search-form"
                  id="search-form"
                  placeholder="Search by Title"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="table-container box">
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) =>
                <tr key={product.id}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {product.title}
                  </td>
                  <td>
                    {product.price}
                  </td>
                  <td>
                    <Link
                      to={`/product/edit/${product.id}`}
                      className="button is-small is-info is-outlined"
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="button is-small is-danger is-outlined"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
