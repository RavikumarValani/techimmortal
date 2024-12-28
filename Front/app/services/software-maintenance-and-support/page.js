import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Software Maintenance And Support",
  description: "Tech Immortals | Software Maintenance And Support",
};

export default function SoftwareMaintenanceAndSupport() {
  return (
    <div>
      <div className="maintenance-header-box py-16 lg:py-28 relative">
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
              src="/maintenance.svg"
              alt="Software Maintenance And Support"
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
                Software Maintenance And Support
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              Your software should grow with your business. Our maintenance and support services keep your systems updated, secure, and running smoothly. From bug fixes to performance enhancements, we ensure your software operates flawlessly.
            </p>
          </div>
        </div>
      </div>
      <ProjectList service="software-maintenance-and-support" />
    </div>
  );
}
