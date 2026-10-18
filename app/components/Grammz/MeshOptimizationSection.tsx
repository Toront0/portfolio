import React from "react";

const MeshOptimizationSection = () => {
  return (
    <article className="w-full mt-12">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-indigo-600 mb-3 dark:text-indigo-400">
          Производительность
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Оптимизация геометрии и шейдерный трюк вместо света
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 max-w-2xl dark:text-zinc-400">
          Главное правило веб-3D:{" "}
          <strong className="text-zinc-900 font-semibold dark:text-white">
            минимум вершин — максимум производительности
          </strong>
          . Недостающий объем и атмосферу добираю шейдерами, которые обходятся
          GPU в разы дешевле.
        </p>
      </header>

      {/* Список с разделителями */}
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800/60">
        <li className="flex items-start gap-3 py-4">
          <span
            className="text-indigo-600 mt-1 shrink-0 text-xs dark:text-indigo-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Меньше draw calls
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Статичные объекты объединены в крупные единые меши. Это снижает
              нагрузку на CPU и удерживает высокий FPS.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-indigo-600 mt-1 shrink-0 text-xs dark:text-indigo-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Композиция вместо сложности
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Вместо перегрузки сцены тяжелыми 3D-моделями пустые пространства
              заполнены крупной типографикой.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-indigo-600 mt-1 shrink-0 text-xs dark:text-indigo-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              God Rays на шейдерах
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Динамичные световые лучи написаны через кастомные шейдеры. Эффект
              объема без затрат на рендеринг.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-indigo-600 mt-1 shrink-0 text-xs dark:text-indigo-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Без честных теней
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              В сцене нет источников света и карт теней. Расчет освещения
              полностью исключен для максимального быстродействия.
            </p>
            <pre className="mt-3 rounded-lg bg-indigo-50/50 border border-indigo-100 px-3 py-2 overflow-x-auto dark:bg-[#0b1020] dark:border-slate-800/60">
              <code className="text-xs font-mono text-indigo-700 dark:text-indigo-300">
                {`// В сцене нет источников света\nscene.add(mesh); // И всё`}
              </code>
            </pre>
          </div>
        </li>
      </ul>

      {/* Финальный callout */}
      <div className="mt-6 rounded-xl ">
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <strong className="text-emerald-600 font-semibold dark:text-emerald-400">
            Что в итоге?
          </strong>{" "}
          Шейдеры и системы частиц делают пространство живым и глубоким без
          дорогих геометрических просчетов.
        </p>
      </div>
    </article>
  );
};

export default MeshOptimizationSection;
