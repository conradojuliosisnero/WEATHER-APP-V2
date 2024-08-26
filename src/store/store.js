import { create } from "zustand";

const useUserStore = create((set) => ({
    location: null,
    latitude: null,
    longitude: null,
    search: "",
    temperatureUnit: "Celsius",
    currenTimeSearch: [],
    setCurrentTimeSearch: (currentTimeSearch) => set({ currenTimeSearch: currentTimeSearch }),
    setSearch: (search) => set({ search }),
    setLatitude: (latitude) => set({ latitude }),
    setLongitude: (longitude) => set({ longitude }),
    setTemperatureUnit: (unit) => set({ temperatureUnit: unit }),
    setLocation: (location) => set({ location }),
}));

export default useUserStore;
