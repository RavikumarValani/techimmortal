"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import ReviewForm from "./ReviewForm";

const Footer = () => {
  const [openReviewForm, setOpenReviewForm] = useState(false);
  const handleOpenReviewForm = () => setOpenReviewForm(!openReviewForm);
  const currentYear = new Date().getFullYear();
  const sections = [
    {
      label: "Quick Links",
      links: [
        { label: "Blogs", href: "/blogs" },
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
      ],
    },
  ];

  return (
    <Fragment>
      <footer className="bg-[#0e0f19] pt-12 pb-6 px-6 md:px-10 font-[sans-serif] tracking-wide">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:flex lg:items-center">
              <Link href="/">
                <img src="/logo_2.png" alt="logo" className="w-64" />
              </Link>
            </div>

            <div>
              <h3 className="text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {sections[0].links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#CEFF05]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-full space-y-8">
              <div className="lg:flex">
                <ul className="flex space-x-6">
                  <li>
                    <Link
                      title="Instagram"
                      target="_blank"
                      href="https://www.instagram.com/tech_immortals?igsh=NWZ0dXo3aHV0dThw&utm_source=qr"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-gray-300 hover:fill-[#CEFF05] w-7 h-7 transition-transform duration-300 ease hover:scale-150"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8,2 L16,2 C19.3137085,2 22,4.6862915 22,8 L22,16 C22,19.3137085 19.3137085,22 16,22 L8,22 C4.6862915,22 2,19.3137085 2,16 L2,8 C2,4.6862915 4.6862915,2 8,2 Z M8,4 C5.790861,4 4,5.790861 4,8 L4,16 C4,18.209139 5.790861,20 8,20 L16,20 C18.209139,20 20,18.209139 20,16 L20,8 C20,5.790861 18.209139,4 16,4 L8,4 Z M12,17 C9.23857625,17 7,14.7614237 7,12 C7,9.23857625 9.23857625,7 12,7 C14.7614237,7 17,9.23857625 17,12 C17,14.7614237 14.7614237,17 12,17 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 C17.5522847,6 18,6.44771525 18,7 C18,7.55228475 17.5522847,8 17,8 Z"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="LinkedIn"
                      target="_blank"
                      href="https://www.linkedin.com/company/techimmortals/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-gray-300 hover:fill-[#CEFF05] w-7 h-7 transition-transform duration-300 ease hover:scale-150"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link title="Facebook" target="_blank" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-gray-300 hover:fill-[#CEFF05] w-7 h-7 transition-transform duration-300 ease hover:scale-150"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23 12.0672C23 5.95496 18.0751 1 12 1C5.92486 1 1 5.95496 1 12.0672C1 17.5912 5.02254 22.1697 10.2812 23V15.2663H7.48828V12.0672H10.2812V9.62898C10.2812 6.85525 11.9235 5.32313 14.4361 5.32313C15.6396 5.32313 16.8984 5.53929 16.8984 5.53929V8.26287H15.5114C14.1449 8.26287 13.7188 9.11597 13.7188 9.99119V12.0672H16.7695L16.2818 15.2663H13.7188V23C18.9775 22.1697 23 17.5912 23 12.0672Z"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link title="YouTube" target="_blank" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-gray-300 hover:fill-[#CEFF05] w-7 h-7 transition-transform duration-300 ease hover:scale-150"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="WhatsApp"
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=918700364145&text=Hi%21+I%27m+Interested."
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-gray-300 hover:fill-[#CEFF05] w-7 h-7 transition-transform duration-300 ease hover:scale-150"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#CEFF05] text-black p-3 rounded-full">
                  <i className="fas fa-phone m-1 rotate-90"></i>
                </div>
                <div>
                  <span className="block text-base text-[#CEFF05] font-bold">
                    Give us a call
                  </span>
                  <div className="text-xl font-semibold text-white">
                    <Link href="tel:+918700364145">+91 870 036 4145</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleOpenReviewForm}
                className="p-3 bg-[#CEFF05] text-black rounded-full transform transition-all duration-500 ease-in-out hover:bg-black hover:text-white text-sm font-bold"
              >
                ADD REVIEW
              </button>
              <Dialog
                open={openReviewForm}
                onClose={setOpenReviewForm}
                className="relative z-10"
              >
                <ReviewForm handleOpenReviewForm={handleOpenReviewForm} />
              </Dialog>
            </div>
          </div>

          <div className="text-center text-gray-400 mt-8">
            &copy; {currentYear} Tech Immortals. All Rights Reserved.
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
