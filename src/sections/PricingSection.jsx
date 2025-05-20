import SectionHeader from "../components/SectionHeader";
import { BsRocket } from "react-icons/bs";
import { SlPaperPlane } from "react-icons/sl";
import { LiaPlaneSolid } from "react-icons/lia";
import { RxCube } from "react-icons/rx";
import { priceItems } from "../constant";

const priceIcon = [
  { icon: <RxCube /> },
  { icon: <SlPaperPlane /> },
  { icon: <LiaPlaneSolid /> },
  { icon: <BsRocket /> },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="w-full h-full flex items-center justify-center bg-white pt-15 scroll-mt-18"
    >
      <div className="px-3 sm:px-[10%] lg:px-[10%] xl:px-[150px] w-full">
        <div>
          <SectionHeader title={"Pricing"} subTitle={"Check Our Pricing"} />
        </div>
        <div>
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 px-[8%] sm:px-0 gap-6 py-16">
            {priceItems.map((item, index) => (
              <div
                key={index}
                className="boxShadow relative overflow-hidden flex items-center justify-center flex-col gap-7 py-12 rounded lg:hover:scale-110 hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-xl font-bold" style={{ color: item.color }}>
                  {item.title}
                </h4>
                <div>
                  <span className="relative text-center text-4xl font-semibold">
                    <span className="font-semibold text-2xl absolute -top-1 -left-4">
                      $
                    </span>
                    {item.price}
                  </span>
                  <span className="text-gray-500 text-lg">/ mo</span>
                </div>
                <div
                  className="text-5xl"
                  style={{ color: item.color }}
                  aria-label={`Select the ${item.title}`}
                >
                  {priceIcon[index].icon}
                </div>
                <ul className="flex flex-col text-center gap-2 font-semibold text-gray-600">
                  {item.features.map((featItem, i) => (
                    <li
                      key={i}
                      className={
                        item.availableFeatures[i]
                          ? ""
                          : "text-gray-400 line-through"
                      }
                    >
                      {featItem}
                    </li>
                  ))}
                </ul>
                <button>
                  <a
                    className="border border-[#71c55d] rounded-full pt-2 pb-2.5 px-8 text-[#71c55d] font-semibold text-lg hover:bg-[#71c55d] hover:text-white transition-all duration-300"
                    href="/"
                  >
                    {item.buttonText}
                  </a>
                </button>

                {item.highlighted && (
                  <div className="capitalize absolute top-5 -right-10 rotate-45 h-6 w-36 text-[15px] font-semibold bg-[#71c55d] text-white/80 flex justify-center">
                    featured
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
