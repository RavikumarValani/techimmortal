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
              src="/maintenance.svg"
              alt="Software Maintenance And Support"
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
                Software Maintenance And Support
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              Your software should evolve with your business. Our maintenance
              and support services ensure your systems stay updated, secure, and
              efficient. From bug fixes to performance optimization, we’re here
              to keep your software running like clockwork.
            </p>
          </div>
        </div>
      </div>
      <ProjectList service="software-maintenance-and-support" />
    </div>
  );
}
