export type WaybillsNavigationType = {
  ru: NavigationLocale;
  en: NavigationLocale;
};

type NavigationLocale = {
  createWaybills: string;
  print: string;
  name: string;
  date: string;
  status: string;
  owner: string;
  sortBy: string;
  displayBy: string;
};

const WaybillsNavigation: WaybillsNavigationType = {
  ru: {
    createWaybills: "Создать путевой лист",
    print: "На печать",
    name: "Название",
    date: "Дата",
    status: "Статус",
    owner: "Автор",
    sortBy: 'Сортировать по',
    displayBy: "Отображать по",
  },
  en: {
    createWaybills: "Create new waybills",
    print: "To print",
    name: "Name",
    date: "Date",
    status: "Status",
    owner: "Owner",
    sortBy: 'Sort by',
    displayBy: "Display by",
  },
};

export default WaybillsNavigation;