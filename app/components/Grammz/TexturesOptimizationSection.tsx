import React from "react";

const TexturesOptimizationSection = () => {
  return (
    <article className="w-full mt-20">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-amber-600 mb-3 dark:text-amber-400">
          Текстуры
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Оптимизация текстур и видеопамяти (VRAM)
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 max-w-2xl dark:text-zinc-400">
          Текстуры формируют визуал, но критически требовательны к памяти:{" "}
          <strong className="text-zinc-900 font-semibold dark:text-white">
            всего пять 4K-текстур забирают около 300 МБ VRAM
          </strong>
          , что приводит к зависаниям на мобильных устройствах.
        </p>
      </header>

      {/* Список с разделителями */}
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800/60">
        <li className="flex items-start gap-3 py-4">
          <span
            className="text-amber-600 mt-1 shrink-0 text-xs dark:text-amber-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Снизил разрешение до 2K
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Сократил потребление каждой текстуры с{" "}
              <span className="text-amber-600 font-mono dark:text-amber-400">
                65–83 МБ
              </span>{" "}
              до{" "}
              <span className="text-emerald-600 font-mono dark:text-emerald-400">
                ~21 МБ VRAM
              </span>{" "}
              без видимой потери качества на экране.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-amber-600 mt-1 shrink-0 text-xs dark:text-amber-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Перешёл на формат .ktx2
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Текстуры в формате{" "}
              <code className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-sm font-mono dark:bg-[#1e294b] dark:text-amber-300">
                .ktx2
              </code>{" "}
              видеокарта считывает напрямую. Это исключает долгую распаковку
              процессором и полностью убирает микрофризы при старте сцены.
            </p>
          </div>
        </li>
      </ul>

      {/* Финальный callout */}
      <div className="mt-6 rounded-xl">
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <strong className="text-emerald-600 font-semibold dark:text-emerald-400">
            Что в итоге?
          </strong>{" "}
          3D-окружение загружается за секунды и стабильно работает на любых
          устройствах — от флагманских ПК до бюджетных смартфонов.
        </p>
      </div>
    </article>
  );
};

export default TexturesOptimizationSection;
