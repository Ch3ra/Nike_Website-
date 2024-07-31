import React from "react";
import Navbar from "../Global Components/Navbar";
import lbg from "./../assets/bghhh.jpg";
import ShopContainer from "../Global Components/ShopContainer";
import ElcetricPack from "./ElcetricPack";
import Slider from "../Global Components/SliderMain";
import Footer from "../Global Components/Footer";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* from here we start body section */}

      <div className="mainDiv h-[584px]">
        <img className="h-[600px] w-[1600px]" src={lbg} alt="" />
      </div>

      {/* yo dakr tala xai text section haii */}

      <div className="flex justify-center mt-10 bg-white">
        <div className="text-center">
          <h1 className="font-bold font-skranji text-custom-48">
            THE WINNER'S CURSE
          </h1>
          <p className="text-sm mt-4 font-impact ">
            Every ring. Every medal. Every record. His hunger insatiable. LeBron
            James has
          </p>

          <p className="text-sm mt-1 font-impact">
            has no choice but to try to win again. Watch to find out what it
            takes.
          </p>
          <Link to ='/'><button className="mt-6 px-6 py-2 bg-black text-white rounded-full text-lg">
            Explore
          </button></Link>
        </div>
      </div>

      <div className="mt-20">
        <ShopContainer />
      </div>

      <div className="mt-20">
        <ElcetricPack />
      </div>

      <div className="mt-20">
        <h1 className="font-bold font-skranji text-custom-48 ">
          SHOP NEW CLASSICS
        </h1>
        <div className="mt-7">
          <Slider />
        </div>
      </div>



      <div className="mt-10">
        <Footer/>
      </div>
    </>
  );
};

export default Landing;
