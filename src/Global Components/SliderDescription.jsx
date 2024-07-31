import React, { useState } from 'react';

const SliderDescription = () => {
  const imageUrl1 = 'https://img.freepik.com/premium-photo/colorful-picture-shoe-with-word-nike-it_895769-10.jpg';
  const imageUrl2 = 'https://th.bing.com/th/id/OIP.njZ5s-fIMl2VhMPntfHDXgHaLH?w=1024&h=1536&rs=1&pid=ImgDetMain';
  const imageUrl3 = 'https://th.bing.com/th/id/OIP.f86HuH-ZOQLYAJIM0bsWIwAAAA?rs=1&pid=ImgDetMain';
  const imageUrl4 = 'https://i.pinimg.com/736x/c5/d4/1a/c5d41af7e2b983648242e5d6477dc758.jpg';
  const imageUrl5 = 'https://i.pinimg.com/originals/f1/53/d9/f153d99e7fe2c77fbce05b2564d0e574.jpg';
  const imageUrl6 = 'https://i.pinimg.com/originals/6e/29/8b/6e298bc6812760e7d32922e00cd5ec17.jpg';
  const imageUrl7 = 'https://th.bing.com/th/id/OIP.CdMfoC_TI_vCwgCFYrZS1QHaHa?w=580&h=580&rs=1&pid=ImgDetMain';

  const cards = [
    { id: 1, image: imageUrl1, name: 'Nike Air Max 270', price: '$150', category: "Men's Shoes" },
    { id: 2, image: imageUrl2, name: 'Nike Air Max 90', price: '$140', category: "Men's Shoes" },
    { id: 3, image: imageUrl3, name: 'Nike Air Force 1', price: '$130', category: "Men's Shoes" },
    { id: 4, image: imageUrl4, name: 'Nike React Infinity Run', price: '$160', category: "Men's Shoes" },
    { id: 5, image: imageUrl5, name: 'Nike Air VaporMax', price: '$180', category: "Men's Shoes" },
    { id: 6, image: imageUrl6, name: 'Nike SB Dunk Low', price: '$200', category: "Men's Shoes" },
    { id: 7, image: imageUrl7, name: 'Nike LeBron 18', price: '$210', category: "Men's Shoes" },
  ];

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="overflow-x-scroll scrollbar-hide mb-4 relative px-0.5"
      style={{ overflowY: 'hidden' }}
    >
      <div className="flex snap-x snap-mandatory gap-4" style={{ width: 'max-content' }}>
        {cards.map((card) => (
          <div key={card.id} className="flex-none w-64 snap-center">
            <div className="bg-white border-1 border border-gray-200 rounded-lg overflow-hidden mb-4">
              <img src={card.image} alt={card.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.name}</h3>
                <p className="text-md text-gray-600 mb-1">{card.category}</p>
                <p className="text-xl font-bold text-gray-900">{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderDescription;
