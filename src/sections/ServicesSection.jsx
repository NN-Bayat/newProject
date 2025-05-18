import SectionHeader from "../components/SectionHeader";
import { srvCards } from "../constant";
import { MdOutlineDateRange } from "react-icons/md";
import { BsChatSquareText, BsEasel } from "react-icons/bs";
import { PiBroadcastFill } from "react-icons/pi";
import { TbActivityHeartbeat, TbTopologyRing3 } from "react-icons/tb";

const cardIcons = [
  {
    icon: <TbActivityHeartbeat />,
  },
  {
    icon: <PiBroadcastFill />,
  },
  {
    icon: <BsEasel />,
  },
  {
    icon: <TbTopologyRing3 />,
  },
  {
    icon: <MdOutlineDateRange />,
  },
  {
    icon: <BsChatSquareText />,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full h-full flex items-center justify-center bg-white py-20 scroll-mt-12"
    >
      <div className="px-3 sm:px-[10%] lg:px-[10%] xl:px-[150px] w-full">
        <div>
          <SectionHeader title={"services"} subTitle={"Check Our Services"} />
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16 mb-4">
          {srvCards.map((card, index) => (
            <a href="/"
              key={index}
              className="group flex flex-col gap-5 rounded-2xl boxShadow px-6 py-10 xl:py-16 hover:-translate-y-4 border-b-5 border-transparent hover:border-[#71c55d] transition-all duration-300 bg-white"
            >
              <span className="bg-[#71c55d] size-15 flex items-center justify-center rounded-full text-3xl text-white">
                {cardIcons[index]?.icon}
              </span>
              <h3 className="text-xl font-semibold capitalize group-hover:text-[#71c55d] transition-all duration-200">
                {card.title}
              </h3>
              <p className="text-gray-800 text-[15px]">{card.disc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
