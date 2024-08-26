import Cloud from "./Cloud";
import { useState, useEffect } from "react";

export default function Clouds() {
  const [ramdonScales, setRamdonScales] = useState(0.011);
  console.log(ramdonScales);

  useEffect(() => {
    const generateRamdonScales = () => {
      // genera valores entre 0.011 y 0.021
      const newRamdonScales = Math.random() * (0.021 - 0.011) + 0.011;
      // toma los 4 primeros decimales
      newRamdonScales.toFixed(4);
      setRamdonScales(newRamdonScales);
    };

    setInterval(generateRamdonScales, 2000);
  }, []);

  return (
    <>
      <Cloud scales={ramdonScales}/>
    </>
  );
}
