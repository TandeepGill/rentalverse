import About from "../components/landing/About";
import Divider from "../components/landing/Divider";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";
import Pricing from "../components/landing/Pricing";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Divider section='' />
        <Features />
        <Divider section='' />
        <Pricing />
        <Divider section='' />
        <About />
      </div>
    </>
  );
};

export default Landing;
