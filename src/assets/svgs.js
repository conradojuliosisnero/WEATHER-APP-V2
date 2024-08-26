export function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function CloudSVG({scales}) {
  return (
    <svg width="0" height="0">
      <filter id="filter-base">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={scales}
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
  );
}

export function RainSvgCloud({ baseFrequency, seed }) {
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
  </svg>;
}
