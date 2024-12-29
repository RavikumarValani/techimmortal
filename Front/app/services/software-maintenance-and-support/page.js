import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Software Maintenance And Support",
  description: "Tech Immortals | Software Maintenance And Support",
};

export default function SoftwareMaintenanceAndSupport() {
  return (
    <div>
      <div className="maintenance-header-box py-12 lg:py-24 relative">
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
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#CEFF05]">
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
