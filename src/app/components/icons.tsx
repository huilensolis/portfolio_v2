export function Logo({ classes = "h-8 w-8" }: { classes?: any }) {
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
export function ArrowUpRight({ classes = defaultIconSize }: { classes?: any }) {
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
