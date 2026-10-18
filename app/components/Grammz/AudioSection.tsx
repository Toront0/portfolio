import React from "react";

const AudioSection = () => {
  return (
    <article className="w-full mt-12">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-violet-600 mb-3 dark:text-violet-400">
          Звук
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Звук как часть сцены, а не фон
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 max-w-2xl dark:text-zinc-400">
          В интерактивном 3D-окружении{" "}
          <strong className="text-zinc-900 font-semibold dark:text-white">
            половина погружения держится на звуке
          </strong>
          . Визуал строит пространство, а выверенное аудио заставляет мозг
          поверить в его физическую глубину.
        </p>
      </header>

      {/* Список с разделителями */}
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800/60">
        <li className="flex items-start gap-3 py-4">
          <span
            className="text-violet-600 mt-1 flex-shrink-0 text-xs dark:text-violet-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Эмбиент на фоне
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Мягкая атмосферная подложка задает нужное настроение с первых
              секунд, формируя ощущение воздуха вокруг 3D-объектов.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-violet-600 mt-1 flex-shrink-0 text-xs dark:text-violet-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Звуки движения камеры
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Легкие whoosh-эффекты на поворотах подчеркивают динамику и делают
              перемещение в виртуальном пространстве физически ощутимым.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-violet-600 mt-1 flex-shrink-0 text-xs dark:text-violet-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Кинематографичность
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Сочетание фонового эмбиента и точечных звуковых акцентов
              превращает обычный рендеринг геометрии в живую интерактивную
              сцену.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-violet-600 mt-1 flex-shrink-0 text-xs dark:text-violet-500"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
              Деликатность и контроль
            </h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Громкость аудио-эффектов тонко сбалансирована, чтобы не
              перегружать пользователя. Звук можно мгновенно отключить одной
              кнопкой.
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
          Аудио-слой создает полноценный кинематографический опыт: сцена звучит
          и воспринимается цельной, оставаясь легкой по весу.
        </p>
      </div>
    </article>
  );
};

export default AudioSection;
