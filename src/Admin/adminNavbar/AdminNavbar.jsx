import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
      <div className="hidden md:flex flex-col h-screen w-64 bg-black text-white rounded-2xl">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black px-2 py-4 gap-10 rounded-2xl">
            <div>
              <Link to='/dash' className="flex items-center px-4 py-2 hover:bg-gray-800 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 5v7m-4-4h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16M4 12h16m-4 4v7" />
                </svg>
                Dashboard
              </Link>
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <Link to='/dash' className="flex items-center px-4 py-2 mt-2 hover:bg-gray-800 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 5v7" />
                </svg>
                Home
              </Link>
              <a href="#" className="flex items-center px-4 py-2 mt-2 hover:bg-gray-800 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 6l9-5-9-5-9 5 9 5z" />
                </svg>
                Profile
              </a>
              <a href="#" className="flex items-center px-4 py-2 mt-2 hover:bg-gray-800 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
                </svg>
                View Orders
              </a>
              <Link to='/categoryTable' className="flex items-center px-4 py-2 mt-2 hover:bg-gray-800 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 5v7" />
                </svg>
                View Category
              </Link>
              <Link to ='/productTable' className="flex items-center px-4 py-2 mt-2 hover:bg-gray-800 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 4H3v16h18V4zM3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                </svg>
                View Product
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default AdminNavbar
