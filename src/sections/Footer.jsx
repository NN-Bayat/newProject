import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <BsFacebook /> },
  { icon: <FaInstagram /> },
  { icon: <FaSquareXTwitter /> },
  { icon: <FaLinkedinIn /> },
];

const Footer = () => {
  return (
    <section className="w-full h-full flex items-center justify-center bg-[#f1f6f1] py-12 scroll-mt-22">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h5 className="font-medium text-gray-700">
          &copy; Copyright{" "}
          <a href="/" className="text-lg font-bold mr-1">
            eStartup
          </a>{" "}
          All Rights Reserved
        </h5>
        <div className="flex gap-5">
          {socials.map((item, i) => (
            <span
              key={i}
              className="size-10 flex items-center justify-center text-xl text-gray-500 border border-gray-400 rounded-full hover:text-[#71c55d] hover:border-[#71c55d] transition-all duration-200"
            >
              {item.icon}
            </span>
          ))}
        </div>
        <p>
          Designed by{" "}
          <a
            className="underline text-[#71c55d]"
            href="https://www.google.com/search?q=NN-Bayat&rlz=1C1GCEU_en&oq=nn&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyDQgBEC4YxwEY0QMYgAQyCAgCEEUYJxg7MgYIAxBFGDwyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYQdIBCDU4NDRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
          >
            NN-Bayat
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
