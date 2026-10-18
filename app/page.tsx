import Image from "next/image";
import StackSection from "./components/Grammz/StackSection";
import MeshOptimizationSection from "./components/Grammz/MeshOptimizationSection";
import TexturesOptimizationSection from "./components/Grammz/TexturesOptimizationSection";
import AudioSection from "./components/Grammz/AudioSection";

import { MdOutlineArrowOutward } from "react-icons/md";

import DigitizationSection from "./components/Grammz/DigitizationSection";
import TrackerAppSection from "./components/Grammz/TrackerAppSection";
import ReminderSection from "./components/Grammz/ReminderSection";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  return (
    <div className=" bg-[#F9F9F9] dark:bg-[#111] transition-colors text-black dark:text-white">
      <div className="max-w-300  gap-8 mx-auto px-4 lg:px-24">
        <h2 className="text-3xl font-semibold ">3D Immersive website</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 mt-2">
          <div className="flex flex-wrap items-center gap-3 py-2">
            <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-orange-50 border border-orange-200 text-orange-700 dark:bg-orange-500/10 dark:border-orange-500/20 dark:text-orange-400">
              Three.js
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 dark:bg-white/5 dark:border-white/20 dark:text-white">
              Next.js
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-amber-50 border border-amber-200 text-amber-700 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-400">
              Blender
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400">
              Tailwind CSS
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400">
              GSAP
            </span>
          </div>
          <div>
            <a
              href="https://grammz.vercel.app"
              target="_blank"
              className="flex items-center gap-2 border px-3 text-sm py-1.5 rounded border-zinc-300 text-zinc-800 hover:bg-zinc-100 transition-colors dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              Открыть сайт <MdOutlineArrowOutward />
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4 dark:text-white">
            Видео предпросмотр
          </h2>
          <VideoPlayer src="/website_overview.mp4" />
        </div>
        {/* Main Showcase Image */}
        {/* <div className="w-full aspect-video relative mt-6 rounded-xl">
          <Image
            src="/scene_render.jpg"
            alt="Final 3D Scene Render"
            fill
            className="object-contain rounded-xl"
            priority
          />
        </div> */}

        {/* 2. SECTION: Concept & Core 3D Value */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          {/* Short Text Block */}
          <div className="lg:col-span-7 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              Я полностью отошел от плоскостных 2D-интерфейсов и развернул{" "}
              <strong className="text-zinc-900 font-semibold dark:text-white">
                интерактивное 3D-пространство
              </strong>
              . Такие проекты — большая редкость из-за экстремальной сложности
              реализации, но интерактивный геймифицированный опыт удерживает
              внимание пользователя в 3 раза дольше обычных сайтов.
            </p>
          </div>

          {/* Scaled-down Metrics Panel */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
            <div className="p-4 rounded-xl bg-zinc-100/70 border border-zinc-200/80 dark:bg-zinc-900/40 dark:border-zinc-800/60">
              <div className="text-2xl font-bold text-zinc-900 font-mono mb-1 dark:text-white">
                3x
              </div>
              <p className="text-xs text-zinc-500 leading-normal dark:text-zinc-400">
                Выше удержание внимания (Dwell Time)
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100/70 border border-zinc-200/80 dark:bg-zinc-900/40 dark:border-zinc-800/60">
              <div className="text-2xl font-bold text-emerald-600 font-mono mb-1 dark:text-emerald-400">
                100%
              </div>
              <p className="text-xs text-zinc-500 leading-normal dark:text-zinc-400">
                Кастомный визуал без Pinterest-шаблонов
              </p>
            </div>
          </div>
        </section>

        {/* 3. SECTION: Blender Modelling & Global Optimization Strategy */}
        <section className="mt-16 border-t border-zinc-200 dark:border-zinc-800/40 pt-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4 dark:text-white">
            Blender
          </h2>

          {/* Full-width Content Layout Stack */}
          <div className="w-full flex flex-col gap-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              Вся 3D область была создана в Blender, от модели и текстур до
              кастомных брендовых изображений. Тем самым создав сильный акцент
              на бренде, без однотипных изображений с Pinterest.
            </p>

            {/* ⚡ THE FIXED FULL-WIDTH IMAGE ROW */}
            <div className="w-full">
              <div className="w-full aspect-video relative rounded-xl overflow-hidden border border-zinc-200 shadow-lg bg-zinc-100 dark:border-zinc-800/60 dark:shadow-xl dark:bg-zinc-950">
                <Image
                  src="/scene_solid.webp"
                  alt="Blender Solid Viewport Topology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2 flex items-center justify-end gap-1.5 font-mono text-[10px] text-zinc-500 uppercase tracking-widest dark:text-zinc-500">
                <span>Solid Viewport Topology</span>
              </div>
            </div>

            <p className="mt-2">
              Создать 3D-сайт — только начало. Главное — сделать его одинаково
              быстрым как на слабом железе, так и на флагманах. В бизнесе
              доступность важнее концепта: если сайт не откроется из-за плохого
              интернета, любая сильная задумка потеряет смысл. Важно охватить
              каждого пользователя, ведь любой из них может стать потенциальным
              покупателем.
            </p>
          </div>
        </section>

        <StackSection />

        <MeshOptimizationSection />

        <TexturesOptimizationSection />
        <AudioSection />
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-800/60 mt-16 pt-16">
        <DigitizationSection />
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-800/60 mt-16 pt-16">
        <div className="flex w-full max-w-300  gap-8 mx-auto justify-between  px-4 lg:px-24">
          <TrackerAppSection />
        </div>
      </div>
      {/* <ReminderSection /> */}
    </div>
  );
}
