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
        <div
          className="text-2xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text"
        >
          Services
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0 py-24">
          <div
            data-aos="fade-up"
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
            data-aos="fade-down"
            className="md:w-1/2 w-full space-y-6 text-white text-xl text-left"
          >
            <div>
              <div className="text-3xl md:text-5xl font-bold text-[#CEFF05]">
                Web Development
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
            Your website should be a powerful tool that engages visitors and drives results. We create websites that not only look great but also perform seamlessly, ensuring an exceptional user experience. Whether you need a simple business site or a complex platform, we make sure everything works in harmony to help you succeed.
            </p>
          </div>
        </div>
      </div>
      <ProjectList service="web-development" />
    </div>
  );
}
