"use client";
import { ParticlesComponent } from "@/components/ui/Particles/Particles";
import Header from "@/components/Dashboard/Header/Header";
import Footer from "@/components/Dashboard/Footer/Foooter";

export default function layout({ children }) {
  return (
    <>
      {/* <ParticlesComponent /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
}
