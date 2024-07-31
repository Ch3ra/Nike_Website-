import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {

    const [showDropdown, setShowDropdown] = useState(false);
  const [country, setCountry] = useState('Nepal');
  const countries = ['Nepal', 'India', 'USA', 'Canada', 'Australia']; // Add more countries as needed

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen flex mt-10 justify-center bg-white">
      <div className="">
        <div className="flex items-center mb-4" style={{ gap: '1rem' }}>
          <img
            src="https://i.pinimg.com/736x/55/f6/8e/55f68e1fbbfb3a97de3447dea15fbe28.jpg"
            alt="Nike"
            className="h-16 w-auto"
          />
          <img
            src="https://thumbs.dreamstime.com/b/air-jordan-logo-editorial-illustrative-white-background-air-jordan-logo-editorial-illustrative-white-background-eps-download-208329467.jpg"
            alt="Jordan"
            className="h-16 w-auto"
          />
        </div>
        <h2 className=" text-2xl font-bold text-gray-900">
          Join us by creating an account
        </h2>
        <div className="mt-4 ml-3 relative">
          <span className="text-gray-700">{country} </span>
          <button
            type="button"
            className="text-gray-500 underline"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Change
          </button>
          {showDropdown && (
            <div className="absolute mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
              <ul>
                {countries.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleCountryChange(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <form className="mt-8 space-y-6 ml-3">
          <div className="rounded-md shadow-sm">
          <div className="mb-4">
              <label htmlFor="email" className="sr-only">Username</label>
              <input
                name="username"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Username*"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Email*"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Password*"
              />
            </div>
            <div>
              <label htmlFor="confirm_password" className="sr-only">Confirm Password</label>
              <input
                name="confirm_password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password*"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600">
              Already have an account?
              
             <Link to ='/login'> <p className="font-medium underline mt-2 cursor-pointer">
                Sign In Here!</p></Link>
             
              
            </p>
          </div>

          <div>
            <button className="mt-2 px-4 py-1 border font-medium ml-72 bg-black text-white rounded-full text-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
