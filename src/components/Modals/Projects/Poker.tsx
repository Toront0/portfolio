"use client";

import React, { useState } from "react";

import img from "../../../../public/pc_1.png";
import img2 from "../../../../public/pc_2.png";
import img3 from "../../../../public/pc_3.png";
import img4 from "../../../../public/pc_4.png";
import img5 from "../../../../public/pc_5.png";
import img6 from "../../../../public/pc_6.png";

import Image from "next/image";
import Backdrop from "../Backdrop";

import { motion } from "framer-motion";

import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

import { TiInfo } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSlider } from "@/lib/hooks/useSlider";
import GopherLogo from "@/components/icons/GopherLogo";

import logo from "/public/poker-fav.svg";
import { modalPopup } from "@/lib/utils";

const data = [
  {
    id: 1,
    img: img4
  },
  {
    id: 2,
    img: img2
  },
  {
    id: 3,
    img: img3
  },
  {
    id: 4,
    img: img
  },
  {
    id: 5,
    img: img5
  },
  {
    id: 6,
    img: img6
  }
];

const Poker = () => {
  const [openModal, setOpenModal] = useState(false);

  const { activeSlide, moveLeft, moveRight } = useSlider(data.length);

  return (
    <>
      <button
        onClick={() => setOpenModal((p) => !p)}
        className="flex m-4 flex-col px-1 items-center"
      >
        <div className="  left-24 w-[52px] flex items-center justify-center h-[52px] rounded-xl bg-gray-4">
          <div className="w-8 h-8">
            <Image src={logo} alt="123" />
          </div>
        </div>
        <span className="text-[13px] text-gray-12 ">BOOM</span>
      </button>
      {openModal && (
        <Backdrop onClick={() => setOpenModal(false)}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={modalPopup}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[90%] md:w-2/3 h-3/5 border  gap-6 border-opac-w-2 xl:w-1/2    rounded-xl  relative shadow-elev-3-dark"
          >
            <motion.div
              initial={{ y: 75 }}
              animate={{ y: 0 }}
              transition={{
                delay: 1,
                stiffness: 200,
                damping: 15,
                type: "spring"
              }}
            >
              <motion.div
                whileHover={{ y: 15 }}
                className="absolute z-0 right-0 -top-28 flex"
              >
                <GopherLogo />
              </motion.div>
            </motion.div>
            <div className="relative w-full z-20  bg-gray-1 rounded-xl h-full p-6 overflow-y-auto ">
              <div className="col-span-2 h-fit  bg-gray-1 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className=" text-gray-12 font-semibold">Poker BOOM</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="https://poker-client-eight.vercel.app/"
                      target="__blank"
                      className="px-4 text-gray-12 font-medium rounded-full flex items-center gap-2 py-1 bg-black border border-opac-w-3 text-sm"
                    >
                      <div className="w-2 h-2 rounded-full relative bg-error">
                        <div className="w-full h-full absolute bg-error animate-ping rounded-full"></div>
                      </div>
                      Live demo
                    </Link>
                    <Link
                      href="https://github.com/Toront0/poker"
                      target="__blank"
                    >
                      <AiOutlineGithub className="text-2xl text-gray-12" />
                    </Link>
                  </div>
                </div>
                <div className="relative w-full rounded bg-black  mt-3">
                  <button
                    onClick={moveLeft}
                    className="absolute top-1/2 -translate-y-1/2 text-xl w-10 h-10 rounded-full z-20 text-white left-4"
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={moveRight}
                    className="absolute top-1/2 -translate-y-1/2 text-xl w-10 h-10 rounded-full z-20 text-white right-4"
                  >
                    <IoIosArrowForward />
                  </button>
                  {data.map((v, i) => {
                    if (i === activeSlide) {
                      return (
                        <motion.div
                          key={v.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                          className="w-full  relative h-full"
                        >
                          <Image
                            src={data[activeSlide].img}
                            alt="Athlima shop preview"
                            className="rounded w-full h-full shadow-elev-3"
                          />
                        </motion.div>
                      );
                    }
                  })}
                </div>
                <div className="mt-4"></div>
                <div className="mt-8 text-gray-10 text-sm">
                  <div className="flex gap-2 items-center text-gray-8">
                    <TiInfo className="text-xl text-orange-11" />
                    <p className="">
                      Render.com - Web Service на котором и задеплоен этот
                      проект может задерживать запросы на ~50 секунд.
                    </p>
                  </div>
                  <p className="mt-3">
                    Самый насыщенный проект из всех. Очень многое для себя
                    изучил нового. Как работать с вебсокетами, как работают
                    каналы и как в целом создаются игры. Это моя первая
                    *конкурентная программа.
                  </p>
                  <p className="mt-2">
                    Я был так воодушевлен голангом, поэтому упор был сделан на
                    бэкенд. Но и фронт тоже неплох, достаточно много крутых
                    анимаций и получилось вроде даже адаптировать под разные
                    устройства такой проект.
                  </p>
                  <p className="mt-2">
                    И кстати весь дизайн я делал также сам. Идею конечно же взял
                    из открытых источников (Pinterest, Dribble), но реализовал
                    сам.
                  </p>
                  <p className="mt-2">
                    Карточки и игровые фишки рисовал в Фигме, стол создавал в
                    Блендере. Хотел создать еще промо ролик, т.к. считаю Post
                    Production тоже важной частью проекта, но моему компьютеру к
                    сожалению становилось очень плохо во время рендера.
                  </p>

                  <h3 className="text-sm text-gray-12 mt-4">Стек технологий</h3>
                  <ul className="mt-2 space-y-4">
                    <li className="text-gray-12  font-medium">- React </li>

                    <li className="text-gray-12  font-medium">- TypeScript</li>
                    <li className="text-gray-12  font-medium">
                      - Tailwind CSS
                    </li>
                    <li className="text-gray-12  font-medium">- Zustand</li>

                    <li className="text-gray-12  font-medium">- Golang</li>
                    <li className="text-gray-12  font-medium">
                      - Supabase ( Облачный Postgresql )
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      )}
    </>
  );
};

export default Poker;
