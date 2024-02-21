import { useState } from "react";
import Image from "./Image";
import Logo from "./Logo";
import LowerPart from "./LowerPart";
import { LikesContext } from "./LikesContext";

export default function Card() {
  const [likesCount, setLikesCount] = useState<number>(0);
  return (
    <div className="card">
      <LikesContext.Provider value={{ likesCount, setLikesCount }}>
        <Image />
        <Logo />
        <LowerPart />
      </LikesContext.Provider>
    </div>
  );
}
