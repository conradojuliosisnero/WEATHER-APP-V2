export default async function searchLocation(query) {
  const options = {
    method: "GET",
    cache: "no-store",
  };
  const URL = `${process.env.WEATHER_SEARCH_BASE_URL}?q=${query}&appid=${process.env.WEATHER_APP_API_KEY}`;
  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error("Ocurrio un error al obtener la informacion");
    }
    const data = await response.json();
    // Extraer los datos relevantes
    const result = {
      location: {
        name: data.name,
        country: data.sys.country,
        coordinates: {
          lat: data.coord.lat,
          lon: data.coord.lon,
        },
      },
      weather: {
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      },
      temperature: {
        current: data.main.temp,
        feels_like: data.main.feels_like,
        min: data.main.temp_min,
        max: data.main.temp_max,
      },
      wind: {
        speed: data.wind.speed,
        direction: data.wind.deg,
      },
      clouds: data.clouds.all,
      visibility: data.visibility,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };

    return result;
  } catch (error) {
    return { error: error.message };
  }
}
