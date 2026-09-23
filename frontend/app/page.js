import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WorkProcess from "@/components/sections/WorkProcess";
import About from "@/components/sections/About";
import Comparison from "@/components/sections/Comparison";
import CoreValues from "@/components/sections/CoreValues";
import ContactDetails from "@/components/sections/ContactDetails";
import BlogSpotlight from "@/components/sections/BlogSpotlight";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WorkProcess />
      <About />
      <Comparison />
      <CoreValues />
      <ContactDetails />
      <BlogSpotlight />
    </>
  );
}
