import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import Features2 from "@/components/features-2";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Features2 />
      <CallToAction />
      <FooterSection />
    </>
  );
}
