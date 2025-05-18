import { BsCheck } from "react-icons/bs";
import SectionHeader from "../components/SectionHeader";
import { fchrCards } from "../constant";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="w-full h-full flex items-center justify-center bg-[#f1f6f1] py-10 scroll-mt-12"
    >
      <div className="px-3 sm:px-[10%] lg:px-[10%] xl:px-[150px] w-full">
        <div>
          <SectionHeader title={"Features"} subTitle={"Check Our Features"} />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-10 mt-16 mb-6">
          <div className="lg:w-1/2 md:text-start">
            <img
              src="/features.svg"
              alt="Features Image"
              className="sm:w-[85%]"
            />
          </div>
          <div className="lg:w-1/2 flex items-center">
            <div className="grid sm:grid-cols-2 px-[8%] sm:px-0 gap-6 w-full">
              {fchrCards.map((item, index) => (
                <div
                  key={index}
                  className="boxShadow group p-6 flex items-start justify-start gap-x-3 bg-white"
                >
                  <span className="size-8 flex items-center justify-center text-2xl rounded bg-[#f1f6f1] text-[#71c55d] group-hover:bg-[#71c55d] group-hover:text-white transition-all duration-200">
                    <BsCheck />
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
