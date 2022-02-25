import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditCategory = () => {
  const [catName, setCatName] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getCategoryById();
  }, []);

  const getCategoryById = async () => {
    const response = await axios.get(`http://localhost:8001/categories/${id}`);
    setCatName(response.data.name);
  };

  const updateCategory = async event => {
    event.preventDefault(); // menghindari adanya reload
    await axios.patch(`http://localhost:8001/categories/${id}`, {
      name: catName
    });
    history.push("/categories");
  };

  return (
    <div className="container">
      <h2 className="box">Update Category</h2>
      <form onSubmit={updateCategory} className="box">
        <div className="field block">
          <label htmlFor="title" className="label">
            Category Name
          </label>
          <input
            required
            type="text"
            className="input"
            placeholder="Enter category name here"
            value={catName}
            onChange={event => setCatName(event.target.value)}
          />
        </div>
        <div className="field block">
          <button className="button is-link">Update Category</button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
