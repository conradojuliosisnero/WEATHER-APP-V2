"use client";
import "./rain-clouds.css";
import { useEffect, useRef, useState } from "react";

export default function RainClouds() {
  const containerRef = useRef(null); // Ref para el contenedor
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      const numClouds = 5;
      const cloudArray = Array.from({ length: numClouds }, () => {
        const size = Math.floor(Math.random() * (100 - 50) + 50); // Tamaños aleatorios entre 50 y 100px
        const top = Math.floor(Math.random() * (offsetHeight - size));
        const left = Math.floor(Math.random() * (offsetWidth - size));
        return { top, left, size };
      });
      setClouds(cloudArray);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {clouds.map((position, index) => (
        <div key={index}>
          <div
            className="rain-cloud"
            style={{
              top: cloud.top,
              left: cloud.left,
              width: cloud.size,
              height: cloud.size,
            }}
          >
            <div className="rain-cloud-base"></div>
            <div className="rain-cloud-back"></div>
            <div className="rain-cloud-mid"></div>
            <div className="rain-cloud-front"></div>
            <svg width="0" height="0">
              <filter id="filter-base">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.011"
                  numOctaves="5"
                  seed="8517"
                />
                <feDisplacementMap in="SourceGraphic" scale="120" />
              </filter>
              <filter id="filter-back">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.011"
                  numOctaves="3"
                  seed="8517"
                />
                <feDisplacementMap in="SourceGraphic" scale="120" />
              </filter>
              <filter id="filter-mid">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.011"
                  numOctaves="3"
                  seed="8517"
                />
                <feDisplacementMap in="SourceGraphic" scale="120" />
              </filter>
              <filter id="filter-front">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.009"
                  numOctaves="4"
                  seed="8517"
                />
                <feDisplacementMap in="SourceGraphic" scale="50" />
              </filter>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
