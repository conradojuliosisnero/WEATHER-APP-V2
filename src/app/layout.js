import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/providers/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DESCRIPTION } from "@/data/data";

const inter = Nunito({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "WeatherAppV2 - WeatherApp",
  description: `${DESCRIPTION}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* REACT TOAST */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          stacked
          pauseOnHover
          theme="light"
        />
        {/* NEXT UI PROVIDER */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
