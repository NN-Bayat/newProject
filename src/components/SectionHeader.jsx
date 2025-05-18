const SectionHeader = ({ title, subTitle }) => {
  const words = subTitle.split(" ");
  const lastWord = words.pop();
  const restOfSubtitle = words.join(" ");

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h4 className="uppercase text-[13px] tracking-wide font-bold rounded-full px-4 pt-1.5 pb-1 bg-[#d6f5cf9c] text-[#71c55d]">
        {title}
      </h4>
      <h1 className="capitalize text-4xl font-semibold text-center">
        {restOfSubtitle} <span className="text-[#71c55d]">{lastWord}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
