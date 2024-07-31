import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex','justify-content':'center', 'align-items':'center', right: '10px',  "background-color": "gray", "height":'30px',"width":'30px', "border-radius":' 50%'}}
      onClick={onClick}
    >
      ▶
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex','justify-content':'center', 'align-items':'center', left: '10px', zIndex: 1, "background-color": "gray", "height":'30px',"width":'30px', "border-radius":' 50%' }}
      onClick={onClick}
    >
      ◀
    </div>
  );
}

const SliderProduct = () => {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className=" w-[1600px]" style={{ width: '100%' }}>
      <Slider {...settings}>
        <div className="flex justify-center items-center h-24 bg-[#F5F5F5] rounded-lg">
            <div className=' flex justify-center mt-9 '>
          <h3 className="text-sm font-semibold  underline ">Members: Free Shipping On Orders $50+</h3>
          </div>
        </div>
        <div className="flex justify-center items-center h-24 bg-[#F5F5F5] rounded-lg">
        <div className=' flex justify-center mt-9 '>
          <h3 className="text-sm font-semibold underline">Gear Up: Use SPORT25</h3></div>
        </div>
        <div className="flex justify-center items-center h-24 bg-[#F5F5F5] rounded-lg">
        <div className=' flex justify-center mt-9 '>
          <h3 className="text-sm font-semibold underline">Look For Store Pickup at Checkout</h3></div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderProduct;




