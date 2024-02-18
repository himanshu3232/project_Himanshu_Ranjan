export default function Notification() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M12 2C10.89 2 10 2.89 10 4V7H14V4C14 2.89 13.11 2 12 2ZM7.5 7.78C8.62 6.63 10.09 6 11.69 6C13.3 6 14.78 6.63 15.91 7.78C17.04 8.93 17.62 10.45 17.5 12V17L19 19H5L6.5 17V12C6.38 10.45 6.96 8.93 8.09 7.78ZM12 22C13.11 22 14 21.11 14 20H10C10 21.11 10.89 22 12 22Z"
          fill="white"
        />

        <circle cx="16" cy="5" r="7" fill="red" />
        <text
          x="16"
          y="5.5"
          text-anchor="middle"
          fill="white"
          font-size="10px"
          dy=".3em"
        >
          7
        </text>
      </svg>
    </div>
  );
}
