"use client";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const Info = () => {

  const serverHost = process.env.SERVER_HOST;
  const [stats, setStats] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(`${serverHost}/stats`);
      setStats(response.data.stats);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <section ref={ref} className="py-12 lg:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 relative">
            <p
              data-aos="fade-down"
              className="text-[#CEFF05] font-medium  border-b border-[#CEFF05] inline-block"
            >
              VISION AND MISSION
            </p>
          </div>
          <div
            className="grid md:grid-cols-2 gap-8 relative"
            data-aos="fade-up"
          >
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-emerald-800 to-lime-800 rounded-lg blur opacity-25 group-hover:opacity-30 transition duration-1000" />
              <div className="rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <div className="relative h-full bg-slate-900 border border-slate-800 rounded-lg p-8 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-lime-500/10">
                    <i className="fas fa-eye text-[#CEFF05] text-xl"></i>
                  </div>
                  <h2 className="text-white text-xl md:text-3xl font-semibold">
                    Techimmortal's{" "}
                    <span className="text-[#CEFF05]">Vision</span>
                  </h2>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  Our vision is to redefine software development globally,
                  creating innovative solutions that empower businesses and
                  drive meaningful progress.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-emerald-800 to-lime-800 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <div className="relative h-full bg-slate-900 border border-slate-800 rounded-lg p-8 transition-all duration-300 ">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-emerald-500/10">
                    <i className="fas fa-bullseye text-[#CEFF05] text-xl"></i>
                  </div>
                  <h2 className="text-white text-xl md:text-3xl font-semibold">
                    Techimmortal's{" "}
                    <span className="text-[#CEFF05]">Mission</span>
                  </h2>
                </div>
                <p className="text-[#ddd] leading-relaxed">
                  Our mission is to craft tailor-made, high-quality software
                  solutions that perfectly align with our clients' unique needs.
                  Driven by excellence, innovation, and a passion for customer
                  satisfaction, we go above and beyond to deliver beyond
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-12 lg:py-24">
        <div className="text-center mb-12">
          <p
            data-aos="fade-down"
            className="text-[#CEFF05] font-medium  border-b border-[#CEFF05] inline-block"
          >
            OUR VALUES
          </p>
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl lg:text-6xl text-white font-bold my-4"
          >
            Techimmortal’s
            <span className="text-[#CEFF05] pb-3"> Value System </span>
          </h2>
        </div>

        <div className="container mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-[#CEFF05] border border-[#f2f2f2] flex">
              <div>
                <i className="fas fa-lightbulb text-[#CEFF05] text-xl mt-1"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">
                  Innovation
                </h2>
                <p className="text-[#ddd] font-normal text-sm md:text-base">
                  We foster creativity and constantly explore innovative
                  approaches to solving challenges and enhancing our services.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-[#CEFF05] border border-[#f2f2f2] flex">
              <div>
                <i className="fas fa-award text-[#CEFF05] text-xl mt-1"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">
                  Excellence
                </h2>
                <p className="text-[#ddd] font-normal text-sm md:text-base">
                  We are dedicated to delivering unparalleled quality in every
                  product and service we provide.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-[#CEFF05] border border-[#f2f2f2] flex">
              <div>
                <i className="fas fa-shield-alt text-[#CEFF05] text-xl mt-1"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">
                  Integrity
                </h2>
                <p className="text-[#ddd] font-normal text-sm md:text-base">
                  We operate with unwavering honesty and transparency, fostering
                  trust with our clients and partners at every step.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-[#CEFF05] border border-[#f2f2f2] flex">
              <div>
                <i className="fas fa-user text-[#CEFF05] text-xl mt-1"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">
                  Customer
                </h2>
                <p className="text-[#ddd] font-normal text-sm md:text-base">
                  Our clients are our priority. We actively listen to their
                  needs and go the extra mile to surpass their expectations.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-[#CEFF05] border border-[#f2f2f2] flex">
              <div>
                <i className="fas fa-handshake text-[#CEFF05] text-xl mt-1"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">
                  Collaboration
                </h2>
                <p className="text-[#ddd] font-normal text-sm md:text-base">
                  We thrive on teamwork, fostering a collaborative environment
                  where every idea is valued and contributes to our success.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-[#CEFF05] border border-[#f2f2f2] flex">
              <div>
                <i className="fas fa-chart-line text-[#CEFF05] text-xl mt-1"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">
                  Growth
                </h2>
                <p className="text-[#ddd] font-normal text-sm md:text-base">
                  We are committed to fostering continuous growth and
                  development for our team, our clients, and our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-12 lg:py-24">
        <div className="text-left text-white mb-12">
          <p
            data-aos="fade-down"
            className="text-[#CEFF05] font-medium  border-b border-[#CEFF05] inline-block"
          >
            EXCELLENCE IN TECHNOLOGY
          </p>
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl lg:text-6xl font-bold mt-4"
          >
            Pioneering
            <span className="text-[#CEFF05] pb-3"> Innovation </span>
            to
          </h2>
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl lg:text-6xl font-bold md:mt-4"
          >
            Empower
            <span className="text-[#CEFF05]"> Businesses </span>
            across the globe.
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 text-gray-300 "
        >
          <div className="text-left">
            {inView && (
              <CountUp
                className="text-5xl lg:text-8xl font-semibold"
                start={0}
                end={stats.member_count}
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
                end={stats.project_count}
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
