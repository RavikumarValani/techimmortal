"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Info = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className=" px-6 md:px-0 py-16 lg:py-24">
      <div className="text-left text-white mb-20">
        <p
          data-aos="zoom-in"
          className="text-[#CEFF05] font-medium  border-b border-[#CEFF05] inline-block"
        >
          EXCELLENCE IN TECHNOLOGY
        </p>
        <h2
          data-aos="fade-right"
          className="text-4xl lg:text-6xl font-bold mt-4"
        >
          Embarking on
          <span className="text-[#CEFF05] pb-3"> Innovation </span>
          to
        </h2>
        <h2
          data-aos="fade-right"
          className="text-4xl lg:text-6xl font-bold mt-4"
        >
          Empower
          <span className="text-[#CEFF05]"> Businesses </span>
          Globally.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 mt-12 md:mt-0 text-gray-300 ">
        <div data-aos="zoom-in" className="text-left">
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
        <div data-aos="zoom-in" className="text-left">
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
        <div data-aos="zoom-in" className="text-left">
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
        <div data-aos="zoom-in" className="text-left">
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
  );
};

export default Info;
