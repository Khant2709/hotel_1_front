import {ToastContainer} from 'react-toastify';
import {Inter} from "next/font/google";
import "../styles/globals.css";

import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
import MyFooter from "../components/layout/myFooter/myFooter";
import WindowPopUp from "../components/layout/windowPopUp/windowPopUp";
import WindowWarningOutofSession from "../components/layout/WindowWarningOutofSession/WindowWarningOutofSession";
import ButtonCallBack from "../components/layout/ButtonCallBack/ButtonCallBack";
import WrapperPreloader from "../components/layout/preloader/preloader";

import {WindowWidthProvider} from "../hooks/UseWidth";
import {PopUpProvider} from "../hooks/useWindowPopUp";
import {PreloaderProvider} from "../hooks/usePreloader";


const inter = Inter({subsets: ["latin"]});

export const metadata = {
  site_name: "Отель Шикарный Вид",
  generator: "Next.js", // Информация о генераторе, указывает на то, что сайт создан с помощью Next.js
  applicationName: "Отель Шикарный Вид", // Название вашего отеля
  referrer: "origin-when-cross-origin", // Указывает на то, как браузер должен обрабатывать referrer при переходах на другие источники (cross-origin)
  authors: [
    {name: "VladislavKh"}, // Имя автора (может быть вашим именем или именем администратора сайта)
  ],
  creator: "VladislavKh", // Имя создателя сайта
  publisher: 'Отель "Шикарный Вид"', // Имя издателя (вашего отеля)
  formatDetection: {
    email: false, // Отключение автоматического форматирования электронных адресов
    address: false, // Отключение автоматического форматирования адресов
    telephone: false, // Отключение автоматического форматирования телефонных номеров
  },
  lang: "ru",
  icons: {
    // Основная иконка сайта (favicon), отображается во вкладке браузера
    icon: [
      {
        url: "/favicon32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon120.png",
        type: "image/png",
        sizes: "120x120",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    // Ярлык для добавления на домашний экран устройства
    shortcut: {
      url: "/favicon192.png", // URL ярлыка (обязательно абсолютный)
      type: "image/png", // Тип файла (PNG)
      width: 192, // Ширина ярлыка (192 пикселя)
      height: 192, // Высота ярлыка (192 пикселя)
    },
    // Иконка для Safari на устройствах Apple
    apple: {
      url: "/favicon180.png", // URL иконки для Safari (обязательно абсолютный)
      type: "image/png", // Тип файла (PNG)
      width: 180, // Ширина иконки (180 пикселей)
      height: 180, // Высота иконки (180 пикселей)
    },
    // Другие специфичные иконки или свойства
    other: {
      rel: "apple-touch-icon-precomposed", // Тип иконки (для Safari)
      url: "/favicon180.png", // URL другой иконки (обязательно абсолютный)
      type: "image/png", // Тип файла (PNG)
      width: 180, // Ширина иконки (180 пикселей)
      height: 180, // Высота иконки (180 пикселей)
    },
  },
  verification: {
    // Подтверждение владения сайтом в Яндекс.Вебмастере
    yandex: "69c2c958b585eacc", // Замените 'yandex-verification-code' на ваш код подтверждения Яндекса

    // Дополнительные теги для других сервисов (необязательно)
    other: {
      // Тег 'me' для указания вашего электронного адреса и ссылки
      me: ["Khant2709@gmail.com"], // Замените 'your-email' на ваш электронный адрес и 'your-link' на вашу ссылку
    },
  },
  assets: [
    "https://shikarnyivid.ru/public", // Пример ссылки на хранение изображений
    "https://shikarnyivid.ru/sitemap.xml", // Ссылка на файл sitemap
    "https://shikarnyivid.ru/robots.txt", // Ссылка на файл robots.txt
  ],
  category: "отель", // Укажите категорию вашего контента, например, "отель"
};

export default function RootLayout({children}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Отель Шикарный Вид",
    logo: "https://shikarnyivid.ru/favicon180.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7 (991) 416-26-38",
      email: "resortegorova@gmail.com",
      contactType: "бронирование номеров и обслуживание клиентов",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Россия",
      addressRegion: "Краснодарский край",
      addressLocality: "Кабардинка",
      streetAddress: "ул. Сухумское Шоссе 1а",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.668097",
      longitude: "37.915490",
    },
  };

  return (
      <html lang="ru">
      <body className={inter.className}>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <WindowWidthProvider>
        <PreloaderProvider>
          <PopUpProvider>
            <WrapperPreloader/>
            <WindowPopUp/>
            <WindowWarningOutofSession/>
            <ToastContainer/>
            <Header/>
            {children}
            <ButtonCallBack/>
            <Footer/>
            <MyFooter/>
          </PopUpProvider>
        </PreloaderProvider>
      </WindowWidthProvider>
      </body>
      </html>
  );
}
