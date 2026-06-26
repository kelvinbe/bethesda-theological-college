import UtilityBar from "@/components/layout/UtilityBar";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/Hero";
import WhyBTC from "@/components/WhyBtc";
import AugustineQuote from "@/components/AugustineQuote";
import MinistryCall from "@/components/MinistryCall";
import Accreditation from "@/components/Accreditation";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>

      <HeroVideo />
      <WhyBTC />
      <AugustineQuote />
      <MinistryCall />
      <Accreditation />
      <Partners />

    </>
  );
}