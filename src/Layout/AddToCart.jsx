import React, { useState } from 'react';
import Navbar from '../Global Components/Navbar';
import Footer from '../Global Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

const AddToCart = () => {
  const [heartClicked, setHeartClicked] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fantech K515 Shikari RGB Gaming Keyboard',
      brand: 'Fantech',
      color: 'Multicolor',
      price: 1199,
      originalPrice: 1679,
      discount: 29,
      quantity: 1,
      selected: false,
      image: 'https://i.pinimg.com/736x/c5/d4/1a/c5d41af7e2b983648242e5d6477dc758.jpg'
    },
    {
      id: 2,
      name: 'Logitech G502 HERO Gaming Mouse',
      brand: 'Logitech',
      color: 'Black',
      price: 2499,
      originalPrice: 2999,
      discount: 17,
      quantity: 1,
      selected: false,
      image: 'https://i.pinimg.com/originals/6e/29/8b/6e298bc6812760e7d32922e00cd5ec17.jpg'
    },
    {
      id: 3,
      name: 'Corsair Vengeance LPX 16GB DDR4 RAM',
      brand: 'Corsair',
      color: 'Black',
      price: 3999,
      originalPrice: 4999,
      discount: 20,
      quantity: 1,
      selected: false,
      image: 'https://i.pinimg.com/originals/f1/53/d9/f153d99e7fe2c77fbce05b2564d0e574.jpg'
    }
  ]);

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
      )
    );
  };

  const handleItemSelection = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.selected ? item.price * item.quantity : 0), 0);
  };

  const handleDeleteAll = () => {
    setCartItems([]);
  };

  const handleDeleteItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-white p-4 rounded-lg shadow-lg flex-1">
              <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
              <div className="flex flex-col space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center space-x-4">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-5 w-5 text-orange-600" 
                        checked={item.selected}
                        onChange={() => handleItemSelection(item.id)}
                      />
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                      <div>
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p className="text-gray-600">{item.brand}, Color Family: {item.color}</p>
                        <p className="text-red-500 text-lg font-bold">Rs. {item.price}</p>
                        <p className="text-gray-500 line-through">Rs. {item.originalPrice}</p>
                        <p className="text-green-600">{item.discount}%</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleQuantityChange(item.id, -1)} className="text-gray-700">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)} className="text-gray-700">+</button>
                      <button className="text-gray-700"><FontAwesomeIcon icon={faHeart} /></button>
                      <button onClick={() => handleDeleteItem(item.id)} className="text-gray-700"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4 space-x-7">
                <button onClick={handleDeleteAll} className="text-red-600 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faTrash} />
                  <span>DELETE</span>
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/3 h-[225px]">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal ({cartItems.filter(item => item.selected).reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                <span>Rs. {calculateSubtotal()}</span>
              </div>
             
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span>Rs. {calculateSubtotal()}</span>
              </div>
              <button className="bg-black text-white w-full p-4 rounded-lg">PROCEED TO CHECKOUT ({cartItems.filter(item => item.selected).reduce((acc, item) => acc + item.quantity, 0)})</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddToCart;
