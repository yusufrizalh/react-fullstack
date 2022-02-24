import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8001/products");
    setProducts(response.data);
  };

  return (
    <div className="container">
      <h2 className="box">List Products</h2>
      <Link to="/addproduct" className="button is-link mt-4 block">
        New Product
      </Link>
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
            { products.map((product, index) => 
                <tr key={product.id}>
                    <td>{ index + 1 }</td>
                    <td>{ product.title }</td>
                    <td>{ product.price }</td>
                    <td>
                        Edit | Delete
                    </td>
                </tr>
            ) }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
