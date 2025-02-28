import React from "react";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

import Title from "../../../components/ui/title/title";

import {getFullPathImage} from "../../../utils/getFullPathImage";

import styles from "../../../styles/pageMain/thirdSection.module.css";
import stylesFontsT from "../../../styles/fonts/timesNewRoman.module.css";

import imgTestHotel from "../../../../public/mainTeritri.webp";


const TerritoryView = ({territory, imageMain, images}) => {
  const imageMainSrc = !imageMain ? imgTestHotel : getFullPathImage(imageMain.image_path, imageMain.image_name);

  return (
      <>
        <Title Tag={"h2"} text={"Територия"}/>
        <div className={styles.mainWrapper}>
          <div className={styles.firstContainer}>
            <div className={`${stylesFontsT.newRoman400} ${styles.descriptionTerritory}`}>
              <ReactMarkdown>{territory}</ReactMarkdown>
            </div>

            <div className={styles.wrapperImgMain}>
              <Image
                  alt={"img"}
                  src={imageMainSrc}
                  width={300}
                  height={500}
                  className={styles.mainImg}
              />
            </div>
          </div>

          <div className={styles.secondContainerMain}>
            {images.slice(0, 4)
                .map((image) => {
                  return (
                      <div
                          key={image.id}
                          style={{backgroundImage: `url(${getFullPathImage(image.image_path, image.image_name)})`}}
                          className={styles.otherImg}
                      />
                  );
                })}
          </div>
        </div>
      </>
  );
};

export default TerritoryView;
