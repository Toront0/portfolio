"use client";

import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { modalPopup } from "@/lib/utils";
import Backdrop from "./Backdrop";

import { FaGolang, FaReact, FaGithub } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

import {
  SiPostgresql,
  SiReactquery,
  SiTailwindcss,
  SiRedux
} from "react-icons/si";

import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";

import NextJSIcon from "../icons/NextJSIcon";

import { FaLocationDot } from "react-icons/fa6";

const Skills = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex m-4 flex-col px-1 items-center"
      >
        <div className="  left-24 w-[52px] flex items-center justify-center h-[52px] rounded-xl bg-gray-4">
          <div className="w-7 h-7">
            <span className="text-xl font-bold text-white">S</span>
          </div>
        </div>
        <span className="text-[13px] text-gray-12">Skills</span>
      </button>
      <AnimatePresence>
        {openModal && (
          <Backdrop onClick={() => setOpenModal(false)}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={modalPopup}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-[90%] md:w-2/3 h-3/4 xl:h-3/5 p-6 border bg-gray-1 gap-6 border-opac-w-2 xl:w-1/2 rounded-xl  relative shadow-elev-3-dark overflow-y-auto"
            >
              <div className="w-full h-fit pb-2 relative overflow-hidden">
                <h4 className="text-white text-center">Мои скиллы</h4>
                <div className="absolute top-0 left-0 h-full  bg-gradient-to-r from-gray-1   to-transparent z-10 w-[10%]"></div>
                <div className="absolute top-0 right-0 h-full  bg-gradient-to-l from-gray-1   to-transparent z-10 w-[10%]"></div>
                <ul className="items-center  flex h-full  w-full gap-24  mt-8 flex-nowrap  infinite-scroll">
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <FaGolang className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <FaReact className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <BiLogoTypescript className="w-full h-full" />
                  </li>

                  <li className=" flex items-center text-white">
                    <NextJSIcon />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <SiPostgresql className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <FaGithub className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <SiReactquery className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <SiTailwindcss className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <SiRedux className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <IoLogoHtml5 className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <IoLogoCss3 className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <FaGolang className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <FaReact className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <BiLogoTypescript className="w-full h-full" />
                  </li>

                  <li className=" flex items-center text-white">
                    <NextJSIcon />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <SiPostgresql className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <FaGithub className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <SiReactquery className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <SiTailwindcss className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <SiRedux className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <IoLogoHtml5 className="w-full h-full" />
                  </li>
                  <li className="min-w-[48px] w-12 h-12 text-white">
                    <IoLogoCss3 className="w-full h-full" />
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-bold text-white">Рабадан Унаев</h3>
                <ul className="mt-2">
                  <li className="text-sm text-gray-8 flex items-center gap-1">
                    <FaLocationDot className="text-lg" /> Россия, Дагестан, г.
                    Каспийск
                  </li>
                  <li className="text-sm text-gray-8 mt-2">
                    Дата рождения: <strong>22.12.2000</strong>
                  </li>
                  <li className="text-sm mt-1 text-gray-8">
                    Email: <strong>toronto9094@mail.ru</strong>
                  </li>
                  <li className="text-sm mt-1 text-gray-8">
                    Discord: <strong>raba22</strong>
                  </li>
                </ul>
                <div className="mt-4">
                  <h3 className="text-gray-10 text-xl font-medium">О себе</h3>
                  <p className="text-gray-9 text-sm">
                    Программированием занимаюсь уже около трех лет. За это время
                    повстречался со многими ужасами, асинхронное
                    программирование, конкурентное программирование, промисы,
                    мьютексы, замыкания. Но как говорится, все что нас не
                    убивает, делает нас, только лучше.
                  </p>
                  2q1
                </div>
              </div>
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
};

export default Skills;
