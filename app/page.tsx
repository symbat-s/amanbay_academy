import Banner from "./components/Banner";
import AboutBanner from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-auto">
      <Banner />
      <AboutBanner/>
      <Footer/>
    </div>
  );
}
