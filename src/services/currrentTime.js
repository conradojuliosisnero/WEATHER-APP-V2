export default function getCurrentTime(lat, lon, part) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  };
  const URL = `${process.env.WEATHER_APP_BASE_URL}?lat=${lat}&lon=${lon}&exclude=${part}&appid=${process.env.WEATHER_APP_API_KEY}`;
  try {
    const response = fetch(URL, options);
    if (!response.ok) {
      throw new Error("Ocurrio un error al obtener la informacion del tiempo");
    }
    const data = response.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
