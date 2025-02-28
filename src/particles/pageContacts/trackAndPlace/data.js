import {DEFAULT_CONTACTS} from "../../../config/envData";


const createMethod = (id, type, text, subtext = null, link = null) => {
  return {id, type, text, subtext, link}
};

export const trackMethod = [
  {
    id: 1,
    title: "На автомобиле:",
    method: [
      createMethod(1, "text", "Самый простой способ - написать в Яндекс навигаторе Шикарный Вид – Кабардинка или п.Кабардинка, ул. Сухумское Шоссе 1а."),
      createMethod(2, "link", "Еще проще => ", "открыть яндекс карты", DEFAULT_CONTACTS.linkYaMap),
      createMethod(3, "router", "Путь со стороны Новороссийска.", "Посмотреть", "/contacts/track/car"),
      createMethod(4, "router", "Путь со стороны Геленджика.", "Посмотреть", "/contacts/track/car?scroll=true"),
    ]
  },
  {
    id: 2,
    title: "На общественном транспорте:",
    method: [
      createMethod(1, "text", "Самый простой способ - написать в Яндекс навигаторе Шикарный Вид – Кабардинка или п.Кабардинка, ул. Сухумское Шоссе 1а."),
      createMethod(2, "link", "Еще проще => ", "открыть яндекс карты", DEFAULT_CONTACTS.linkYaMap),
      createMethod(3, "router", "Путь со стороны Новороссийска.", "Посмотреть", "/contacts/track/bus"),
      createMethod(4, "router", "Путь со стороны Геленджика.", "Посмотреть", "/contacts/track/bus?scroll=true"),
    ]
  },
  {
    id: 3,
    title: "Выезд в поселок Кабардинка с базы Шикарный Вид:",
    method: [
      createMethod(1, "router", "На автомобиле.", "Посмотреть", "/contacts/track/backTo"),
      createMethod(2, "router", "Пешком.", "Посмотреть", "/contacts/track/backTo?scroll=true")
    ]
  }
];

export const placeTest = [
  {
    id: 1,
    title: "Старый парк в Кабардинке.",
    description: "Скоро будет описание",
    link: "#",
  },
  {
    id: 2,
    title: "The Palma - панорамный ресторан.",
    description: "Скоро будет описание",
    link: "#",
  },
  {
    id: 3,
    title: "Кастальская Купель.",
    description: "Скоро будет описание",
    link: "#",
  },
  {
    id: 4,
    title: "Новая набережная Кабардинки. Ресторан Мадера.",
    description: "Скоро будет описание",
    link: "#",
  },
];