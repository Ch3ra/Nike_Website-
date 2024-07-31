import React, { useState } from 'react';
import Navbar from '../Global Components/Navbar';
import SliderProduct from '../Global Components/SliderProduct';
import sort from '../assets/sort.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Global Components/Footer';
import { Link } from 'react-router-dom';

const Product = () => {
  
  const [showOffers, setShowOffers] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showKids, setShowKids] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const categories = [
    'Shoes', 'Jordan', 'Bags & Backpacks', 'Hoodies & Pullovers', 'Shorts',
    'Pants & Tights', 'Tops & T-Shirts', 'Jackets & Vests', 'Sports Bras',
    'Socks', 'Accessories & Equipment'
  ];

  const colors = [
    { name: 'Black', color: '#000000' },
    { name: 'Blue', color: '#0000FF' },
    { name: 'Brown', color: '#A52A2A' },
    { name: 'Green', color: '#008000' },
    { name: 'Grey', color: '#808080' },
    { name: 'Multi-Color', color: 'multi' },
    { name: 'Orange', color: '#FFA500' },
    { name: 'Pink', color: '#FFC0CB' },
    { name: 'Purple', color: '#800080' }
  ];

  const sortOptions = [
    'Featured', 'Newest', 'Price: High-Low', 'Price: Low-High'
  ];

  return (
    <>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <SliderProduct />
      </div>
      <div className="font-[sans-serif]">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-extrabold text-gray-800">
              Extra 25% off Select Styles
            </h2>
            <div className="flex space-x-6">
              <div className="flex space-x-3 cursor-pointer" onClick={() => setShowFilters(!showFilters)}>
                <p>{showFilters ? 'Hide Filters' : 'Show Filters'}</p>
                <FontAwesomeIcon className='mt-1 ' icon={faSlidersH} />
              </div>
              <div className="relative">
                <div className="flex space-x-1 cursor-pointer" onClick={() => setShowSortOptions(!showSortOptions)}>
                  <p>Sort By</p>
                  <img className="size-8 cursor-pointer mt-[-2px]" src={sort} alt="Sort Icon" />
                </div>
                {showSortOptions && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul>
                      {sortOptions.map((option, index) => (
                        <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer text-gray-800">
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {showFilters && (
              <div className="col-span-1 bg-white rounded-2xl p-5">
                <div className="sticky top-4">
                  <div className="w-[300px]">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowCategories(!showCategories)}>
                      <h3 className="text-lg font-bold text-gray-800">Categories</h3>
                    
                    </div>
                   
                      <ul className="mt-2">
                        {categories.map((category, index) => (
                          <li key={index} className="mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-500">{category}</a>
                          </li>
                        ))}
                      </ul>
                   
                  </div>
                  <div className="w-[300px] mt-4">
                    <div className="flex space-x-10 items-center cursor-pointer" onClick={() => setShowOffers(!showOffers)}>
                      <h4 className="text-lg font-bold text-gray-800">Sale & Offers</h4>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    {showOffers && (
                      <div className="mt-2">
                        <div>
                          <input type="checkbox" id="extra25" className="mr-2" />
                          <label htmlFor="extra25" className="text-gray-800">Extra 25% Off Select Styles</label>
                        </div>
                        <div className="mt-2">
                          <input type="checkbox" id="sale" className="mr-2" />
                          <label htmlFor="sale" className="text-gray-800">Sale</label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-[300px] mt-4">
                    <div className="flex space-x-10 items-center cursor-pointer" onClick={() => setShowGender(!showGender)}>
                      <h4 className="text-lg font-bold text-gray-800">Gender</h4>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    {showGender && (
                      <div className="mt-2">
                        <div>
                          <input type="checkbox" id="men" className="mr-2" />
                          <label htmlFor="men" className="text-gray-800">Men</label>
                        </div>
                        <div className="mt-2">
                          <input type="checkbox" id="women" className="mr-2" />
                          <label htmlFor="women" className="text-gray-800">Women</label>
                        </div>
                        <div className="mt-2">
                          <input type="checkbox" id="unisex" className="mr-2" />
                          <label htmlFor="unisex" className="text-gray-800">Unisex</label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-[300px] mt-4">
                    <div className="flex space-x-10 items-center cursor-pointer" onClick={() => setShowKids(!showKids)}>
                      <h4 className="text-lg font-bold text-gray-800">Kids</h4>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    {showKids && (
                      <div className="mt-2">
                        <div>
                          <input type="checkbox" id="boys" className="mr-2" />
                          <label htmlFor="boys" className="text-gray-800">Boys</label>
                        </div>
                        <div className="mt-2">
                          <input type="checkbox" id="girls" className="mr-2" />
                          <label htmlFor="girls" className="text-gray-800">Girls</label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-[300px] mt-4">
                    <div className="flex space-x-10 items-center cursor-pointer" onClick={() => setShowColors(!showColors)}>
                      <h4 className="text-lg font-bold text-gray-800">Color</h4>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    {showColors && (
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {colors.map((color, index) => (
                          <div key={index} className="flex items-center">
                            <div 
                              className="w-6 h-6 rounded-full mr-2" 
                              style={{ backgroundColor: color.color === 'multi' ? 'conic-gradient(red, yellow, green, blue)' : color.color }}
                            ></div>
                            <label htmlFor={`color-${index}`} className="text-gray-800">{color.name}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className={`col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${showFilters ? '' : 'col-span-4'}`}>
              {[
                { img: 'https://readymadeui.com/images/product9.webp', title: 'Sole Elegance', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$10' },
                { img: 'https://readymadeui.com/images/product10.webp', title: 'Urban Sneakers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$12' },
                { img: 'https://readymadeui.com/images/product11.webp', title: 'Velvet Boots', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$14' },
                { img: 'https://readymadeui.com/images/product12.webp', title: 'Summit Hiking', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$12' }
              ].map((product, index) => (
               <Link to ='/desc'><div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 w-full flex items-center justify-center bg-gray-100">
                    <img src={product.img} alt={product.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-extrabold text-gray-800">{product.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                    <h4 className="text-lg text-gray-800 font-bold mt-4">{product.price}</h4>
                  </div>
                </div>
                </Link> 
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-24'>
      <Footer/>
      </div>
    </>
  );
};

export default Product;
