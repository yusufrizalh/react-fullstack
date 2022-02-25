import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const ListCategory = () => {
  const [categories, setCategories] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get("http://localhost:8001/categories");
    setCategories(response.data);
  };

  const deleteCategory = async id => {
    await axios.delete(`http://localhost:8001/categories/${id}`);
    getCategories();
  };

  function search(items) {
    return items.filter(item => {
      return searchParam.some(newItem => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div>
      <Navbar />
      <div className="container block">
        <h2 className="box">List Categories</h2>
        <div className="columns">
          <div className="column">
            <Link to="/category/add" className="button is-link block">
              New Category
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
                  placeholder="Search by Category Name"
                  value={q}
                  onChange={event => setQ(event.target.value)}
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
                <th>Category Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {search(categories).map((category, index) =>
                <tr key={category.id}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {category.name}
                  </td>
                  <td>
                    <Link
                      to={`/category/edit/${category.id}`}
                      className="button is-small is-info is-outlined"
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="button is-small is-danger is-outlined"
                      onClick={() => deleteCategory(category.id)}
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

export default ListCategory;
