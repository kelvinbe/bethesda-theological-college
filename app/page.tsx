import UtilityBar from "@/components/layout/UtilityBar";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/Hero";
import WhyBTC from "@/components/WhyBtc";
import AugustineQuote from "@/components/AugustineQuote";
import MinistryCall from "@/components/MinistryCall";
import Accreditation from "@/components/Accreditation";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { Progress } from "@chakra-ui/react";
import Programs from "@/components/Programs";
import CallToAction from "@/components/Call";
import QuickLinks from "@/components/Quicklinks";

export default function HomePage() {
  return (
    <>

      <HeroVideo />
      <WhyBTC />
      <AugustineQuote />
      <MinistryCall />
      <Programs />
      <CallToAction />
      <Accreditation />
      {/* <QuickLinks /> */}
      <Partners />

    </>
  );
}