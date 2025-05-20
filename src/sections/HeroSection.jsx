import { BsEasel } from "react-icons/bs";
import { LuCommand, LuMapPin } from "react-icons/lu";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { SlDiamond } from "react-icons/sl";
import { heroBoxesItems } from "../constant";
import { useState } from "react";
import VideoModal from "../components/VideoModal";

const heroBoxesIcons = [
  { icon: <BsEasel /> },
  { icon: <SlDiamond /> },
  { icon: <LuMapPin /> },
  { icon: <LuCommand /> },
];

const HeroSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section
      id="home"
      className="w-full h-full flex items-center justify-center bg-[#f1f6f1]"
    >
      <div className="px-3 sm:px-[10%] lg:px-[10%] xl:px-[150px]">
        <div className="flex flex-col gap-y-20 lg:pt-50 pt-40">
          <div className="flex w-full flex-col-reverse lg:flex-row">
            {/* Hero Text Content */}
            <div className="lg:w-1/2 pt-10 lg:pt-20">
              <h1 className="text-5xl font-semibold tracking-wider">
                <span className="text-[#71c55d]">e</span>Startup
              </h1>
              <p className="text-[#908f8f] text-[16px] mt-5 leading-relaxed">
                Empower your business with innovative digital solutions. We help
                startups turn ideas into reality with cutting-edge design and
                smart strategies.
              </p>
              <div className="flex flex-wrap-reverse md:flex-nowrap justify-center md:justify-start gap-7 mt-7">
                <button className="bg-[#71c55d] cursor-pointer text-white px-10 py-3 font-semibold tracking-wider capitalize rounded-full hover:bg-[#80ce74] transition-all duration-300 ease-in-out whitespace-nowrap w-fit">
                  Get Started
                </button>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="text-[#71c55d] cursor-pointer capitalize flex items-center gap-1.5 whitespace-nowrap w-fit"
                  aria-label="Watch video"
                >
                  <MdOutlinePlayCircleOutline className="w-10 h-10" />
                  <span className="font-bold tracking-wide">Watch Video</span>
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 px-5 lg:px-0">
              <img
                src="/hero-img.png"
                alt="Illustration showing a startup team collaborating"
                aria-hidden="true"
                className="sm:w-[90%] mx-auto"
              />
            </div>
          </div>

          {/* Hero Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {heroBoxesItems.map((item, index) => (
              <div
                key={index}
                className="bg-white py-14 boxShadow rounded-[10px] flex items-center justify-center flex-col gap-5 hover:bg-[#71c55d] transition-all duration-300 ease-in-out group"
              >
                <div className="text-5xl text-[#71c55d] group-hover:text-white transition duration-300">
                  {heroBoxesIcons[index].icon}
                </div>
                <p className="text-2xl font-bold text-gray-600 group-hover:text-white transition duration-300">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {showVideoModal && (
            <VideoModal onClose={() => setShowVideoModal(false)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
