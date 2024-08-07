import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './adminNavbar/AdminNavbar';

const Dashboard = () => {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
       <AdminNavbar/>
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between flex-shrink-0 p-4 bg-white border-b border-gray-200">
            <div className="flex items-center w-64">
              <svg className="w-8 h-8 text-gray-700 fill-current" viewBox="0 0 24 24" fill="none">
                <path d="M19 11H5V9h14v2zm2-9H3c-1.1 0-1.99.9-1.99 2L1 21a2 2 0 002 2h18c1.1 0 2-.9 2-2V4a2 2 0 00-2-2zm0 18H3V4h18v16z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute top-0 left-0 mt-2 ml-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
              <div className="mt-4">
                <div className="flex flex-wrap -mx-6">
                  <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                    <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                      <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 17a1 1 0 011-1h1a1 1 0 011 1v5h1a1 1 0 011-1V9a1 1 0 00-.293-.707L15 7.586 12 4.586l-3 3-1.707-1.707A1 1 0 006 7v14a1 1 0 011-1h1v-5z"
                          />
                        </svg>
                      </div>
                      <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">Total Product's</h4>
                        <div className="text-gray-500">78</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                    <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                      <div className="p-3 bg-green-600 bg-opacity-75 rounded-full">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 10h1l1.388-4.175a2 2 0 011.606-1.375l.42-.05L10.42 10H14l2.588-7.7a2 2 0 011.675-1.3h.053a2 2 0 011.675 1.3L20.106 10H21m-18 0H1m4 0H1m4 0h16m0 0v2c0 1.657-1.343 3-3 3H8c-1.657 0-3-1.343-3-3v-2m4 0v2m0 0H1m4 0H1m4 0h16m0 0v2c0 1.657-1.343 3-3 3H8c-1.657 0-3-1.343-3-3v-2m4 0v2m0 0h16m0 0v2c0 1.657-1.343 3-3 3H8c-1.657 0-3-1.343-3-3v-2m4 0v2"
                          />
                        </svg>
                      </div>
                      <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">Total Earnings</h4>
                        <div className="text-gray-500">$ 35,084</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0 xl:mt-0">
                    <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                      <div className="p-3 bg-red-600 bg-opacity-75 rounded-full">
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.403-7.804A4 4 0 0014.68 5H9.32a4 4 0 00-3.917 3.196L4 17h5m-3 0a2 2 0 002 2h6a2 2 0 002-2H7z"
                          />
                        </svg>
                      </div>
                      <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">Total Orders</h4>
                        <div className="text-gray-500">167</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex flex-wrap -mx-6">
                  <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-md shadow-sm">
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-gray-700">Projects</h4>
                        <div className="mt-4">
                          <h2 className="text-3xl font-semibold text-gray-700">35</h2>
                          <div className="text-gray-500">ongoing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                    <div className="bg-white rounded-md shadow-sm">
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-gray-700">Clients</h4>
                        <div className="mt-4">
                          <h2 className="text-3xl font-semibold text-gray-700">58</h2>
                          <div className="text-gray-500">total</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0 xl:mt-0">
                    <div className="bg-white rounded-md shadow-sm">
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-gray-700">Products</h4>
                        <div className="mt-4">
                          <h2 className="text-3xl font-semibold text-gray-700">127</h2>
                          <div className="text-gray-500">total</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex flex-wrap -mx-6">
                  <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-md shadow-sm">
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-gray-700">Recent Activity</h4>
                        <div className="mt-4">
                          <div className="flex items-center">
                            <div className="text-gray-700">Created new project</div>
                            <span className="ml-auto text-sm text-gray-500">Just now</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <div className="text-gray-700">Completed order #12345</div>
                            <span className="ml-auto text-sm text-gray-500">2 hrs ago</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <div className="text-gray-700">Received payment</div>
                            <span className="ml-auto text-sm text-gray-500">3 hrs ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                    <div className="bg-white rounded-md shadow-sm">
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-gray-700">Tasks</h4>
                        <div className="mt-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label className="ml-2 text-gray-700">Design new logo</label>
                          </div>
                          <div className="flex items-center mt-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label className="ml-2 text-gray-700">Develop mobile app</label>
                          </div>
                          <div className="flex items-center mt-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <label className="ml-2 text-gray-700">Deploy website</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0 xl:mt-0">
                    <div className="bg-white rounded-md shadow-sm">
                      {/* <div className="p-6">
                        <h4 className="text-lg font-medium text-gray-700">Messages</h4>
                        <div className="mt-4">
                          <div className="flex items-center">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1501466044931-62695aada8d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                              alt="avatar"
                            />
                            <div className="ml-2 text-gray-700">
                              <div>Hey! How are you?</div>
                              <div className="text-sm text-gray-500">5 mins ago</div>
                            </div>
                          </div>
                          <div className="flex items-center mt-4">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1501466044931-62695aada8d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                              alt="avatar"
                            />
                            <div className="ml-2 text-gray-700">
                              <div>Can we reschedule our meeting?</div>
                              <div className="text-sm text-gray-500">1 hr ago</div>
                            </div>
                          </div>
                          <div className="flex items-center mt-4">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1501466044931-62695aada8d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                              alt="avatar"
                            />
                            <div className="ml-2 text-gray-700">
                              <div>Great job on the project!</div>
                              <div className="text-sm text-gray-500">2 hrs ago</div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
