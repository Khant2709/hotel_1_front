'use client'

import React, {useEffect, useRef} from 'react';
import Image from "next/image";

import stylesFontT from "../../../../styles/fonts/timesNewRoman.module.css";
import styles from "../../../../styles/track.module.css";

import track1 from "../../../../../public/track1.webp";
import track2 from "../../../../../public/track2.webp";
import {useSearchParams} from "next/navigation";
import CenteredWrapper from "../../../../components/ui/wrapperPage/centeredWrapper";


const ContentTrackCarPage = () => {
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
            Путь на автомобиле до Шикарный Вид – Кабардинка
          </h1>
          <h2 className={`${stylesFontT.newRoman700} ${styles.subTitle}`}>
            Со стороны Новороссийска до Шикарный Вид.
          </h2>
          <p className={styles.text}>
            Если вы едете со стороны Новороссийска, вам необходимо заехать в сам
            поселок Кабардинка для того чтобы развернуться. Ближайший разворот в
            поселке по улице Мира налево (на центральной арке: «Кабардинка
            приветствует вас»)
          </p>
          <Image alt={"img1"} src={track1} className={styles.horizontalImg}/>
          <p className={styles.text}>
            Далее вы едете все время прямо под мост и поворачиваете направо – как
            ведет дорога. Выезжаете на трассу и через 3 км будет крутой поворот
            направо (за светофором и камерой на 50 ) – заезд на территорию
            можжевелового парка. Сразу же, как повернули направо – резкий поворот
            налево. Вы двигаетесь прямо до конца (вдоль трассы) и потом дорога
            уходит направо – вы едете до конца, до голубых ворот. Шикарный Вид
            будет слева.
          </p>
          <Image alt={"img2"} src={track2} className={styles.verticalImg}/>

          <h2
              className={`${stylesFontT.newRoman700} ${styles.subTitle}`}
              ref={myElementRef}
          >
            Со стороны Геленджика до Шикарный Вид.
          </h2>
          <p className={styles.text}>
            Если вы едете со стороны Геленджика, вы не заезжаете в поселок, вы
            двигаетесь все время прямо по трассе – Сухумское шоссе. За светофором
            и камерой на 50 – заезд на территорию можжевелового парка. Сразу же,
            как повернули направо – резкий поворот налево. Вы двигаетесь прямо до
            конца (вдоль трассы) и потом дорога уходит направо – вы едете до
            конца, до голубых ворот. Шикарный Вид будет слева.
          </p>
          <Image alt={"img2"} src={track2} className={styles.verticalImg}/>
        </CenteredWrapper>
      </div>
  );
};

export default ContentTrackCarPage;