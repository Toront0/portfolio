import React from "react";

const TexturesOptimizationSection = () => {
  return (
    <article className="w-full mt-20">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
          Текстуры
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Оптимизация текстур и видеопамяти (VRAM)
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-400 max-w-2xl">
          Текстуры формируют визуал, но критически требовательны к памяти:{" "}
          <strong className="text-white font-semibold">
            всего пять 4K-текстур забирают около 300 МБ VRAM
          </strong>
          , что приводит к зависаниям на мобильных устройствах.
        </p>
      </header>

      {/* Список с разделителями */}
      <ul className="divide-y divide-slate-800/60">
        <li className="flex items-start gap-3 py-4">
          <span
            className="text-amber-500 mt-1 shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Снизил разрешение до 2K
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Сократил потребление каждой текстуры с{" "}
              <span className="text-amber-400 font-mono">65–83 МБ</span> до{" "}
              <span className="text-emerald-400 font-mono">~21 МБ VRAM</span>{" "}
              без видимой потери качества на экране.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-amber-500 mt-1 shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Перешёл на формат .ktx2
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Текстуры в формате{" "}
              <code className="bg-[#1e294b] text-amber-300 px-1.5 py-0.5 rounded text-sm font-mono">
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
        <p className="text-base leading-relaxed text-slate-300">
          <strong className="text-emerald-400 font-semibold">
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
