export default async function locationCity(lat, lon) {
  const URL = `${process.env.GEOCODING_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.GEOCODING_API_KEY}`;
  try {
    const response = await fetch(URL);
    if (response.status !== 200) {
      throw new Error("Ocurrio un error al obtener al obtener la cuidad");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
