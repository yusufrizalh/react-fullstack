import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddCategory = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const saveCategory = async event => {
    event.preventDefault(); // mencegah adanya reload
    await axios.post("http://localhost:8001/categories", {
      name: name
    });
    history.push("/categories"); // redirect
  };

  return (
    <div className="container">
      <h2 className="box">Add New Category</h2>
      <form onSubmit={saveCategory} className="box">
        <div className="field block">
          <label htmlFor="name" className="label">
            Category Name
          </label>
          <input
            required
            type="text"
            className="input"
            placeholder="Enter category name here"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className="field block">
          <button className="button is-link">Save Category</button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
