import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
  const [data, setData] = useState({ name: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit triggered!");

    try {
      const response = await axios.patch(
        `https://ecommerce-backend-88p8.onrender.com/api/updateCategory/${id}`, { name: data.name },
       
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        },
      );

      if (response.status === 200) {
        navigate('/categoryTable');
      } else {
        console.log("Something went wrong while editing");
      }
    } catch (error) {
      console.error("Error while submitting:", error);
    }
  };

  const getCategory = async () => {
    try {
      const res = await axios.get(
        `https://ecommerce-backend-88p8.onrender.com/api/categoryById/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (res.status === 200) {
        setData(res.data.data);
      } else {
        console.error("Failed to fetch category");
      }
    } catch (error) {
      console.error("Error while fetching category:", error);
    }
  };

  useEffect(() => {
    console.log("Category ID:", id);//print ni hudainaaa!!
    if (id) {
      getCategory();
    }
  }, [id]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Edit Product Category
        </h2>
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
            value={data?.name}
            name="name"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 hover:border-black"
            placeholder="Enter category name"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-black border-2 text-white text-bold px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
          >
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
