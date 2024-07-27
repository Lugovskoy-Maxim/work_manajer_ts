type MenuNavigationType = {
  ru: NavigationLocale;
  en: NavigationLocale;
};

type NavigationLocale = {
  waybills: string;
  summary: string;
  vehicles: string;
  drivers: string;
  organizations: string;
  address: string;
  staff: string;
  profile: string;
};

const Navigation: MenuNavigationType = {
  ru: {
    waybills: "Путевые листы",
    summary: "Сводка",
    vehicles: "Техника",
    drivers: "Водители",
    organizations: "Организации",
    address: "Направления",
    staff: "Персонал",
    profile: "Профиль",
  },
  en: {
    waybills: "Waybills",
    summary: "Summary",
    vehicles: "Vehicles",
    drivers: "Drivers",
    organizations: "Organizations",
    address: "Address",
    staff: "Staff",
    profile: "Profile",
  },
};

export default Navigation;