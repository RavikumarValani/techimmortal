import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Custom Software Development",
  description: "Tech Immortals | Custom Software Development",
};

export default function CustomSoftwareDevelopment() {
  return (
    <div>
      <div className="custom-header-box py-16 lg:py-28 relative">
        <div className="header-overlay"></div>
        <h2
          data-aos="flip-left"
          className="text-2xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text"
        >
          Services
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0 py-16 lg:py-24">
          <div
            data-aos="fade-right"
            className="md:w-1/2 w-full items-center flex flex-col"
          >
            <Image
              src="/programming.svg"
              alt="Custom Software Development"
              width={600}
              height={400}
            />
          </div>
          <div
            data-aos="fade-left"
            className="md:w-1/2 w-full space-y-6 text-white text-xl text-left"
          >
            <div>
              <div className="text-3xl md:text-5xl font-semibold text-[#CEFF05]">
                Custom Software Development
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              Every business has unique challenges, and that's where custom
              software development comes in. We create tailored solutions that
              fit your exact needs, helping you streamline operations, boost
              efficiency, and grow faster. Whether it's a specialized tool or a
              full-fledged system, we craft software that works just for you.
            </p>
          </div>
        </div>
        <ProjectList service="custom-software-development" />
      </div>
    </div>
  );
}
