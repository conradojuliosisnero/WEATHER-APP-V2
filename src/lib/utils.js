// funcion para convertir grados celsius a fahrenheit
export const kelvinToFahrenheit = (kelvin) => {
  return ((kelvin - 273.15) * 9) / 5 + 32;
};

// funcion para convertir grados fahrenheit a celsius
export const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

// funcion para convertir grados celsius a kelvin
export const celsiusToKelvin = (celsius) => {
  return celsius + 273.15;
};

// funcion para convertir grados kelvin a celsius
export const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

// funcion para saber la hora del dia
export const getHour = () => {
  const now = new Date();
  const hours = now.getHours(); // Hora en formato 24 horas (0-23)
  return hours
};
