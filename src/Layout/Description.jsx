import React, { useState } from 'react';
import Navbar from '../Global Components/Navbar';
import Footer from '../Global Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Slider from '../Global Components/SliderMain';
import SliderDescription from '../Global Components/SliderDescription';
import Review from '../Global Components/Review';

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState('https://i.pinimg.com/originals/f1/53/d9/f153d99e7fe2c77fbce05b2564d0e574.jpg');

  const product = {
    img: 'https://i.pinimg.com/originals/f1/53/d9/f153d99e7fe2c77fbce05b2564d0e574.jpg',
    title: 'Nike Air Max 270',
    description: 'The Nike Air Max 270 brings you an elevated experience with its Max Air cushioning and sleek design. Perfect for both casual and athletic wear, this shoe delivers ultimate comfort and style.',
    price: '$150',
    features: [
      'Max Air cushioning for a smooth ride',
      'Breathable mesh upper',
      'Modern design with premium materials',
      'Available in multiple colors'
    ],
    sizing: [
      'US Men: 6 - 15',
      'US Women: 5 - 12',
      'UK: 5 - 14',
      'EU: 38 - 49'
    ],
    additionalImages: [
      'https://i.pinimg.com/originals/f1/53/d9/f153d99e7fe2c77fbce05b2564d0e574.jpg',
      'https://th.bing.com/th/id/OIP.njZ5s-fIMl2VhMPntfHDXgHaLH?w=1024&h=1536&rs=1&pid=ImgDetMain',
      'https://i.pinimg.com/736x/c5/d4/1a/c5d41af7e2b983648242e5d6477dc758.jpg',
      'https://i.pinimg.com/originals/6e/29/8b/6e298bc6812760e7d32922e00cd5ec17.jpg'
    ]
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-shrink-0 lg:w-1/2 mb-8 lg:mb-0">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg max-w-sm mx-auto"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-xl font-bold text-gray-700 mb-4">{product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Features:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Sizing:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.sizing.map((size, index) => (
                    <li key={index} className="mb-2">{size}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4 mb-6">
                <button className="bg-black text-white py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>Add to Cart</span>
                </button>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>Save for Later</span>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Images Section */}
          <div className="mt-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">More Views:</h2>
            <div className="flex space-x-6">
              {product.additionalImages.map((img, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 cursor-pointer"
                  onMouseEnter={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`Additional view ${index + 1}`}
                    className="object-cover rounded-lg shadow-md w-full h-full"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div><div className='mx-10'>
      <h1 className="font-bold font-skranji text-2xl mt-7"> What Our Customer Say's?</h1>
      
        <Review />
        <Review />
        
      </div>

      <div className='mt-36'>
        <h1 className="font-bold font-skranji text-custom-48 ">
          You Might Also Like
        </h1>
       <SliderDescription/>
      </div>

      <div className='mt-11'>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
