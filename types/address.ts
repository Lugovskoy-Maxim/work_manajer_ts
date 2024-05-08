export type Address = {
  id: string; // Идентификатор
  city: string; // Город
  street: string; // Улица
  map?: string; // координаты
  streetNumber?: string; // Номер дома
  apartmentNumber?: string; // Номер квартиры (необязательное поле)
  postalCode?: string; // Почтовый индекс
  floor?: number; // Этаж (необязательное поле)
  entrance?: string; // Номер подъезда (необязательное поле)
  buildingNumber?: string; // Номер здания (необязательное поле)
  state?: string; // Штат (необязательное поле)
  region?: string; // Регион (необязательное поле)
  country: string; // Страна
  countryCode?: string; // Код страны (необязательное поле)
  phone?: string;
  email?:string; 
  owner: string;
};