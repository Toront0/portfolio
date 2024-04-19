"use client";

import React, { useState } from "react";

import img from "../../../../public/athlima_shop.png";
import Image from "next/image";
import Backdrop from "../Backdrop";

import { motion } from "framer-motion";

import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

import { TiInfo } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSlider } from "@/lib/hooks/useSlider";
import GopherLogo from "@/components/icons/GopherLogo";

import { modalPopup } from "@/lib/utils";
import AlthlimaIcon from "@/components/icons/AlthlimaIcon";

const Athlima = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal((p) => !p)}
        className="flex m-4 flex-col w-16 px-1 items-center"
      >
        <div className="  left-24 w-[52px] flex items-center justify-center h-[52px] rounded-xl bg-gray-4">
          <div className="w-9 h-9 flex justify-center">
            <AlthlimaIcon />
          </div>
        </div>
        <span className="text-[13px] text-gray-12">Athlima</span>
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
            <div className="relative w-full z-20  bg-gray-1 rounded-xl h-full p-6 overflow-y-auto ">
              <div className="col-span-2 h-fit  bg-gray-1 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className=" text-gray-12 font-semibold">
                      Athlima - Social media
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="https://next-sportpit.vercel.app/"
                      target="__blank"
                      className="px-4 text-gray-12 font-medium rounded-full flex items-center gap-2 py-1 bg-black border border-opac-w-3 text-sm"
                    >
                      <div className="w-2 h-2 rounded-full relative bg-error">
                        <div className="w-full h-full absolute bg-error animate-ping rounded-full"></div>
                      </div>
                      Live demo
                    </Link>
                    <Link
                      href="https://github.com/Toront0/next-sportpit"
                      target="__blank"
                    >
                      <AiOutlineGithub className="text-2xl text-gray-12" />
                    </Link>
                  </div>
                </div>
                <div className="relative w-full rounded bg-black shadow-elev-2  mt-3">
                  <Image
                    src={img}
                    alt="Athlima shop preview"
                    className="rounded w-full h-full shadow-elev-2-dark"
                  />
                </div>
                <div className="mt-4"></div>
                <div className="mt-8 text-gray-9 text-sm">
                  <p className="mt-2">
                    Обычно я использую достаточно мало сторонних библиотек.
                    Авторизацию, работу с формами и т.д. всегда выполнял
                    самостоятельно, и в моменте стало интересно как быстро и
                    непотеряв в качестве можно создать сайт используя уже
                    готовые решения. Исходя из этого и появился этот сайт.
                  </p>
                  <p className="mt-2">
                    P.S. На весь проект ушло около 6 дней. Если не брать в
                    расчет дизайн и настройку базу данных, то, можно смело
                    вычесть 2-3 дня.
                  </p>

                  <h3 className="text-sm text-gray-12 mt-4">Стек технологий</h3>
                  <ul className="mt-2 space-y-4">
                    <li className="text-gray-12  font-medium">- NEXT JS </li>
                    <li className="text-gray-12  font-medium">- Prisma</li>
                    <li className="text-gray-12  font-medium">- Next Auth</li>
                    <li className="text-gray-12  font-medium">
                      - React Hook Form
                    </li>
                    <li className="text-gray-12  font-medium">- Zod</li>
                    <li className="text-gray-12  font-medium">- Zustand</li>
                    <li className="text-gray-12  font-medium">- TypeScript</li>

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

export default Athlima;
