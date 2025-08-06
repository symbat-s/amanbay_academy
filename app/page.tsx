import Banner from "./components/Banner";
import AboutBanner from "./components/AboutSection";
export default function Home() {
  return (
    <div className="mx-auto">
      <Banner />
      <AboutBanner />
    </div>
  );
}
