import React from "react";
import { Link } from "react-router-dom";

const ShopContainer = () => {
  return (
    <div className="h-[1024px] w-[1338px] bg-red-500 flex flex-wrap">
       <div
      className="h-[512px] w-[669px] bg-blue-400 cursor-pointer"
      style={{
        backgroundImage: "url('https://www.rollingstone.com/wp-content/uploads/2023/01/GettyImages-1427458307.jpg?w=1581&h=1054&crop=1')",
        backgroundSize: 'cover',
        
      }}
    >
        <div className="text-white ml-7 mt-[375px] ">
      <p className="font-medium">Back to School</p>
      <p className="font-medium text-2xl">Playground Pros</p>
      <Link to='/product'><button className="mt-6 px-4 py-1 border font-medium bg-white text-black rounded-full text-lg">
        Shop
      </button> </Link>
      </div>
    </div>
    <div
      className="h-[512px] w-[669px] bg-blue-400 cursor-pointer"
      style={{
        backgroundImage: "url('https://a.espncdn.com/photo/2022/1112/r1089839_1296x729_16-9.jpg?w=1600')",
        backgroundSize: 'cover',
        
      }}
    >
        <div className="text-white ml-7 mt-[375px] ">
      <p className="font-medium">Back to School</p>
      <p className="font-medium text-2xl">Playground Pros</p>
      <Link to='/product'><button className="mt-6 px-4 py-1 border font-medium bg-white text-black rounded-full text-lg">
        Shop
      </button> </Link>
      </div>
    </div>



    <div
      className="h-[512px] w-[669px] bg-blue-400 cursor-pointer"
      style={{
        backgroundImage: "url('https://cdn.vox-cdn.com/thumbor/023KzyKckuvO-zH7IF5Oy0KLUBE=/0x0:1200x649/1200x675/filters:focal(451x0:643x192)/cdn.vox-cdn.com/uploads/chorus_image/image/70515775/stephcurryfinal_JD.0.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition:'center'
        
      }}
    >
        <div className="text-white ml-7 mt-[375px] ">
      <p className="font-medium">Back to School</p>
      <p className="font-medium text-2xl">Playground Pros</p>
      <Link to='/product'><button className="mt-6 px-4 py-1 border font-medium bg-white text-black rounded-full text-lg">
        Shop
      </button> </Link>
      </div>
    </div>
   

    <div
      className="h-[512px] w-[669px] bg-blue-400 cursor-pointer"
      style={{
        backgroundImage: "url('https://image-cdn.essentiallysports.com/wp-content/uploads/20200728195941/https___bluemanhoop.com_wp-content_uploads_getty-images_2017_07_1150630353-1110x900.jpeg')",
        backgroundSize: 'cover',
       backgroundPosition:'center '
        
      }}
    >
        <div className="text-white ml-7 mt-[375px] ">
      <p className="font-medium">Back to School</p>
      <p className="font-medium text-2xl">Playground Pros</p>
      <Link to='/product'><button className="mt-6 px-4 py-1 border font-medium bg-white text-black rounded-full text-lg">
        Shop
      </button> </Link>
      </div>
    </div>
    </div>
  );
};

export default ShopContainer;
