import React, { useEffect, useState } from 'react';
import AdminNavbar from '../adminNavbar/AdminNavbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductTable = () => {
   //Yo vanko xaii hamro table ma dekauna haii
  const [data,setData]=useState();
  const getProduct=async()=>{
    const response= await axios.get("https://ecommerce-backend-88p8.onrender.com/api/findAllProduct")
    if(response.status===200){
      setData(response.data.data)
    }
  }

  useEffect(()=>{
    getProduct();
  },[])


  //abo xaii delete ko lagii la mero vaii

  const handleDelete=()=>{

  }








  
  return (
    <div className='flex space-x-2'>
      <AdminNavbar/>
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Update Products</h1>
          <Link to='/addProduct'>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 mr-10">
            + Add Product
          </button>
          </Link>
        </div>
        <table className="min-w-full bg-white border border-black mr-10">
          <thead>
            <tr className="border-b border-black bg-gray-100">
              <th className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black text-white bg-black">Image</th>
              <th className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black text-white bg-black">Sneaker's Name</th>
              <th className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black text-white bg-black">Price</th>
              <th className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black text-white bg-black">Description</th>
              <th className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black text-white bg-black">Features</th>
              <th className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black text-white bg-black">Stock</th>
              <th className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black text-white bg-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.id} className="border-b border-black">
                <td className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black">
                  <img src={data.image} alt={data.name} className="h-20 w-20 object-cover" />
                </td>
                <td className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black">{data.name}</td>
                <td className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black">{data.price}</td>
                <td className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black">{data.stock}</td>
                <td className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black">{data.description}</td>
                <td className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black">{data.features}</td>
                <td className="py-2 px-4 border-l border-r-0 border-t-0 border-b-0 border-black">
                  <button className="bg-black text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button className="bg-white text-black border-2 px-2 py-1 rounded" onClick={()=>handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
