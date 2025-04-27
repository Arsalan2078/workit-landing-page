import Image from "next/image";

interface LogoProps {
  logo?: "dark" | "light";
}

export default function Logo({ logo = "dark" }: LogoProps) {
  return (
    <>
      {logo === "dark" && (
        <Image
          src={"/logo-dark.svg"}
          alt="Logo"
          width={97}
          height={26}
          priority
        />
      )}

      {logo === "light" && (
        <Image
          src={"/logo-light.svg"}
          alt="Logo"
          width={97}
          height={26}
          priority
        />
      )}
    </>
  );
}
