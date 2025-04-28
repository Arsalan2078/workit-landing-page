export default function SkipLinks() {
  return (
    <div className="absolute top-auto left-[-999px] h-[1px] w-[1px] overflow-hidden bg-[black] text-white focus-within:static focus-within:h-full focus-within:w-full">
      <div className="mx-auto p-250 md:px-550 lg:px-1000 xl:container">
        <ul className="list-disc">
          <li>
            <a href="#top">Top</a>
          </li>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#section-selling-points">Section: Selling Points</a>
          </li>
          <li>
            <a href="#section-founder">Section: Founder</a>
          </li>
          <li>
            <a href="#bottom">Bottom</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
