import { useSelector } from "react-redux";

export default function LowerPart() {
  const likes = useSelector((store: any) => store.card.likes);
  return (
    <div>
      <p>{likes} likes</p>
      <div className="watch-hrs">
        <p style={{ color: "green" }}>97% Match</p>
        <p>2h 15min</p>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <p>Horror</p>
        <p>Adventure</p>
        <p>Mystery</p>
      </div>
    </div>
  );
}
