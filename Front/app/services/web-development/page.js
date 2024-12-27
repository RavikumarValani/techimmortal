import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Web Development",
  description: "Tech Immortals | Web Development",
};

export default function WebDevelopment() {
  return (
    <div>
      <div className="web-header-box py-16 lg:py-28 relative">
        <div className="header-overlay"></div>
        <h2
          data-aos="flip-left"
          className="text-2xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text"
        >
          Services
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0 py-24">
          <div
            data-aos="fade-right"
            className="md:w-1/2 w-full items-center flex flex-col"
          >
            <Image
              src="/web_development.svg"
              alt="Web Development"
              width={500}
              height={400}
            />
          </div>
          <div
            data-aos="fade-left"
            className="md:w-1/2 w-full space-y-6 text-white text-xl text-left"
          >
            <div>
              <div className="text-3xl md:text-5xl font-bold text-[#CEFF05]">
                Web Development
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              Your website should do more than just exist—it should inspire,
              inform, and convert visitors into loyal customers. We design and
              develop websites that are not only visually captivating but also
              optimized for performance and usability. From sleek business sites
              to robust online platforms, we ensure every element works together
              to achieve your goals.
            </p>
          </div>
        </div>
      </div>
      <ProjectList service="web-development" />
    </div>
  );
}
