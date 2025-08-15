import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [showTemplates, setShowTemplates] = useState(false);

  const scrollToTemplates = () => {
    const templatesSection = document.getElementById('templates-section');
    templatesSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful celebration background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-hero p-4 rounded-full shadow-glow">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Create Beautiful
            <br />
            Gift Websites
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Upload your photos and create personalized websites for birthdays, 
            apologies, proposals, and every special moment that matters.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="min-w-48"
              onClick={scrollToTemplates}
            >
              <Sparkles className="w-5 h-5" />
              Start Creating
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-48"
              onClick={scrollToTemplates}
            >
              <Gift className="w-5 h-5" />
              View Templates
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-soft">
              <div className="bg-romantic/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="w-6 h-6 text-romantic" />
              </div>
              <h3 className="font-semibold mb-2">Express Your Love</h3>
              <p className="text-muted-foreground text-sm">Perfect for romantic occasions, anniversaries, and heartfelt messages</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-soft">
              <div className="bg-celebration/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Gift className="w-6 h-6 text-celebration" />
              </div>
              <h3 className="font-semibold mb-2">Celebrate Moments</h3>
              <p className="text-muted-foreground text-sm">Birthdays, achievements, and special milestones deserve beautiful presentations</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-soft">
              <div className="bg-elegant/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-elegant" />
              </div>
              <h3 className="font-semibold mb-2">Make It Special</h3>
              <p className="text-muted-foreground text-sm">Transform ordinary moments into extraordinary memories with custom websites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;