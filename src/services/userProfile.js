export default async function getUserProfile(body) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const URL = `${process.env.WEATHER_SETTINGS_USER_URL}`;
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error("Ocurrio un error enviar la informacion");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
