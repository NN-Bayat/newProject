import { FaAngleDown } from "react-icons/fa";
import { NavItems } from "../constant";

const Navbar = () => {
  return (
    <section className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="px-3 sm:px-[10%] lg:px-[10%] xl:px-[150px]">
        <div className="flex items-center justify-between py-3 md:py-5 lg:py-7">
          <a href="/" className="text-3xl font-semibold">
            <span className="text-[#71c55d]">e</span>Startup
          </a>

          <div className="hidden lg:block">
            <nav>
              <ul className="flex gap-8">
                {NavItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group text-gray-700 hover:text-[#71c55d] text-lg transition"
                  >
                    <a
                      href={item.link}
                      className="flex items-center cursor-pointer"
                    >
                      {item.title}
                      {item.drpdnItems && (
                        <span className="ml-1">
                          <FaAngleDown />
                        </span>
                      )}
                    </a>

                    {item.drpdnItems && (
                      <ul className="absolute top-5 -left-1 mt-2 hidden group-hover:block bg-white rounded-md shadow-xl w-44 z-50">
                        {item.drpdnItems.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="relative group/sub py-1"
                          >
                            <a
                              href={subItem.link}
                              className="block px-5 py-2 text-[16px] text-gray-700 hover:text-[#71c55d] whitespace-nowrap"
                            >
                              {subItem.title}
                              {subItem.drpdnItems1 && (
                                <span className="inline-block ml-2">
                                  <FaAngleDown className="inline text-md" />
                                </span>
                              )}
                            </a>

                            {/* Deep Dropdown */}
                            {subItem.drpdnItems1 && (
                              <ul className="absolute top-0 right-[98%] mt-0 ml-1 hidden group-hover/sub:block bg-white rounded-md shadow-xl w-44 z-50">
                                {subItem.drpdnItems1.map(
                                  (deepItem, deepIndex) => (
                                    <li key={deepIndex} className="py-1">
                                      <a
                                        href=""
                                        className="block px-5 py-1.5 text-[16px] text-gray-700 hover:text-[#71c55d] whitespace-nowrap"
                                      >
                                        {deepItem.title}
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
