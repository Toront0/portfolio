import React from "react";

const StackSection = () => {
  return (
    <article className="w-full mt-12">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-rose-600 mb-3 dark:text-rose-400">
          Стек
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Технологический стек
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 max-w-2xl dark:text-zinc-400">
          Каждый инструмент отвечает строго за свой слой, обеспечивая{" "}
          <strong className="text-zinc-900 font-semibold dark:text-white">
            максимальную производительность
          </strong>{" "}
          3D-сцены и интерфейса.
        </p>
      </header>

      {/* Список с разделителями */}
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800/60">
        <li className="flex items-start gap-3 py-4">
          <span
            className="text-rose-600 mt-1 shrink-0 text-xs dark:text-rose-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Next.js как каркас
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Обеспечивает роутинг и оптимизацию. Через{" "}
              <code className="bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded text-sm font-mono dark:bg-[#1e294b] dark:text-rose-300">
                dynamic import
              </code>{" "}
              с{" "}
              <code className="bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded text-sm font-mono dark:bg-[#1e294b] dark:text-rose-300">
                ssr: false
              </code>{" "}
              тяжёлая Three.js-сцена загружается только на клиенте, не тормозя
              первую отрисовку.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-rose-600 mt-1 shrink-0 text-xs dark:text-rose-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Tailwind CSS для интерфейса
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Стили живут прямо в разметке. В финальный бандл попадает только
              реально используемый CSS, что исключает появление «мёртвого» кода.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-rose-600 mt-1 shrink-0 text-xs dark:text-rose-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              GSAP для анимаций
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Управляет плавным появлением блоков, скролл-триггерами и
              синхронизирует движение камеры Three.js с действиями пользователя.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-rose-600 mt-1 shrink-0 text-xs dark:text-rose-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Разделение ответственности
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Three.js рисует сцену, GSAP двигает её, Tailwind стилизует UI, а
              Next.js связывает всё воедино без дублирования функций.
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
          Практичный стек без лишнего веса: быстрая загрузка, чистый код и
          анимации, которые плавно дополняют 3D-пространство.
        </p>
      </div>
    </article>
  );
};

export default StackSection;
