import SectionHeader from "../components/SectionHeader";
import { LuMapPin } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { contactInfo } from "../constant";
import { FiPhoneCall } from "react-icons/fi";

const contactIcons = [
  { icon: <LuMapPin /> },
  { icon: <FiPhoneCall /> },
  { icon: <TfiEmail /> },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full h-full flex items-center justify-center bg-white py-12 scroll-mt-22"
    >
      <div className="px-3 sm:px-[10%] lg:px-[10%] xl:px-[150px] w-full">
        <div>
          <SectionHeader
            title={"Contact"}
            subTitle={"Need Help? Contact Us"}
            popedWords={2}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 pt-16">
          <div className="md:w-1/2 flex flex-col gap-10">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-5 items-center group">
                <span className="size-12 flex items-center justify-center rounded-full bg-[#f0fcf0] text-[#71c55d] text-2xl group-hover:bg-[#71c55d] group-hover:text-white transition-all duration-300">
                  {contactIcons[index].icon}
                </span>
                <div>
                  <span className="text-lg font-bold capitalize tracking-wide">
                    {item.title}
                  </span>
                  <p className="text-gray-700 font-medium">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full px-[8%] sm:px-0">
            <form action="" className="flex flex-col gap-6">
              <div className="w-full flex flex-col sm:flex-row justify-between gap-7">
                <input
                  type="text"
                  className="text-lg font-medium border w-full border-gray-400 px-3 py-1.5 placeholder:font-normal focus:border-[#71c55d] focus:outline-none"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="text-lg font-medium border w-full border-gray-400 px-3 py-1.5 placeholder:font-normal focus:border-[#71c55d] focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <input
                type="text"
                className="text-lg font-medium border border-gray-400 px-3 py-1.5 placeholder:font-normal focus:border-[#71c55d] focus:outline-none"
                placeholder="Subject"
              />
              <textarea
                className="text-lg border border-gray-400 px-3 py-1.5 min-h-[42px] placeholder:font-normal focus:border-[#71c55d] focus:outline-none"
                placeholder="Message..."
                rows={5}
              />
              <button className="capitalize mx-auto bg-[#71c55d] hover:bg-[#80ce74] transition-all duration-200 text-white pb-3 pt-2.5 px-5 rounded-full text-lg font-semibold">
                send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
