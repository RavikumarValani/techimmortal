import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Mobile App Development",
  description: "Tech Immortals | Mobile App Development",
};

export default function MobileAppDevelopment() {
  return (
    <div>
      <div className="app-header-box py-16 lg:py-28 relative">
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
              src="/mobile.svg"
              alt="Mobile App Development"
              width={300}
              height={300}
            />
          </div>
          <div
            data-aos="fade-left"
            className="md:w-1/2 w-full space-y-6 text-white text-xl text-left mt-8 lg:mt-0"
          >
            <div>
              <div className="text-3xl md:text-5xl font-bold text-[#CEFF05]">
                Mobile App Development
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              In today’s mobile-first world, having a high-performing app is
              essential. We build intuitive, feature-rich mobile applications
              that deliver seamless experiences across iOS and Android. Whether
              you need a business app, a social platform, or an e-commerce app,
              we've got you covered.
            </p>
          </div>
        </div>
      </div>
      <ProjectList service="mobile-app-development" />
    </div>
  );
}
