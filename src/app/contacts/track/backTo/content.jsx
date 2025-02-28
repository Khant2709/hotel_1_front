'use client'

import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import {useSearchParams} from "next/navigation";

import stylesFontT from "../../../../styles/fonts/timesNewRoman.module.css";
import styles from "../../../../styles/track.module.css";

import track3 from "../../../../../public/track3.webp";
import track4 from "../../../../../public/track4.webp";
import CenteredWrapper from "../../../../components/ui/wrapperPage/centeredWrapper";


const ContentTrackBackTo = () => {
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
            Выезд в поселок Кабардинка с базы Шикарный Вид
          </h1>
          <h2 className={`${stylesFontT.newRoman700} ${styles.subTitle}`}>
            Если вы на машине:{" "}
          </h2>
          <p className={styles.text}>
            Первый вариант - Вы выезжаете на трассу и через 1,5 км будет поворот
            направо, через пляж «Дикое место»
          </p>
          <Image
              alt={"img3"}
              src={track3}
              className={styles.verticalImg}
              style={{marginBottom: "2rem"}}
          />
          <p className={styles.text}>
            Второй вариант - Можно выехать сразу в поселок через Можжевеловый
            парк, но там крутой спуск, легковые машины съезжают, но аккуратно. Вы
            проезжаете по территории кластера, вдоль недостроенного высотного
            здания и поворачиваете направо под мост.
          </p>
          <Image alt={"img4"} src={track4} className={styles.verticalImg}/>

          <h2
              className={`${stylesFontT.newRoman700} ${styles.subTitle}`}
              ref={myElementRef}
          >
            Если вы пешком:
          </h2>
          <p className={styles.text}>
            1. Можно перейти дорогу через надземный переход и вдоль дороги
            спуститься в начало поселка.
          </p>
          <p className={styles.text}>
            2. Можно пройти через Можжевеловый парк – дорого вдоль недостроенного
            здания и пройти под мостом – там будут ступеньки.
          </p>
          <p className={styles.text}>
            3. Дорога пешком до центра Кабардинки – 30 минут.
          </p>
        </CenteredWrapper>
      </div>
  );
};

export default ContentTrackBackTo;