const SectionHeader = ({ title, subTitle, popedWords = 1 }) => {
  const words = subTitle.split(" ");
  const lastWords = words.slice(-popedWords).join(" ");
  const restOfSubtitle = words.slice(0, -popedWords).join(" ");

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h4 className="uppercase text-[13px] tracking-wide font-bold rounded-full px-4 pt-1.5 pb-1 bg-[#d6f5cf9c] text-[#71c55d]">
        {title}
      </h4>
      <h1 className="capitalize text-4xl font-semibold text-center">
        {restOfSubtitle} <span className="text-[#71c55d]">{lastWords}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
