import Image from "next/image";
import React from "react";
import { MdOutlineCloudDownload } from "react-icons/md";
import AnimatedPhoneMockup from "../AnimatedPhoneMockup";

const TrackerAppSection = () => {
  return (
    <article className="w-full mt-12 max-w-[1200px] mx-auto">
      {/* Шапка секции */}
      <header className="mb-6">
        <p className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
          Мобильное приложение
        </p>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Grammz — трекер работы
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-400 max-w-2xl">
          Инструмент автоматизации для учёта личной продуктивности и заработка с
          асинхронной подгрузкой данных и аналитикой.
        </p>

        {/* Теги стека */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-slate-900/60 border border-slate-800/60 text-slate-400">
            Kotlin
          </span>
        </div>
      </header>

      {/* Контентная сетка — исправлен скролл и адаптивность для мобилок */}
      <div className="relative flex flex-col md:flex-row w-full gap-8">
        {/* ЛЕВАЯ КОЛОНКА: Списочный функционал */}
        <div className="w-full md:w-1/2">
          <ul className="divide-y divide-slate-800/60">
            <li className="flex items-start gap-3 py-4">
              <span
                className="text-sky-500 mt-1 shrink-0 text-xs"
                aria-hidden="true"
              >
                ◆
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  Аналитика продуктивности
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  Подсчитывает выполненные задачи, фиксирует активные дни и
                  отслеживает дедлайны расчётного периода.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 py-4">
              <span
                className="text-sky-500 mt-1 shrink-0 text-xs"
                aria-hidden="true"
              >
                ◆
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  Автоматический расчёт зарплаты
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  Конвертирует выполненный объём работы в финансовый результат
                  сотрудника в реальном времени.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 py-4">
              <span
                className="text-sky-500 mt-1 shrink-0 text-xs"
                aria-hidden="true"
              >
                ◆
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  Интерактивные графики
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  Наглядно визуализирует ежедневную активность для быстрого
                  анализа пиков нагрузки.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 py-4">
              <span
                className="text-sky-500 mt-1 shrink-0 text-xs"
                aria-hidden="true"
              >
                ◆
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  Календарь задач
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  Позволяет детально управлять записями, редактировать статусы и
                  автоматически рассчитывать метрический объём выработки.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 py-4">
              <span
                className="text-sky-500 mt-1 shrink-0 text-xs"
                aria-hidden="true"
              >
                ◆
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  Асинхронный каталог
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  Оснащен бесконечным скроллом и быстрой подгрузкой карточек с
                  размерами, унаследовав готовую дизайн-систему.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 py-4">
              <span
                className="text-sky-500 mt-1 shrink-0 text-xs"
                aria-hidden="true"
              >
                ◆
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  Поиск и фильтрация
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  Оптимизированная система сортировки для мгновенного нахождения
                  нужных позиций без лишних кликов.
                </p>
              </div>
            </li>
          </ul>

          {/* Секция загрузки APK */}
          <div className="mt-8 border-t border-slate-800/40 pt-6">
            <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-wider text-sky-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>Сборка распределения / Target Platform</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5 max-w-xl">
              Вы можете скачать локальную упрощенную версию приложения напрямую
              для Android, чтобы покрутить интерфейс вживую. К сожалению,
              собрать билд под iOS не вышло: у меня нет iMac, да и драконовская
              политика этих ******** из Apple не оставляет шансов запустить
              проект без кучи платных лицензий 🍏🫠
            </p>

            <div>
              <a
                href="/app-release.apk"
                download
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 transition-colors active:scale-[0.98]"
              >
                Скачать .apk приложение
                <MdOutlineCloudDownload className="text-sky-400 text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: Телефонный мокап */}
        <div className="w-full md:w-1/2 static md:sticky top-24 h-auto flex justify-center items-center pointer-events-auto z-10 mt-6 md:mt-0">
          <AnimatedPhoneMockup />
        </div>
      </div>

      {/* Финальный callout */}
      <div className="mt-12 rounded-xl border border-slate-800/40 bg-slate-900/20 p-4">
        <p className="text-base leading-relaxed text-slate-300">
          <strong className="text-emerald-400 font-semibold">
            Что в итоге?
          </strong>{" "}
          Полноценный рабочий инструмент, объединивший активность, заработок и
          учёт номенклатуры в рамках одного бесшовного приложения.
        </p>
      </div>
    </article>
  );
};

export default TrackerAppSection;
