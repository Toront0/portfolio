import React from "react";

export default function ReminderSection() {
  return (
    <article className="w-full mt-20 max-w-[1200px] px-4 lg:px-24 mx-auto select-none relative">
      {/* Section Header */}
      <header className="mb-10 border-b border-slate-800/60 pb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
          шпаргалка разработчика
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Как создать успешный WebGL-проект: Пошаговый пайплайн
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-400 max-w-2xl">
          Главный секрет трехмерных сайтов —{" "}
          <strong className="text-white font-semibold">
            никогда не оптимизировать «вслепую»
          </strong>
          . Сначала собирается идеальный финальный визуал, и только потом
          структура сжимается под веб-стандарты.
        </p>
      </header>

      {/* GRAPH CANVAS WRAPPER */}
      <div className="relative w-full p-1">
        {/* ⚡ BACKGROUND DESKTOP LINES (Calculated for vertical node dimensions) */}
        <svg
          className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none z-0"
          xmlns="http://w3.org"
        >
          {/* Row 1 Connections */}
          <line
            x1="28%"
            y1="15%"
            x2="38%"
            y2="15%"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="62%"
            y1="15%"
            x2="72%"
            y2="15%"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Loop down from 3 to 4 */}
          <path
            d="M 90% 20% L 95% 20% A 10 10 0 0 1 100% 28% L 100% 40% A 10 10 0 0 1 95% 48% L 5% 48% A 10 10 0 0 0 0% 56% L 0% 64% A 10 10 0 0 0 5% 72% L 6% 72%"
            fill="none"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Row 2 Connections */}
          <line
            x1="28%"
            y1="53%"
            x2="38%"
            y2="53%"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="62%"
            y1="53%"
            x2="72%"
            y2="53%"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Loop down from 6 to 7 */}
          <path
            d="M 90% 58% L 95% 58% A 10 10 0 0 1 100% 66% L 100% 76% A 10 10 0 0 1 95% 84% L 5% 84% A 10 10 0 0 0 0% 92% L 0% 94%"
            fill="none"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Row 3 Connections */}
          <line
            x1="28%"
            y1="88%"
            x2="38%"
            y2="88%"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="62%"
            y1="88%"
            x2="72%"
            y2="88%"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>

        {/* CONNECTED 9-STEP NODE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 w-full relative z-10">
          {/* Node 1 */}
          {/* ⚡ THE FIX: Swapped h-[120px] for min-h-30 h-full across all nodes */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-slate-800/80 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full">
            <h4 className="text-sm font-semibold text-slate-300 z-10">
              Геометрия (Моделинг)
            </h4>
            <p className="text-xs lg:text-[13px] text-slate-500 leading-normal max-w-[90%] z-10">
              Минимизируем полигонаж. Держим количество вершин (vertices) на
              минимально возможном уровне.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-slate-800/20">
              01
            </span>
          </div>

          {/* Node 2 */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-slate-800/80 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full">
            <h4 className="text-sm font-semibold text-slate-300 z-10">
              Генерация текстур
            </h4>
            <p className="text-xs lg:text-[13px] text-slate-500 leading-normal max-w-[90%] z-10">
              Контролируем вес карт. Ограничиваем разрешение до 2K, для мелких
              деталей — лучше 1K.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-slate-800/20">
              02
            </span>
          </div>

          {/* Node 3 */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-amber-500/20 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full bg-amber-500/[0.01]">
            <div className="flex items-center justify-between w-full z-10">
              <h4 className="text-sm font-semibold text-white tracking-tight">
                Сборка визуала
              </h4>
              <span className="text-[9px] font-mono bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 text-amber-400">
                ФИНАЛ
              </span>
            </div>
            <p className="text-xs lg:text-[13px] text-slate-400/80 leading-normal max-w-[90%] z-10">
              Добиваемся идеальной картинки в браузере на десктопе перед тем,
              как переходить к сжатию.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-amber-500/5">
              03
            </span>
          </div>

          {/* Node 4 */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-slate-800/80 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full">
            <h4 className="text-sm font-semibold text-slate-300 z-10">
              Объединение мешей
            </h4>
            <p className="text-xs lg:text-[13px] text-slate-500 leading-normal max-w-[90%] z-10">
              Сливаем статичную геометрию воедино. Сокращаем общее число тяжелых
              вызовов Draw Calls.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-slate-800/20">
              04
            </span>
          </div>

          {/* Node 5 */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-slate-800/80 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full">
            <h4 className="text-sm font-semibold text-slate-300 z-10">
              Конвертация в .ktx2
            </h4>
            <p className="text-xs lg:text-[13px] text-slate-500 leading-normal max-w-[90%] z-10">
              Сжимаем текстуры под GPU. Видеокарта считывает формат напрямую без
              распаковки процессором.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-slate-800/20">
              05
            </span>
          </div>

          {/* Node 6 */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-slate-800/80 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full">
            <h4 className="text-sm font-semibold text-slate-300 z-10">
              Шейдерные эффекты
            </h4>
            <p className="text-xs lg:text-[13px] text-slate-500 leading-normal max-w-[90%] z-10">
              Создаем лучи света и пылинки кодом. Добираем глубину сцены
              дешевыми вычислениями на GPU.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-slate-800/20">
              06
            </span>
          </div>

          {/* Node 7 */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-slate-800/80 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full">
            <h4 className="text-sm font-semibold text-slate-300 z-10">
              Фоновый эмбиент
            </h4>
            <p className="text-xs lg:text-[13px] text-slate-500 leading-normal max-w-[90%] z-10">
              Интегрируем мягкую аудиоподложку. Задаем ощущение воздуха и объема
              трехмерного пространства.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-slate-800/20">
              07
            </span>
          </div>

          {/* Node 8 */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-slate-800/80 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full">
            <h4 className="text-sm font-semibold text-slate-300 z-10">
              Whoosh-эффекты
            </h4>
            <p className="text-xs lg:text-[13px] text-slate-500 leading-normal max-w-[90%] z-10">
              Синхронизируем аудиопереходы с GSAP. Делаем повороты камеры
              физически осязаемыми.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-slate-800/20">
              08
            </span>
          </div>

          {/* Node 9 */}
          <div className="flex flex-col items-start gap-2 bg-slate-950 border border-violet-500/20 px-5 py-4 rounded-xl shadow-xl relative overflow-hidden min-h-30 h-full ">
            <h4 className="text-sm font-semibold text-white tracking-tight z-10">
              Кинематографичность
            </h4>
            <p className="text-xs lg:text-[13px] text-slate-400/80 leading-normal max-w-[90%] z-10">
              Собираем все слои воедино. Превращаем сухой 3D-рендеринг в цельный
              интерактивный фильм.
            </p>
            <span className="absolute -bottom-3.5 right-2 text-[56px] font-light italic font-mono select-none pointer-events-none tracking-tighter leading-none text-violet-500/5">
              09
            </span>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="mt-12 rounded-xl border border-slate-800/40 bg-slate-900/20 p-4">
        <p className="text-base leading-relaxed text-slate-300">
          <strong className="text-emerald-400 font-semibold">
            Что в итоге?
          </strong>{" "}
          Проходя этот цикл итерация за итерацией, мы получаем кинематографичное
          3D-окружение, летающее на частоте{" "}
          <span className="text-emerald-400 font-mono font-bold">60+ FPS</span>{" "}
          даже на мобильных дисплеях.
        </p>
      </div>
    </article>
  );
}
