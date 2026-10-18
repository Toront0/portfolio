import React from "react";
import ImageSlider from "../ImageSlider";

const DigitizationSection = () => {
  return (
    <article className="w-full max-w-[1200px] mx-auto px-4 lg:px-24">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-amber-600 mb-3 dark:text-amber-400">
          Оцифровка
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          От физического образца к 3D-модели
        </h3>

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Левая колонка: Текст */}
          <div className="w-full lg:w-1/2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              Разнородные фотографии товаров подсознательно воспринимаются как{" "}
              <strong className="text-zinc-900 font-semibold dark:text-white">
                небрежность, снижающая авторитет бренда
              </strong>
              . Единый цифровой 3D-каталог решает эту проблему, обеспечивая
              общую логику материалов, ракурсов и подачи.
            </p>
            <p className="mt-3 text-base">
              Мой практический{" "}
              <strong className="text-zinc-900 font-semibold dark:text-white">
                опыт в 3D-моделировании
              </strong>{" "}
              позволил мне самостоятельно оцифровать и подготовить все
              трехмерные ассеты под строгие веб-стандарты.
            </p>

            <ul className="divide-y divide-zinc-200 mt-4 dark:divide-zinc-800/60">
              <li className="flex items-start gap-3 py-4">
                <span
                  className="text-amber-600 mt-1 shrink-0 text-xs dark:text-amber-500"
                  aria-hidden="true"
                >
                  ◆
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 mb-1.5 dark:text-white">
                    Переиспользование ассетов
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Готовые 3D-модели можно безболезненно использовать в любых
                    других экосистемах — от мобильных приложений до
                    конфигураторов.
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
                    Точность для дизайнеров
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Практикующие дизайнеры могут закладывать точные цифровые
                    копии в проекты, гарантируя 100% совпадение ремонта с
                    рендером.
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
                    Фундамент для Machine Learning
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    База данных закладывает основу для{" "}
                    <strong className="text-amber-700 font-semibold dark:text-amber-400">
                      интеграции ИИ-решений
                    </strong>
                    : мгновенное распознавание материалов на складе через камеру
                    смартфона.
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
                    Интерактивный конфигуратор
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Цифровая основа позволяет запустить онлайн-конфигуратор
                    интерьеров для клиентов в реальном времени.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Правая колонка: Слайдер с фиксом высоты/stickiness */}
          <div className="w-full lg:w-1/2 static lg:sticky top-4 h-auto z-30 pointer-events-auto mt-4 lg:mt-0">
            <ImageSlider
              beforeSrc="/catalog_incor.jpg"
              afterSrc="/catalog_cor.jpg"
            />
          </div>
        </div>
      </header>

      {/* Финальный callout */}
      <div className="mt-6 rounded-xl">
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <strong className="text-emerald-600 font-semibold dark:text-emerald-400">
            Что в итоге?
          </strong>{" "}
          Мощная 3D-основа позволяет легко масштабировать продукт во множество
          смежных технологических решений — от AR-приложений до систем
          автоматизации склада.
        </p>
      </div>
    </article>
  );
};

export default DigitizationSection;
