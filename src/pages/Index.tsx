import Hero from "@/components/Hero";
import TemplateSelector from "@/components/TemplateSelector";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TemplateSelector />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
