"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Info = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <section ref={ref} className="py-4 lg:py-24">
        <div className="text-left text-white mb-20">
          <p
            data-aos="fade-down"
            className="text-[#CEFF05] font-medium  border-b border-[#CEFF05] inline-block"
          >
            VISION AND MISSION
          </p>
          <h2
            data-aos="fade-down"
            className="text-4xl lg:text-6xl font-bold mt-4"
          >
            Techimmortal’s
            <span className="text-[#CEFF05] pb-3"> Vision </span>
          </h2>
          <p data-aos="fade-up" className="text-gray-400 font-medium text-base md:text-lg">
            Our vision is to be a global leader in software development, delivering innovative and impactful solutions that transform businesses and lead progress.
          </p>
          <h2
            data-aos="fade-down"
            className="text-4xl lg:text-6xl font-bold mt-4"
          >
            Techimmortal’s
            <span className="text-[#CEFF05] pb-3"> Mission </span>
          </h2>
          <p data-aos="fade-up" className="text-gray-400 font-medium text-base md:text-lg">
            Our mission is to create high-quality, custom software products that precisely meet the unique needs of our clients. We are committed to excellence, innovation, and customer satisfaction. We make all our efforts to exceed expectations in everything.
          </p>
        </div>
      </section>

      <p data-aos="fade-down" className="text-[#CEFF05] font-medium  border-b border-[#CEFF05] inline-block">
        OUR VALUES
      </p>
      <h2
        data-aos="fade-down"
        className="text-4xl lg:text-6xl text-white font-bold mt-4"
      >
        Techimmortal’s
        <span className="text-[#CEFF05] pb-3"> Value System </span>
      </h2>
      <div className="p-4 feature-bg text-2xl text-[#CEFF05]" data-aos="fade-up">
        <div className="md:flex gap-6">
          <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
            Innovation
            <div data-aos="fade-up" className="text-gray-400 font-medium text-base md:text-lg">
              We embrace creativity and continually seek new ways to solve problems and improve our services.
            </div>
          </div>
          <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
            Excellence
            <div data-aos="fade-up" className="text-gray-400 font-medium text-base md:text-lg">
              We are committed to delivering the highest quality in all our products and services.
            </div>
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
            Integrity
            <div data-aos="fade-up" className="text-gray-400 font-medium text-base md:text-lg">
              We conduct our business with the utmost honesty and transparency, building trust with our clients and partners.
            </div>
          </div>
          <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
            Customer
            <div data-aos="fade-up" className="text-gray-400 font-medium text-base md:text-lg">
              Our clients are at the heart of everything we do. We listen to their needs and work tirelessly to exceed their expectations.
            </div>
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
            Collaboration
            <div data-aos="fade-up" className="text-gray-400 font-medium text-base md:text-lg">
              We believe in the power of teamwork and build a collaborative environment where everyone's ideas are valued.
            </div>
          </div>
          <div className="flex items-center basis-2/4 justify-normal mb-4 md:mb-0">
            Growth
            <div data-aos="fade-up" className="text-gray-400 font-medium text-base md:text-lg">
              We are dedicated to the continuous growth and development of our team, our clients, and our company.
            </div>
          </div>
        </div>
      </div>

      <section ref={ref} className="py-16 lg:py-24">
        <div className="text-left text-white mb-20">
          <p
            data-aos="fade-down"
            className="text-[#CEFF05] font-medium  border-b border-[#CEFF05] inline-block"
          >
            EXCELLENCE IN TECHNOLOGY
          </p>
          <h2
            data-aos="fade-down"
            className="text-4xl lg:text-6xl font-bold mt-4"
          >
            Pioneering
            <span className="text-[#CEFF05] pb-3"> Innovation </span>
            to
          </h2>
          <h2
            data-aos="fade-down"
            className="text-4xl lg:text-6xl font-bold md:mt-4"
          >
            Empower
            <span className="text-[#CEFF05]"> Businesses </span>
            across the globe.
          </h2>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 mt-12 md:mt-0 text-gray-300 ">
          <div className="text-left">
            {inView && (
              <CountUp
                className="text-5xl lg:text-8xl font-semibold"
                start={0}
                end={20}
                duration={1.5}
                useEasing={false}
              />
            )}
            <span className="text-4xl">+</span>
            <p className="pt-2 text-base md:text-lg">Team Members</p>
          </div>
          <div className="text-left">
            {inView && (
              <CountUp
                className="text-5xl lg:text-8xl font-semibold"
                start={0}
                end={5}
                duration={1.5}
                useEasing={false}
              />
            )}
            <p className="pt-2 text-base md:text-lg">
              Successful Projects Launched
            </p>
          </div>
          <div className="text-left">
            {inView && (
              <CountUp
                className="text-5xl lg:text-8xl font-semibold"
                start={0}
                end={6}
                duration={1.5}
                useEasing={false}
              />
            )}
            <span className="text-4xl">+</span>
            <p className="pt-2 text-base md:text-lg">
              Core Technologies Mastered
            </p>
          </div>
          <div className="text-left">
            {inView && (
              <CountUp
                className="text-5xl lg:text-8xl font-semibold"
                start={0}
                end={1}
                duration={1.5}
                useEasing={false}
              />
            )}
            <span className="text-4xl">+</span>
            <p className="pt-2 text-base md:text-lg">Years of Innovation</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
