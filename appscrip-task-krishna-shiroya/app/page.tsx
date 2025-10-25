
import AnnouncementBar from "./components/AnnouncementBar/announcementBar";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import HeroSection from "./components/HeroSection/heroSection";
import ProductListSection from "./components/ProductListSection/productListSection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ProductListSection />
      <Footer />
    </>
  );
}
  