import Image from "next/image";
import ProjectList from "../../components/ProjectList";

export const metadata = {
  title: "Tech Immortals | Game Development",
  description: "Tech Immortals | Game Development",
};

export default function GameDevelopment() {
  return (
    <div>
      <div className="game-header-box py-16 lg:py-28 relative">
        <div className="header-overlay"></div>
        <h2
          data-aos="flip-left"
          className="text-2xl md:text-4xl font-semibold text-white text-center relative z-[1] header-text"
        >
          Services
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0 py-24">
          <div
            data-aos="fade-right"
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
            data-aos="fade-left"
            className="md:w-1/2 w-full space-y-6 text-white text-xl text-left"
          >
            <div>
              <div className="text-3xl md:text-5xl font-bold text-[#CEFF05]">
                Game Development
              </div>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg">
              Have an epic idea for a game? Let us bring it to life! From
              concept design to immersive gameplay, we develop engaging games
              with stunning visuals and seamless performance. Whether it’s a
              casual mobile game or a high-end console experience, we make your
              vision playable.
            </p>
          </div>
        </div>
        <ProjectList service="game-development" />
      </div>
    </div>
  );
}
