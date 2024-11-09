// import { useState, useEffect } from "react";
// import api from "../api";
import  NavBar  from "../components/NavBar"
import arrow from "../assets/arrow_selector_tool.svg";
import users from "../assets/users-overlay.png";
import star1 from "../assets/Star 1.svg"
import star2 from "../assets/Star 2.svg"
import polygon from "../assets/Polygon 1.svg"


function Home() {

    return (
        <>

        <NavBar />

        <div className="mt-[40px]">
            <img className="float-right" src={star1} alt="star icon" />
            <h2 className="text-[64px] font-extrabold text-center">We help small businesses thrive</h2>
            <p className="text-[64px] font-extrabold text-center">after funding by tackling common</p>
            <img className="float-left" src={polygon} alt="star icon" />
            <img className="float-left" src={star2} alt="star icon" />
            <p className="text-[64px] font-extrabold text-center mb-[34px]">challenges</p>
            <p className="text-2xl font-bold text-center text-neutral-500">We support smarter decisions, empowering businesses to grow</p>
            <p className="text-2xl font-bold text-center text-neutral-500">steadily and avoid the usual pitfalls.</p>
        </div>
        
        <div className="mt-20 mx-auto w-[563px] lg:flex justify-between space-x-12 items-center">
            <div className="py-4 px-14 border rounded-full flex justify-center items-center bg-[#3835ED] hover:space-x-2">
                <img className="h-8 w-8" src={arrow} alt="arrow icon" />
                <a href="#" className="text-white text-2xl font-[700]" >Get Started</a>
            </div>
            <div>
                <img className="h-[64px]" src={users} alt="users overlay" />
            </div>
        </div>

        <div className="mt-20 mb-24 mx-auto w-[383px] lg:flex justify-between space-x-12 items-center">
            <div className="">
                <p className="text-5xl font-[700]">560K</p>
                <p className="text-2xl text-neutral-500 font-[500]">Transactions</p>
            </div>
            <div className="">
                <p className="text-5xl font-[700]">5K</p>
                <p className="text-2xl text-neutral-500 font-[500]">Users</p>
            </div>
        </div>

        <h2 className=" text-5xl font-[700] text-center">Our Key Features</h2>
        <div className="mx-[58px]  bg-[#3835ED] h-[943px] border rounded-3xl">
            <div></div>
        </div>




        </>
    );
}

export default Home;
