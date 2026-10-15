import React from "react";

const AudioSection = () => {
  return (
    <article className="w-full mt-12">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-3">
          Звук
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Звук как часть сцены, а не фон
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-400 max-w-2xl">
          В интерактивном 3D-окружении{" "}
          <strong className="text-white font-semibold">
            половина погружения держится на звуке
          </strong>
          . Визуал строит пространство, а выверенное аудио заставляет мозг
          поверить в его физическую глубину.
        </p>
      </header>

      {/* Список с разделителями */}
      <ul className="divide-y divide-slate-800/60">
        <li className="flex items-start gap-3 py-4">
          <span
            className="text-violet-500 mt-1 flex-shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Эмбиент на фоне
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Мягкая атмосферная подложка задает нужное настроение с первых
              секунд, формируя ощущение воздуха вокруг 3D-объектов.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-violet-500 mt-1 flex-shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Звуки движения камеры
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Легкие whoosh-эффекты на поворотах подчеркивают динамику и делают
              перемещение в виртуальном пространстве физически ощутимым.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-violet-500 mt-1 flex-shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Кинематографичность
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Сочетание фонового эмбиента и точечных звуковых акцентов
              превращает обычный рендеринг геометрии в живую интерактивную
              сцену.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3 py-4">
          <span
            className="text-violet-500 mt-1 flex-shrink-0 text-xs"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Деликатность и контроль
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Громкость аудио-эффектов тонко сбалансирована, чтобы не
              перегружать пользователя. Звук можно мгновенно отключить одной
              кнопкой.
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
          Аудио-слой создает полноценный кинематографический опыт: сцена звучит
          и воспринимается цельной, оставаясь легкой по весу.
        </p>
      </div>
    </article>
  );
};

export default AudioSection;
