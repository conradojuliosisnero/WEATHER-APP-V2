/*
/**
 * Hace una peticion GET a la API
 * y devuelve los datos en formato JSON
 *
 * @param {string} url - La url de la API de openweathermap
 * @returns {Promise} - Un promise que se resuelve con los datos de la API
 */

import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    const OPTIONS = {
      method: "GET",
      cache: "no-store",
    };
  const getData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url, OPTIONS);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, error, loading, getData };
};
