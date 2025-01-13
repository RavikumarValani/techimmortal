"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import { Dialog } from "@headlessui/react";
import LogoSlider from "./components/LogoSlider";
import WorkingSteps from "./components/WorkingSteps";

export default function Home() {
  const [activeQue, setActiveQue] = useState(null);
  const [open, setOpen] = useState(false);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef({});

  const toggleAccordion = (index) => {
    setActiveQue(activeQue === index ? null : index);
  };

  const handleOpen = () => setOpen(!open);

  const questionData = useMemo(
    () => [
      {
        id: 1,
        question: "What services does TechImmortals offer?",
        answer:
          "We specialize in delivering end-to-end design solutions, including web design, mobile app development, and branding services. Our mission is to elevate your digital presence with creative, user-focused designs.",
      },
      {
        id: 2,
        question: "How long does a typical project take?",
        answer:
          "Project duration depends on its complexity and scope. Web design typically takes 4-6 weeks, while mobile app development and branding may require more time. We collaborate with clients to set clear, realistic timelines.",
      },
      {
        id: 3,
        question: "What is the process for starting a project?",
        answer:
          "Our process starts with an initial consultation to understand your goals. We then create a project plan, followed by design and development phases. Throughout, we provide regular updates and feedback sessions to ensure the final product aligns with your vision.",
      },
      {
        id: 4,
        question: "Do you offer ongoing support after a project is completed?",
        answer:
          "Yes, we offer ongoing support and maintenance to keep your project running smoothly. Our services include troubleshooting, updates, and any additional enhancements you may need.",
      },
      {
        id: 5,
        question: "Can I request changes to the design during the project?",
        answer:
          "Absolutely! We welcome client feedback and revisions throughout the project to ensure the final design reflects your vision. Open communication ensures we deliver a product that meets your needs.",
      },
    ],
    []
  );

  useEffect(() => {
    const newHeights = {};
    questionData.forEach((item) => {
      if (contentRefs.current[item.id]) {
        newHeights[item.id] = contentRefs.current[item.id].scrollHeight;
      }
    });
    // console.log(newHeights)
    setHeights(newHeights);
  }, [questionData]);

  return (
    <div>
      <section className="flex h-[90vh] md:h-[85vh] justify-center items-center text-center flex-col hero-bg">
        <div
          data-aos="zoom-in"
          className="text-3xl md:text-4xl lg:text-7xl font-bold leading-snug text-gray-300"
        >
          <div className="lg:pb-3">
            Your <span className="text-[#CEFF05]">VISION</span>,
          </div>
          <div>
            Our <span className="text-[#CEFF05]">TECHNOLOGY</span>
          </div>
        </div>
        <p
          className="mt-4 text-base md:text-xl text-gray-300 px-6"
          data-aos="zoom-in"
        >
          Crafting responsive designs that bring your vision to life on all
          platforms
        </p>
        <button
          onClick={handleOpen}
          data-aos="flip-left"
          className="mt-6 px-4 py-2 md:px-6 md:py-5 bg-[#CEFF05] text-black rounded-full hover:bg-black hover:text-white hover:scale-105 text-xs md:text-sm font-bold"
        >
          REQUEST A QUOTE
        </button>
      </section>

      <div className="container mx-auto px-6">
        <section className="flex flex-col lg:flex-row items-center gap-8 py-12 lg:py-24">
          <div
            className="lg:w-1/2 w-full flex justify-center md:inline-block"
            data-aos="fade-down"
          >
            <Image
              src="/team_page.svg"
              alt="About Us"
              className="max-w-full h-auto w-fit"
              width={500}
              height={400}
            />
          </div>
          <div className="lg:w-1/2 w-full space-y-6 text-white text-xl">
            <div>
              <div
                data-aos="zoom-in"
                className="pb-2 uppercase text-sm md:text-base font-medium text-[#CEFF05] border-b border-[#CEFF05] inline-block mb-4"
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
              We deliver tailored IT solutions to drive growth, efficiency, and
              security. From software development to digital optimization, we
              make your goals a reality. Partner with us to transform your
              technology into a competitive advantage.
            </p>
            <div className="p-4 feature-bg" data-aos="fade-up">
              <div className="md:flex gap-6">
                <div className="flex items-center basis-2/4 justify-normal mb-5 md:mb-0  text-lg md:text-xl">
                  <i className="fal fa-users text-[#CEFF05] mr-4 text-xl  md:text-3xl "></i>
                  Dedicated Team
                </div>
                <div className="flex items-center basis-2/4 justify-normal mb-5 md:mb-0  text-lg md:text-xl">
                  <i className="fal fa-cogs text-[#CEFF05] mr-4 text-xl  md:text-3xl"></i>
                  Tailored Solutions
                </div>
              </div>
              <div className="md:flex gap-6 mt-7">
                <div className="flex items-center basis-2/4 justify-normal mb-5 md:mb-0  text-lg md:text-xl">
                  <i className="fal fa-headset text-[#CEFF05] mr-4 text-xl  md:text-3xl"></i>
                  24/7 Support
                </div>
                <div className="flex items-center basis-2/4 justify-normal mb-5 md:mb-0  text-lg md:text-xl">
                  <i className="fal fa-award text-[#CEFF05] mr-4 text-xl  md:text-3xl"></i>
                  Platform Expertise
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div
                className="bg-[#CEFF05] text-black p-3 rounded-full"
                data-aos="zoom-in"
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

        <section className="py-12 lg:py-24">
          <div
            data-aos="zoom-in"
            className="text-gray-600 hidden md:block text-5xl md:text-6xl lg:text-7xl font-bold uppercase pb-10 lg:pb-20 text-center why-choose-text"
          >
            Why Partner With Us
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8 text-white">
            <div className="lg:w-1/2 md:space-y-5 text-xl">
              <div
                data-aos="zoom-in"
                className="text-[#CEFF05] text-sm md:text-base font-medium uppercase border-b border-[#CEFF05] inline-block mb-3"
              >
                Why Choose TechImmortals
              </div>
              <div
                data-aos="fade-up"
                className="text-3xl md:text-5xl font-semibold md:italic text-gray-300"
              >
                <span className="hidden md:inline-block text-[#CEFF05]">‘</span>
                We’re dedicated to your{" "}
                <span className="font-bold">success</span>, every step of the
                way
                <span className="text-[#CEFF05] hidden md:inline-block ">
                  ’
                </span>
              </div>
              <p
                data-aos="fade-up"
                className="text-gray-400 text-base font-medium mt-6 md:text-xl mb-3"
              >
                At TechImmortals, we combine innovation and technology to create
                solutions that drive success. With a focus on quality and client
                satisfaction, we turn every project into a step toward
                excellence. Discover how we can elevate your business.
              </p>
              <div data-aos="fade-up" className="p-4 feature-bg mt-8">
                <div className="md:flex gap-6">
                  <div className="flex items-center basis-2/4 mb-5 md:mb-0 text-lg md:text-xl">
                    <img
                      src="/innovation_icon.png"
                      alt=""
                      className="mr-4 w-7 h-7 md:w-9 md:h-9"
                    />
                    Innovative Solutions
                  </div>
                  <div className="flex items-center basis-2/4 mb-5 md:mb-0 text-lg md:text-xl">
                    <img
                      src="/ux_search_results.png"
                      alt=""
                      className="mr-4 w-7 h-7 md:w-9 md:h-9"
                    />
                    Seamless User Experience
                  </div>
                </div>
                <div className="md:flex gap-6 mt-6">
                  <div className="flex items-center basis-2/4 mb-5 md:mb-0 text-lg md:text-xl">
                    <img
                      src="/technology_icon.png"
                      alt=""
                      className="mr-4 w-7 h-7 md:w-9 md:h-9"
                    />
                    Cutting-Edge Technology
                  </div>
                  <div className="flex items-center basis-2/4 mb-5 md:mb-0 text-lg md:text-xl">
                    <img
                      src="/24-7.png"
                      alt=""
                      className="mr-4 w-7 h-7 md:w-9 md:h-9"
                    />
                    24/7 Dedicated Support
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="lg:w-1/2 md:flex justify-end order-1 lg:order-2 mt-6 md:mt-0"
            >
              <Image
                src="/performance_overview.svg"
                alt="Why Choose Us"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        <WorkingSteps />
        <LogoSlider />
        <Testimonial />

        <section className="flex flex-col lg:flex-row items-center gap-8 py-12 lg:py-24">
          <div data-aos="fade-down" className="lg:w-1/2 hidden md:block">
            <Image
              src="/questions.svg"
              alt="Frequently Asked Questions"
              className="max-w-full h-auto w-fit"
              width={600}
              height={400}
            />
          </div>
          <div className="lg:w-1/2">
            <div>
              <div
                data-aos="zoom-in"
                className="uppercase text-[#CEFF05] text-sm md:text-base font-medium mb-3 border-b border-[#CEFF05] inline-block"
              >
                Frequently Asked Questions
              </div>
              <div
                data-aos="fade-up"
                className="text-3xl md:text-5xl font-bold text-gray-300"
              >
                Have questions? We’ve got the answers you need!
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="text-gray-400 text-base font-medium mt-4 md:text-xl mb-3"
            >
              Find answers to our most frequently asked questions. Still have
              queries? Contact us directly - we’re here to help!
            </div>
            <div data-aos="fade-up" className="gap-6 py-6">
              {questionData.map((item) => (
                <div
                  key={item.id}
                  className={`mb-2 rounded-t-lg transition-all duration-500 ease-in-out overflow-hidden border-b border-gray-400 ${
                    activeQue === item.id
                      ? "bg-gradient-to-r from-[#eb5c181d] via-[#f950551d] to-[#ca2db81d]"
                      : ""
                  }`}
                  role="region"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full text-lg md:text-xl font-normal text-left py-4 px-1 md:px-3 ${
                      activeQue === item.id ? "text-[#CEFF05]" : "text-white"
                    } flex items-center hover:text-[#CEFF05] transition-all duration-500 ease-in-out`}
                    aria-expanded={activeQue === item.id}
                  >
                    <span className="mr-4 font-bold">{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-[14px] fill-current ml-auto shrink-0 transition-transform duration-500 ease-in-out ${
                        activeQue === item.id ? "rotate-180" : "rotate-0"
                      }`}
                      viewBox={
                        activeQue === item.id ? "0 0 124 124" : "0 0 42 42"
                      }
                    >
                      <path
                        d={
                          activeQue === item.id
                            ? "M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            : "M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        }
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[item.id] = el)}
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight:
                        activeQue === item.id ? `${heights[item.id]}px` : "0px",
                      opacity: activeQue === item.id ? 1 : 0,
                      overflow: "hidden",
                      transitionProperty: "max-height, opacity",
                      willChange: "max-height, opacity",
                    }}
                  >
                    <div className="pb-6 px-3">
                      <p className="text-base text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <ContactUs handleOpen={handleOpen} />
        </Dialog>
      </div>
    </div>
  );
}
