"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import { Dialog } from "@headlessui/react";

export default function Home() {
  const [activeQue, setActiveQue] = useState(null);
  const [activeQueDiv, setActiveQueDiv] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleAccordion = (index) => {
    setActiveQue(activeQue === index ? null : index);
  };

  const divClicked = (index) => {
    setActiveQueDiv(index);
  };

  const handleOpen = () => setOpen(!open);

  const questionData = [
    {
      id: 1,
      question: "What services does TechImmortals offer?",
      answer:
        "We specialize in providing comprehensive design solutions including web design, mobile app development, and branding services. Our goal is to enhance your digital presence with innovative and user-centric designs.",
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer:
        "The duration of a project varies based on its complexity and scope. Typically, web design projects take between 4-6 weeks, while mobile app development and branding projects can take longer. We work closely with clients to establish clear timelines.",
    },
    {
      id: 3,
      question: "What is the process for starting a project?",
      answer:
        "Our process begins with an initial consultation to understand your needs and goals. We then create a project plan, followed by design and development phases. Regular updates and feedback sessions ensure the final product meets your expectations.",
    },
    {
      id: 4,
      question: "Do you offer ongoing support after a project is completed?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure that your project continues to function smoothly. Our support services include troubleshooting, updates, and any additional enhancements you may require.",
    },
    {
      id: 5,
      question: "Can I request changes to the design during the project?",
      answer:
        "Absolutely! We encourage client feedback and revisions throughout the project to ensure the final design aligns with your vision. Clear communication helps us deliver a product that meets your needs.",
    },
  ];

  return (
    <div>
      <section className="text-center py-32 lg:py-52 hero-bg">
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
          className="mt-6 text-base md:text-xl text-gray-300"
          data-aos="zoom-in"
        >
          Delivering High-Impact, Responsive Designs That Bring
        </p>
        <p className="text-base md:text-xl text-gray-300" data-aos="zoom-in">
          Your Vision to Life Across All Platforms.
        </p>
        <button
          onClick={handleOpen}
          data-aos="flip-left"
          className="mt-8 p-3 md:px-6 md:py-5 bg-[#CEFF05] text-black rounded-full hover:bg-black hover:text-white hover:scale-105 text-sm font-bold"
        >
          REQUEST A QUOTE
        </button>
      </section>

      <div className="container mx-auto">
        <section className="flex flex-col lg:flex-row items-center gap-8 px-6 md:px-0 py-12 lg:py-24">
          <div
            className="lg:w-1/2 w-full flex justify-center md:inline-block"
            data-aos="fade-right"
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
                data-aos="fade-left"
                className="md:text-5xl text-3xl font-bold text-gray-300"
              >
                Transforming Ideas into Reality
              </div>
            </div>
            <p
              data-aos="fade-left"
              className="text-gray-400 font-medium text-base md:text-lg animate__fadeInLeft"
            >
              Specialize in delivering tailored IT solutions that drive growth,
              efficiency, and security for businesses across all industries.
              Whether you're looking to develop robust software applications,
              enhance your digital assets, or optimize your IT infrastructure,
              our team of experts is here to make it happen.
            </p>
            <div className="p-4 feature-bg" data-aos="fade-left">
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
                className="bg-[#CEFF05] text-black p-3 rounded-full"
                data-aos="zoom-in"
              >
                <i className="fas fa-phone m-1 rotate-90"></i>
              </div>
              <div data-aos="fade-left">
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

        <section className="py-12 lg:py-24 px-6 md:px-0">
          <div
            data-aos="zoom-in"
            className="text-gray-600 text-6xl md:text-7xl lg:text-9xl font-bold uppercase block pb-10 lg:pb-20 text-center why-choose-text"
          >
            Why Choose Us
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8 text-white">
            <div className="lg:w-1/2 space-y-4 text-xl">
              <div
                data-aos="zoom-in"
                className="text-[#CEFF05] text-sm md:text-base font-medium uppercase border-b border-[#CEFF05] inline-block mb-3"
              >
                Why Choose TechImmortals
              </div>
              <div
                data-aos="fade-right"
                className="text-3xl md:text-5xl font-semibold italic text-gray-300"
              >
                <span className="text-[#CEFF05]">‘</span>
                Your <span className="font-bold">success</span> is our priority,
                and we support you at every step
                <span className="text-[#CEFF05]">’</span>
              </div>
              <p
                data-aos="fade-right"
                className="text-gray-400 font-medium pt-4 pb-4"
              >
                At TechImmortals, we blend creativity with cutting-edge
                technology to deliver solutions that drive success. Our
                commitment to quality and client satisfaction ensures that every
                project is a step towards excellence. Explore how our expertise
                can transform your business.
              </p>
              <div data-aos="fade-right" className="p-4 feature-bg mt-8">
                <div className="md:flex gap-6">
                  <div className="flex items-center basis-2/4 mb-4 md:mb-0">
                    <img
                      height="35"
                      width="35"
                      src="/innovation_icon.png"
                      alt=""
                      className="mr-4"
                    />
                    Innovative Solutions
                  </div>
                  <div className="flex items-center basis-2/4 mb-4 md:mb-0">
                    <img
                      height="35"
                      width="35"
                      src="/ux_search_results.png"
                      alt=""
                      className="mr-4"
                    />
                    Seamless User Experience
                  </div>
                </div>
                <div className="md:flex gap-6 mt-6">
                  <div className="flex items-center basis-2/4 mb-4 md:mb-0">
                    <img
                      height="35"
                      width="35"
                      src="/technology_icon.png"
                      alt=""
                      className="mr-4"
                    />
                    Cutting-Edge Technology
                  </div>
                  <div className="flex items-center basis-2/4 mb-4 md:mb-0">
                    <img
                      height="35"
                      width="35"
                      src="/24-7.png"
                      alt=""
                      className="mr-4"
                    />
                    24/7 Dedicated Support
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="lg:w-1/2 md:flex justify-end order-1 lg:order-2"
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

        <section className="flex flex-col lg:flex-row items-center gap-8 px-6 md:px-0 py-12 lg:py-24">
          <div data-aos="fade-right" className="lg:w-1/2 hidden md:block">
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
                data-aos="fade-left"
                className="text-3xl md:text-5xl font-bold text-gray-300"
              >
                Got Questions? We Have Answers!
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="text-gray-400 text-base font-medium mt-4 md:text-xl mb-3"
            >
              Discover answers to some of the most common questions we receive.
              If you don't find what you're looking for, feel free to reach out
              to us directly.
            </div>
            <div data-aos="fade-left" className="gap-6 py-6">
              {questionData.map((item) => (
                <div
                  key={item.id}
                  className={`mb-2 rounded-t-lg transition-all overflow-hidden border-b border-gray-400 ${
                    activeQueDiv === item.id
                      ? "bg-gradient-to-r from-[#eb5c181d] via-[#f950551d] to-[#ca2db81d]"
                      : ""
                  }`}
                  onClick={() => divClicked(item.id)}
                  role="accordion"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full text-lg md:text-xl font-normal text-left py-4 px-3 ${
                      activeQue === item.id ? "text-[#CEFF05]" : "text-white"
                    } flex items-center hover:text-[#CEFF05] transition-all`}
                  >
                    <span className="mr-4 font-bold">{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-[14px] fill-current ml-auto shrink-0 transform transition-transform ${
                        activeQue === item.id ? "rotate-180" : ""
                      }`}
                      viewBox={`${
                        activeQue === item.id ? "0 0 124 124" : "0 0 42 42"
                      }`}
                    >
                      <path
                        d={`${
                          activeQue === item.id
                            ? "M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            : "M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        }`}
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-[max-height] duration-300 ease-linear ${
                      activeQue === item.id ? "max-h-screen" : "max-h-0"
                    }`}
                    style={{ overflow: "hidden" }}
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

        <Testimonial />

        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <ContactUs handleOpen={handleOpen} />
        </Dialog>
      </div>
    </div>
  );
}
