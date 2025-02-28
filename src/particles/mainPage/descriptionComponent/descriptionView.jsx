"use client";

import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

import Title from "../../../components/ui/title/title";
import Button from "../../../components/ui/buttons/button/button";

import {HOTEL_TYPE} from "../../../config/envData";

import {getFullPathImage} from "../../../utils/getFullPathImage";

import beach from "../../../../public/beach.webp";

import styles from "../../../styles/pageMain/fourthSection.module.css";
import stylesFontsT from "../../../styles/fonts/timesNewRoman.module.css";


const DescriptionView = ({description, image}) => {
  const router = useRouter();
  const imageSrc = !image ? beach.src : getFullPathImage(image.image_path, image.image_name);

  return (
      <>
        <Title Tag={"h2"} text={"О нас"}/>
        <div className={styles.wrapperMain}>
          <div className={styles.containerDescription}>
            <p className={stylesFontsT.newRoman400}>{description}</p>
            <Button
                text={"Забронировать номер"}
                hotel={HOTEL_TYPE}
                handleClick={() => router.push("/reservation")}
            />
          </div>
          <div style={{backgroundImage: `url(${imageSrc})`}} className={styles.img}/>
        </div>
      </>
  );
};

export default DescriptionView;
