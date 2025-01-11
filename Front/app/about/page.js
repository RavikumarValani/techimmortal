import Image from "next/image";
import Info from "./info";
import Link from "next/link";
import LogoSlider from "../components/LogoSlider";

export const metadata = {
  title: "Tech Immortals | About",
  description: "Tech Immortals | About",
};

const About = () => {
  return (
    <div>
      <div className="about-header-box py-12 lg:py-24 relative">
        <div className="header-overlay"></div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text">
          About Us
        </h2>
      </div>
      <div className="container mx-auto px-6">
        <section className="flex flex-col lg:flex-row items-center gap-8 py-16 lg:py-24">
          <div className="lg:w-1/2 w-full" data-aos="fade-down">
            <Image
              src="/team_page.svg"
              alt="About Us"
              width={600}
              height={400}
            />
          </div>
          <div className="lg:w-1/2 w-full space-y-6 text-white text-xl">
            <div>
              <div
                data-aos="zoom-in"
                className="pb-2 uppercase text-sm md:text-base font-medium text-[#CEFF05] border-b border-[#CEFF05] inline-block mb-3"
              >
                About Company
              </div>
              <div
                data-aos="fade-up"
                className="md:text-5xl text-3xl font-bold text-gray-300"
              >
                Turning Ideas Into Impactful Realities
              </div>
            </div>
            <p
              data-aos="fade-up"
              className="text-gray-400 font-medium text-base md:text-lg"
            >
              At TechImmortals, we combine innovation and technology to create
              solutions that drive success. With a focus on quality and client
              satisfaction, we turn every project into a step toward excellence.
              Discover how we can elevate your business.
            </p>
            <div className="p-4 feature-bg" data-aos="fade-up">
              <div className="md:flex gap-6">
                <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
                  <i className="fal fa-users text-[#CEFF05] mr-5 text-3xl w-8"></i>
                  Dedicated Team
                </div>
                <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
                  <i className="fal fa-cogs text-[#CEFF05] mr-5 text-3xl w-8"></i>
                  Tailored Solutions
                </div>
              </div>
              <div className="md:flex gap-6 mt-7">
                <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
                  <i className="fal fa-headset text-[#CEFF05] mr-5 text-3xl w-8"></i>
                  24/7 Support
                </div>
                <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
                  <i className="fal fa-award text-[#CEFF05] mr-5 text-3xl w-8"></i>
                  Platform Expertise
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div
                data-aos="zoom-up"
                className="bg-[#CEFF05] text-black p-3 rounded-full"
              >
                <i className="fas fa-phone m-1 rotate-90"></i>
              </div>
              <div data-aos="fade-up">
                <span className="block text-base text-gray-400 font-bold">
                  Call Us Anytime
                </span>
                <div className="text-xl font-semibold">
                  <Link href="tel:+918700364145">+91 870 036 4145</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Info />
        <LogoSlider />
      </div>
    </div>
  );
};

export default About;
