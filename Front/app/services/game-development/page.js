import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Game Development",
  description: "Tech Immortals | Game Development",
};

export default function GameDevelopment() {
  return (
    <div>
      <div className="game-header-box py-12 lg:py-24 relative">
        <div className="header-overlay"></div>
        <div
          className="text-2xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text"
        >
          Services
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-24">
          <div
            data-aos="fade-up"
            className="md:w-1/2 w-full items-center flex flex-col"
          >
            <Image
              src="/app.svg"
              alt="Game Development"
              width={400}
              height={300}
            />
          </div>
          <div
            data-aos="fade-down"
            className="md:w-1/2 w-full space-y-6 text-white text-xl text-left"
          >
            <div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#CEFF05]">
                Game Development
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              Got an epic game idea? Let us turn it into reality! From initial concept to immersive gameplay, we craft engaging games with stunning visuals and flawless performance. Whether it's a casual mobile game or a high-end console experience, we bring your vision to life.
            </p>
          </div>
        </div>
        <ProjectList service="game-development" />
      </div>
    </div>
  );
}
