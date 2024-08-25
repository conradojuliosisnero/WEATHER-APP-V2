import { Search } from "lucide-react";
import { useSubmint } from "@/hooks/useSubmint";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchSection() {
  const [city, setCity] = useState("");

  const { data, error, loading, submintData } = useSubmint();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Buscando...");
    await submintData(`${process.env.WEATHER_URL}`, {
      city,
    });
  };

  const animateButtonOptions = {
    initial: {
      opacity: 0,
      transform: "translateX(-10px)",
    },
    animate: {
      opacity: 1,
      transform: "translateX(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateX(-10px)",
    },
  };

  const animateInputOptions = {
    initial: {
      opacity: 0,
      width: "100%",
    },
    animate: {
      opacity: 1,
      width: city !== "" ? "99%" : "100%",
    },
    exit: {
      opacity: 0,
      width: "100%",
    },
  };

  return (
    <section className="relative flex gap-2 items-center justify-center sm:justify-start md:justify-center lg:justify-start xl:justify-center">
      <div className="flex-grow min-w-0">
        <motion.div
          variants={animateInputOptions}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="sm:mx-auto md:mx-0 lg:mx-auto xl:mx-0"
        >
          <input
            type="text"
            placeholder="Buscar ciudad..."
            onChange={(e) => setCity(e.target.value)}
            name="city-search"
            className="pl-10 pr-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </motion.div>
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
      </div>
      <div className="flex-shrink-0">
        <AnimatePresence>
          {city !== "" && (
            <motion.div
              variants={animateButtonOptions}
              initial="initial"
              animate="animate"
              exit="exit"
              className="ml-3"
            >
              <button type="submit" onClick={handleSubmit} className="btn-uno">
                Buscar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
