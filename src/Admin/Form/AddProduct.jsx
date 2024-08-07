import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddProduct() {

    const[data,setData]=useState({
        name:'',
        price:'',
        description:'',
        features:'',
        stock:'',
        image:''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;

        setData({
            ...data,
            [name]: name === "image" ? e.target.files[0] : value,
        });

    }
    console.log(data)



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("sub done")
        const response = await axios.post("https://ecommerce-backend-88p8.onrender.com/api/createProduct", data,{
            headers:{
              "Content-Type": "multipart/form-data",
              "Authorization" : localStorage.getItem('token')
              }
        })
        
        if(response.status===201){
             nab('/productTable')  
        }else{
          alert("something Went Wrong")
        }
        
    
       
      };
      
    
    return (
      <form className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Add Product</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price:</label>
          <input
            type="number"
            onChange={handleChange}
            name="price"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Features:</label>
          <input
            type="text"
            name="features"
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock:</label>
          <input
            type="number"
            onChange={handleChange}
            name="stock"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image:</label>
          <input
            type="file"
            onChange={handleChange}
            name="image"
            multiple
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>
        <div className="flex justify-between items-center mt-6">
            <Link to='/productTable'>
          <button
            type="button"
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
            
          >
            Back
          </button></Link>
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
  
  export default AddProduct;
  