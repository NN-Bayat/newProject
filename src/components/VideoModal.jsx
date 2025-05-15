import { useEffect } from "react";

const VideoModal = ({ onClose }) => {
  useEffect(() => {
    const closeVideo = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeVideo);
    return () => window.removeEventListener("keydown", closeVideo);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-[#545353a3] bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="lg:w-[120vh] lg:h-[68vh] w-[92%] h-[50%] sm:h-[60%] md:h-[80%] bg-white rounded-xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-8 text-[#71c55d] hover:text-red-500 transition-all text-5xl z-10"
        >
          &times;
        </button>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8ibp0s5TsE4?si=J-FQslSEncPKQsIZ"
          title="YouTube video player"
          allowFullScreen
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
