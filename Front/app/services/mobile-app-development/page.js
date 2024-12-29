import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Mobile App Development",
  description: "Tech Immortals | Mobile App Development",
};

export default function MobileAppDevelopment() {
  return (
    <div>
      <div className="app-header-box py-12 lg:py-24 relative">
        <div className="header-overlay"></div>
        <div
          className="text-2xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text"
        >
          Services
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-24">
          <div
            data-aos="fade-up"
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
            data-aos="fade-down"
            className="md:w-1/2 w-full space-y-6 text-white text-xl text-left mt-8 lg:mt-0"
          >
            <div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#CEFF05]">
                Mobile App Development
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              In today’s mobile-first world, a high-performing app is crucial. We create intuitive, feature-rich mobile applications that ensure seamless experiences on both iOS and Android. Whether it’s a business app, social platform, or e-commerce solution, we’ve got you covered.
            </p>
          </div>
        </div>
      </div>
      <ProjectList service="mobile-app-development" />
    </div>
  );
}
