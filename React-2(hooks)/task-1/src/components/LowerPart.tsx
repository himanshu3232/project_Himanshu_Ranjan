import { useContext } from "react";
import { LikesContext } from "./LikesContext";

export default function LowerPart() {
  const context = useContext(LikesContext);
  return (
    <div>
      <p>{context?.likesCount} likes</p>
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
