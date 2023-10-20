export function Logo({ classes = "h-8 w-8" }: { classes?: string }) {
  return (
    <svg
      className={classes}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_235_970)">
        <path
          clipRule="evenodd"
          d="M0 100L7.62939e-06 0H100H200V100C144.78 100 100.013 55.2417 100 0.0239258C99.987 55.2417 55.2204 100 0 100ZM100 200C100 144.771 144.772 100 200 100V200H100ZM100 200C100 144.771 55.2285 100 0 100V200H100Z"
          fill="url(#paint0_linear_235_970)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_235_970"
          x1="20.5"
          y1="16"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACAAFF" /> <stop offset="1" stopColor="#C0E8FF" />{" "}
        </linearGradient>
        <clipPath id="clip0_235_970">
          <rect width="200" height="200" fill="white" />{" "}
        </clipPath>
      </defs>
    </svg>
  );
}

const defaultIconSize = "h-5 w-5 transition-all delay-75";
export function ArrowUpRight({ classes = "h-8 w-8" }: { classes?: string }) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
export function ImageIcon({ classes }: { classes: string }) {
  return (
    <svg
      className={classes}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
    </svg>
  );
}
