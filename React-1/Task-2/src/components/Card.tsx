import Image from "./Image";
import Logo from "./Logo";
import LowerPart from "./LowerPart";

export default function Card() {
  return (
    <div className="card">
      <Image />
      <Logo />
      <LowerPart />
    </div>
  );
}
