import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Software Integration And Migration",
  description: "Tech Immortals | Software Integration And Migration",
};

export default function SoftwareIntegrationAndMigration() {
  return (
    <div>
      <div className="integration-header-box py-16 lg:py-28 relative">
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
              src="/product_iteration.svg"
              alt="Software Integration And Migration"
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
                Software Integration And Migration
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              Integrating and upgrading your software shouldn’t interrupt your business. We specialize in seamless integration and migration, ensuring your tools connect smoothly, workflows are streamlined, and technology is modernized. Whether adopting new platforms, moving to the cloud, or merging systems, we ensure everything functions seamlessly and your data remains secure.
            </p>
          </div>
        </div>
      </div>
      <ProjectList service="software-integration-and-migration" />
    </div>
  );
}
