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
        <div
          className="text-2xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text"
        >
          Services
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0 py-16 lg:py-24">
          <div
            data-aos="fade-up"
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
            data-aos="fade-down"
            className="md:w-1/2 w-full space-y-6 text-white text-xl text-left"
          >
            <div>
              <div className="text-3xl md:text-5xl font-semibold text-[#CEFF05]">
                Custom Software Development
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              Every business faces unique challenges, and custom software development is the key to overcoming them. We build tailored solutions to streamline operations, increase efficiency, and accelerate growth. From specialized tools to complete systems, we create software designed for your needs.
            </p>
          </div>
        </div>
        <ProjectList service="custom-software-development" />
      </div>
    </div>
  );
}
