import Hero from "@/components/Hero";
import TemplateGallery from "@/components/TemplateGallery";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TemplateGallery />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
