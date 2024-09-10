import Navbar from "./navbar";
import HomePage from "./home";
import AboutPage from "./about";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <HomePage />
      <AboutPage />
    </div>
  );
}
