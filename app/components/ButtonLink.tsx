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
      className={`text-rg inline-block leading-150 font-bold transition ease-out ${variation === "primary" ? "border-green bg-green hover:text-green border-2 px-400 py-150 text-purple-900 hover:bg-transparent" : "decoration-green hover:text-green text-white underline decoration-[0.1875rem] underline-offset-[0.5rem]"}`}
      {...props}
    >
      {children}
    </a>
  );
}
