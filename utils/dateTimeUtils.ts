export const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const getCurrentDate = () => {
  const now = new Date();
  return now.getDate();
};

export const getCurrentMonth = () => {
  const now = new Date();
  return now.toLocaleString('ru-RU', { month: 'long' });
};

export const getCurrentDayOfWeek = () => {
  const now = new Date();
  return now.toLocaleString('ru-RU', { weekday: 'long' });
};
