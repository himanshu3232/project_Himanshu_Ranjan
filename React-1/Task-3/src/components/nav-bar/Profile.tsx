export default function Profile() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 50" width="150">
        <rect x="0" y="10" width="30" height="30" fill="yellow" />
        <circle cx="10" cy="25" r="3" fill="black" />
        <circle cx="20" cy="25" r="3" fill="black" />
        <path
          d="M10 35 Q15 40 20 35"
          fill="none"
          stroke="black"
          stroke-width="1"
        />
        <rect x="40" y="10" width="10" height="10" fill="black" />
        <polygon points="35,20 45,20 40,25" fill="white" />
      </svg>
    </div>
  );
}
