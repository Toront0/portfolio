import React from "react";

import Image from "next/image";

import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { SiReactiveresume } from "react-icons/si";

import { GiMuscleUp } from "react-icons/gi";

import LUX from "@/components/Modals/Projects/LUX";

import logo from "/public/logo.png";
import Poker from "@/components/Modals/Projects/Poker";
import Skills from "@/components/Modals/Skills";
import Athlima from "@/components/Modals/Projects/Athlima";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-gray-2 relative overflow-hidden ">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <Image src={logo} alt="123" className="" />
      </div>
      <div className="absolute z-20 w-full h-full">
        <Skills />
        <LUX />
        <Athlima />

        <Poker />

        <Link
          href="https://github.com/Toront0"
          className="flex flex-col m-4 w-fit items-center px-1"
          target="__blank"
        >
          <div className="rounded-xl relative flex items-center justify-center w-[52px] h-[52px] bg-gray-4 text-gray-12">
            <div className="absolute bottom-0 left-0 w-4 h-4 flex rounded-sm items-center justify-center bg-white text-blue-7">
              <FaArrowRightLong className="text-xs -rotate-45" />
            </div>
            <div className=" w-7 h-7 rounded-full ">
              <FaGithub className="w-full h-full" />
            </div>
          </div>
          <span className="text-[13px] text-gray-12">Github</span>
        </Link>
      </div>
      {/* <div className="w-full h-full absolute">
        <Image src={img} alt="123" className="w-full h-full object-cover" />
      </div> */}
    </div>
  );
};

export default HomePage;
