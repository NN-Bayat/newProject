import { useState } from "react";
import { accordionItems } from "../constant";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  const [openDisc, setOpenDisc] = useState(0);

  const toggle = (index) => {
    setOpenDisc((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="w-full h-full flex items-center justify-center bg-[#f1f6f1] py-10 scroll-mt-22"
    >
      <div className="px-3 sm:px-[10%] lg:px-[10%] xl:px-[150px] w-full">
        <div className="flex py-5 gap-10 flex-col md:flex-row">
          <div className="md:w-1/2 xl:px-16 text-center md:text-start space-y-5">
            <h1 className="text-4xl">
              Frequently Asked <span className="font-bold">Questions</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              eligendi nam dolorum incidunt quia autem?
            </p>
          </div>
          <ul className="w-full flex flex-col gap-5">
            {accordionItems.map((item, index) => (
              <li
                key={index}
                className="w-full boxShadow rounded transition-all duration-300 ease-in bg-white"
              >
                <button
                  className={`w-full flex justify-between items-center px-3 sm:px-5 py-3 cursor-pointer`}
                  onClick={() => toggle(index)}
                >
                  <span className="text-lg font-bold text-[#71c55d]">
                    {index + 1}.{" "}
                    <span className="text-lg font-medium text-gray-800 hover:text-[#71c55d] transition-colors duration-200">
                      {item.question}
                    </span>
                  </span>
                  <IoIosArrowDown
                    className={`transform ml-3 hover:text-[#71c55d] transition-all duration-300 text-xl ${
                      openDisc === index ? "" : "-rotate-90"
                    }`}
                  />
                </button>

                {openDisc === index && (
                  <div className="px-5 pb-3 pt-2 border-t md:border-0 transition-all duration-300 text-[15px] font-semibold text-gray-700">
                    {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
