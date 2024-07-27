export type Address = {
  id: string; // Идентификатор
  name?: string; // Наименование объекта если нет улицы
  city: string; // Город
  street?: string; // Улица
  map?: string; // координаты
  streetNumber?: string; // Номер дома
  apartmentNumber?: string; // Номер квартиры (необязательное поле)
  postalCode?: string; // Почтовый индекс
  floor?: number; // Этаж (необязательное поле)
  entrance?: string; // Номер подъезда (необязательное поле)
  buildingNumber?: string; // Номер здания (необязательное поле)
  region?: string; // Регион (необязательное поле)
  country: string; // Страна
  countryCode?: string; // Код страны (необязательное поле)
  phone?: string;
  email?:string; 
  owner: string;
};