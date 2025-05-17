import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const abuotList = [
  {
    icon: <IoIosCheckmarkCircleOutline />,
    disc: "We provide tailored strategies that deliver real business results.",
  },
  {
    icon: <IoIosCheckmarkCircleOutline />,
    disc: "Our team combines creativity and technology to drive innovation.",
  },
  {
    icon: <IoIosCheckmarkCircleOutline />,
    disc: "We are committed to helping you unlock new opportunities through smart, strategic thinking.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full h-full flex items-center justify-center bg-white"
    >
      <div className="px-3 sm:px-[10%] lg:px-[10%] xl:px-[150px] w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-[5%]">
          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-lg text-gray-400 font-extralight">
              Who We Are
            </h3>
            <h1 className="text-4xl font-bold">
              Unleashing Potential with Creative Strategy
            </h1>
            <p className="text-gray-800 text-lg font-light">
              We are a team of forward-thinking professionals dedicated to
              crafting innovative solutions that empower businesses to grow,
              adapt, and thrive in a fast-changing world.
            </p>
            <ul className="space-y-4 text-gray-800">
              {abuotList.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#71c55d] text-2xl">{item.icon}</span>
                  <p>{item.disc}</p>
                </li>
              ))}
            </ul>
            <button>
              <a
                href="/"
                className="flex items-center gap-3 py-3 px-6 rounded bg-[#71c55d] text-white font-semibold tracking-wide hover:bg-[#80ce74] group transition duration-300 ease-in-out"
              >
                Read More
                <FaArrowRightLong className="text-lg group-hover:translate-x-2 transition duration-300 ease-in-out" />
              </a>
            </button>
          </div>

          {/* ABOUT IMAGE */}
          <div className="lg:w-1/2 flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <img
                src="/about/about-1.jpg"
                alt="About Image"
                className="size-full object-cover rounded-xl"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="h-1/2">
                <img
                  src="/about/about-2.jpg"
                  alt="About Image"
                  className="size-full object-cover rounded-xl"
                />
              </div>
              <div className="h-1/2">
                <img
                  src="/about/about-3.jpg"
                  alt="About Image"
                  className="size-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
