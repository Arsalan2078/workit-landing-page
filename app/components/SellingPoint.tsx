interface SellingPointProps {
  counter: number;
  heading: string;
  paragraph: string;
}

export default function SellingPoint({
  counter,
  heading,
  paragraph,
}: SellingPointProps) {
  return (
    <div className="flex flex-col items-center gap-300 md:flex-row md:gap-700 xl:flex-col">
      <div className="font-fraunces flex aspect-square w-[3rem] min-w-[3rem] items-center justify-center rounded-full border-[0.0625rem] border-purple-900 text-center text-[1.25rem] leading-400">
        {counter}
      </div>

      <div className="flex flex-col items-center gap-200 text-center md:items-start md:gap-350 md:text-start xl:items-center xl:text-center">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
