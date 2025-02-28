'use client'

import React, {useEffect, useRef} from 'react';
import {useSearchParams} from "next/navigation";

import styles from "../../../../styles/track.module.css";
import stylesFontT from "../../../../styles/fonts/timesNewRoman.module.css";
import CenteredWrapper from "../../../../components/ui/wrapperPage/centeredWrapper";


const ContentTrackBusPage = () => {
  const searchParams = useSearchParams();
  const myElementRef = useRef(null);
  const scroll = searchParams.has("scroll");

  useEffect(() => {
    if (scroll && myElementRef.current) {
      myElementRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, []);


  return (
      <div className={`${stylesFontT.newRoman400} ${styles.wrapperPage}`}>
        <CenteredWrapper>
          <h1 className={`${stylesFontT.newRoman700} ${styles.title}`}>
            Путь на автобусе до Шикарный Вид – Кабардинка
          </h1>
          <h2 className={`${stylesFontT.newRoman700} ${styles.subTitle}`}>
            Со стороны Новороссийска до Шикарный Вид.
          </h2>
          <p className={styles.text}>
            Лучший способ добраться из Новороссийска в Кабардинку без машины - это
            автобус, дорога займет 30 минут и будет стоить от 114 рублей.
            Актуальное расписание на лето можно посмотреть на сайте
            <b>
              <i>www.avtovokzaly.ru/avtobus/novorossiysk-kabardinka</i>
            </b>
          </p>
          <p className={styles.text}>
            На сайте Автовокзалы.ру представлено актуальное расписание автобусов
            из Новороссийска в Кабардинку от остановки Автовокзал, карты маршрута
            на все рейсы. Время отправления автобусов от 00:15 до 22:36.
            Минимальное время в пути составляет 27 минут.
          </p>

          <h2
              className={`${stylesFontT.newRoman700} ${styles.subTitle}`}
              ref={myElementRef}
          >
            Со стороны Геленджика до Шикарный Вид.
          </h2>
          <p className={styles.text}>
            Лучший способ добраться из Геленджика в Кабардинку без машины – это
            автобус, дорога займет 15-20 минут и будет стоит от 50 рублей. На
            остановке «Ленина (Автостанция)» нужно сесть на маршрутное такси № 31
            или автобус № 103. Подробное расписание автобусов — на официальном
            сайте города-курорта Геленджик avtovokzal-gelendzhik.ru
          </p>
        </CenteredWrapper>
      </div>
  );
};

export default ContentTrackBusPage;