export type WaybillsNavigationType = {
  ru: NavigationLocale;
  en: NavigationLocale;
};

type NavigationLocale = {
  createWaybills: string;
  toExport: string;
  control: string;
  name: string;
  address: string;
  date: string;
  status: string;
  driver: string;
  owner: string;
  sortBy: string;
  displayBy: string;
};

const WaybillsNavigation: WaybillsNavigationType = {
  ru: {
    createWaybills: "Создать путевой лист",
    toExport: "Выгрузить",
    control: 'Контроль',
    name: "Название",
    address: 'Направление',
    date: "Дата",
    status: "Статус",
    driver: 'Водитель',
    owner: "Автор",
    sortBy: 'Сортировать по',
    displayBy: "Отображать по",
  },
  en: {
    createWaybills: "Create new waybills",
    toExport: "Export",
    control: 'Control',
    name: "Name",
    address: 'Address',
    date: "Date",
    status: "Status",
    driver: 'Driver',
    owner: "Owner",
    sortBy: 'Sort by',
    displayBy: "Display by",
  },
};

export default WaybillsNavigation;