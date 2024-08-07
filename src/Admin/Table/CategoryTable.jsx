import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from '../adminNavbar/AdminNavbar';

const CategoryTable = () => {
  const {id}= useParams();
  const [data,setData]=useState([]);

  // Now the read Function we are going to perform
  const getCategory= async()=>{
    const response= await axios.get("https://ecommerce-backend-88p8.onrender.com/api/findAllCategory");
    if (response.status===200){
      setData(response.data.data);
    }
  }

  useEffect(()=>{
    getCategory();
  },[])

  // In this Section we are going to perform the Delete Part!
  const nav = useNavigate();
  const handleDelete = async(id) => {
    const response = await axios.delete(`https://ecommerce-backend-88p8.onrender.com/api/deleteCategory/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    });

    if(response.status === 200){
      getCategory();
    } else {
      alert("Error Occured while deleting");
    }
  }

  // When the edit button is clicked, navigate to the edit form
  const handleEdit = (id) => {
    nav(`/editCategory/${id}`);
  }

  return (
  <div className='flex'>
   <AdminNavbar/>
    
    <div className="flex flex-col items-center p-4 relative w-full">
     
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Category Table</h1>
        <Link to="/addCategory" className="bg-black text-white py-2 px-4 rounded flex items-center">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Category
        </Link>
      </div>
      <table className="min-w-full bg-gray-100 border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">S.N</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a, index) => (  
            <tr key={a.id} className="text-center">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{a.name}</td>
              <td className="py-2 px-4 border">
                <button className="bg-black text-white py-1 px-4 rounded mr-2" onClick={() => handleEdit(a.id)}>Edit</button>
                <button className="bg-white text-black border-2 py-1 px-4 rounded" onClick={() => handleDelete(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 py-2 px-4 bg-black text-white rounded">Back</button>
    </div>
  </div>
  );
};

export default CategoryTable;
