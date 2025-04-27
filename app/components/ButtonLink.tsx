import { ReactNode } from "react";

interface ButtonLinkProps {
  variation?: "primary" | "secondary";
  children: ReactNode;
}

export default function ButtonLink({
  variation = "primary",
  children,
  ...props
}: ButtonLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`text-rg inline-block leading-150 font-bold transition ease-out ${variation === "primary" ? "border-green bg-green hover:text-green border-2 px-400 py-150 text-purple-900 hover:bg-transparent" : "border-green hover:text-green border-b-[0.1875rem] text-white"}`}
      {...props}
    >
      {children}
    </a>
  );
}
