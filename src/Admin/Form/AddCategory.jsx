import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddCategory() {


// Adding the Category
const nav = useNavigate();
  const [data, setData] = useState({
    name: "",
  });

  const handleInputCategory = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submission btn triggered!");

    const response = await axios.post(
      "https://ecommerce-backend-88p8.onrender.com/api/createCategory",data,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
     
    );
    if (response.status===200){
      nav('/categoryTable')

    }else{
      alert('Something went Wrong!')
    }

  };




  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Add Product Category
        </h2>
        <FontAwesomeIcon icon={faPlus} size="2x" className="cursor-pointer" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="categoryName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleInputCategory}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2  hover:border-black"
            placeholder="Enter category name"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-black border-2  text-white text-bold px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 "
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
