import Image from "next/image";
import Logo from "../public/FIFA_WorldCup_logo.svg.png";

const LogoComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Image src={Logo} alt="" width={800} />
    </div>
  );
};

export default LogoComponent;
