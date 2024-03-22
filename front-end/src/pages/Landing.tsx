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
      </div>
    </>
  );
};

export default Landing;
