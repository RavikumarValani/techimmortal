"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";
import axios from "axios";
import "swiper/css";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/testimonial");
      setTestimonials(response.data.testimonial);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="px-6 md:px-0">
            <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
              <div
                data-aos="fade-right"
                className="text-3xl md:text-6xl font-bold text-gray-300 text-center lg:text-left"
              >
                Testimonials{" "}
              </div>
              <div
                data-aos="fade-left"
                className={`flex items-center gap-8 ${
                  testimonials.length == 3 ? "block lg:hidden" : ""
                } ${testimonials.length == 2 ? "block md:hidden" : ""} ${
                  testimonials.length == 1 ? "hidden" : ""
                }`}
              >
                <button
                  id="slider-button-left"
                  className="swiper-button-prev group flex justify-center items-center border-2 border-solid border-[#CEFF05] w-12 h-12 transition-all duration-500 rounded-full hover:bg-[#CEFF05] "
                  data-carousel-prev
                >
                  <svg
                    className="h-6 w-6 text-[#CEFF05] group-hover:text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  id="slider-button-right"
                  className="swiper-button-next group flex justify-center items-center border-2 border-solid border-[#CEFF05] w-12 h-12 transition-all duration-500 rounded-full hover:bg-[#CEFF05]"
                  data-carousel-next
                >
                  <svg
                    className="h-6 w-6 text-[#CEFF05] group-hover:text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 swiper mySwiper"
            >
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={
                    testimonials.length < 3 ? testimonials.length : 3
                  }
                  spaceBetween={28}
                  centeredSlides={false}
                  loop={true}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView:
                        testimonials.length < 2 ? testimonials.length : 2,
                      spaceBetween: 28,
                    },
                    1024: {
                      slidesPerView:
                        testimonials.length < 3 ? testimonials.length : 3,
                      spaceBetween: 32,
                    },
                  }}
                >
                  {testimonials.map((item) => (
                    <SwiperSlide key={item._id}>
                      <div className="flex flex-col bg-[#0e0f19] rounded-lg group shadow-lg h-full p-6 text-gray-300 border-2 border-solid border-gray-100 hover:border-[#CEFF05]">
                        <div className="flex justify-center">
                          <img
                            className="w-24 h-24 object-cover rounded-full border-2 border-white"
                            src={`http://localhost:5000/uploads/${item.image}`}
                          />
                        </div>
                        <div className="text-center mt-2">
                          <Rating
                            name="half-rating-read"
                            defaultValue={item.rating}
                            precision={0.1}
                            readOnly
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: "#CEFF05",
                              },
                              "& .MuiRating-iconEmpty": {
                                color: "gray",
                              },
                            }}
                          />
                          <p className="mt-2">{item.description}</p>
                        </div>
                        <div className="text-center mt-auto">
                          <h3 className="text-lg font-semibold text-[#CEFF05]">
                            {item.name}
                          </h3>
                          <p className="">{item.position}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
