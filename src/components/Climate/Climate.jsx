import Sun from "../Sun/Sun";
import Clouds from "../Dashboard/Clouds/Clouds";

export default function Climate() {
  // funcion para detectar el clima dependiendo de los datos de la api
  const detectWeather = (data) => {
    if (data.weather[0].main === "Clouds") {
      return "clouds";
    } else {
      return "clear";
    }
  };

  return (
    <div className="-z-10">
      <Sun />
      <Clouds />
    </div>
  );
}
