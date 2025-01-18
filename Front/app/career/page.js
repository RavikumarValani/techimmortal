import JobList from "../components/Joblist";

export const metadata = {
  title: "Tech Immortals | Career",
  description: "Tech Immortals | Career",
};

const Career = () => {
  return (
    <div>
      <div className="about-header-box py-12 lg:py-24 relative">
        <div className="header-overlay"></div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text">
          Rise with us!
        </h2>
        <p
          data-aos="fade-up"
          className="text-center text-white font-sans text-lg md:text-xl font-medium px-4 mt-4"
        >
          Ready to advance your career?
          <br className="hidden md:block" /> Start here and explore our job
          opportunities today!
        </p>
      </div>
      <div className="container mx-auto px-6">
        <JobList />
      </div>
    </div>
  );
};

export default Career;
