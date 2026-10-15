import React from "react";

const StackSection = () => {
  return (
    <article className="w-full mt-12">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-3">
          Стек
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Технологический стек
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-400 max-w-2xl">
          Каждый инструмент отвечает строго за свой слой, обеспечивая{" "}
          <strong className="text-white font-semibold">
            максимальную производительность
          </strong>{" "}
          3D-сцены и интерфейса.
        </p>
      </header>

      {/* Список с разделителями */}
      <ul className="divide-y divide-slate-800/60">
        <li className="flex items-start gap-3 py-4">
          <span
            className="text-rose-500 mt-1 shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Next.js как каркас
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Обеспечивает роутинг и оптимизацию. Через{" "}
              <code className="bg-[#1e294b] text-rose-300 px-1.5 py-0.5 rounded text-sm font-mono">
                dynamic import
              </code>{" "}
              с{" "}
              <code className="bg-[#1e294b] text-rose-300 px-1.5 py-0.5 rounded text-sm font-mono">
                ssr: false
              </code>{" "}
              тяжёлая Three.js-сцена загружается только на клиенте, не тормозя
              первую отрисовку.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-rose-500 mt-1 shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Tailwind CSS для интерфейса
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Стили живут прямо в разметке. В финальный бандл попадает только
              реально используемый CSS, что исключает появление «мёртвого» кода.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-rose-500 mt-1 shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              GSAP для анимаций
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Управляет плавным появлением блоков, скролл-триггерами и
              синхронизирует движение камеры Three.js с действиями пользователя.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-rose-500 mt-1 shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Разделение ответственности
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Three.js рисует сцену, GSAP двигает её, Tailwind стилизует UI, а
              Next.js связывает всё воедино без дублирования функций.
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
          Практичный стек без лишнего веса: быстрая загрузка, чистый код и
          анимации, которые плавно дополняют 3D-пространство.
        </p>
      </div>
    </article>
  );
};

export default StackSection;
