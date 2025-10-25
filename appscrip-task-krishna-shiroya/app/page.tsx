
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Navbar from "./components/Navbar/navbar";
import ProductCard from "./components/ProductCard/productCard";
import Footer from "./components/Footer/footer";
import HeroSection from "./components/HeroSection/heroSection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ProductCard isTag={true} />
      <Footer />
    </>
  );
}
  