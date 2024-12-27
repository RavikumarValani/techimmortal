import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ContactMenu from "./components/ContactMenu";
import "./globals.css";
import "./fontawesome.css";
import AOSInitializer from "./components/AOSInitializer";
// import "animate.css/animate.min.css";

export const metadata = {
  title: "Tech Immortals",
  description: "Tech Immortals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/f-icon.png" type="image/x-icon"></link>
      </head>
      <body>
        <div className="min-h-screen bg-[#171926] flex flex-col">
          <AOSInitializer />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <ContactMenu />
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
