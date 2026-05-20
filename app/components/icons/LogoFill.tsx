const LogoFill = ({
  klass,
  stroke = 40,
}: {
  klass?: string;
  stroke?: number;
}) => {
  return (
    <svg
      width="2700"
      height="1632"
      viewBox="0 0 2700 1632"
      fill="none"
      class={klass}
    >
      <title>ETHTokyo Logo (filled)</title>
      <path
        d="M1680.41 1592.14L1857.11 876.102L2221.68 376.45L2364.9 280.22L1680.41 1592.14Z"
        stroke="currentColor"
        stroke-width={stroke}
      />
      <path
        d="M2676.97 589.679L2393.76 440.189V278.045L2676.97 589.679Z"
        stroke="currentColor"
        stroke-width={stroke}
      />
      <path
        d="M728.413 876.274L906.274 1597.03L30.9072 44.6309L728.413 876.274Z"
        stroke="currentColor"
        stroke-width={stroke}
      />
      <path
        d="M1623.6 1624.27L1329.1 1497.89L1719.71 1051.65L1623.6 1624.27Z"
        stroke="currentColor"
        stroke-width={stroke}
      />
      <path
        d="M1256.94 1497.89L962.438 1624.27L866.324 1051.65L1256.94 1497.89Z"
        stroke="currentColor"
        stroke-width={stroke}
      />
      <path
        d="M1515.79 1145L1299.46 1461L1327.54 1085.62L1515.79 1145ZM1749.48 802.571L1327.78 1070.02L1298.63 19.8771L1749.48 802.571Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width={stroke}
      />
      <path
        d="M1555.66 1086.77L1344.41 1075.13L1656.3 939.749L1555.66 1086.77Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width={stroke}
      />
      <path
        d="M1286.7 1460.99L1070.38 1145L1258.62 1085.62L1286.7 1460.99ZM1258.38 1070.02L836.693 802.574L1287.54 19.8771L1258.38 1070.02Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width={stroke}
      />
      <path
        d="M1241.76 1075.13L1030.52 1086.77L929.87 939.749L1241.76 1075.13Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width={stroke}
      />
    </svg>
  );
};

export default LogoFill;
