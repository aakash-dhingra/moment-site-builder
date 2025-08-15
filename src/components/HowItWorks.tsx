import { Card, CardContent } from "@/components/ui/card";
import { Upload, Edit, Share, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Heart,
      title: "Choose Template",
      description: "Select from our beautiful collection of occasion-specific templates",
      color: "romantic",
    },
    {
      icon: Upload,
      title: "Upload Photos",
      description: "Add your precious memories and personal photos to make it unique",
      color: "celebration",
    },
    {
      icon: Edit,
      title: "Customize Content",
      description: "Personalize with your own text, messages, and special touches",
      color: "gentle",
    },
    {
      icon: Share,
      title: "Share & Surprise",
      description: "Get your hosted website link and share the magic with your loved ones",
      color: "elegant",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating your personalized gift website is as easy as 1-2-3-4
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(100%-2rem)] w-16 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 z-0" />
                )}
                
                <Card className="relative z-10 text-center hover:shadow-romantic transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="bg-gradient-hero p-4 rounded-full w-fit mx-auto mb-4 shadow-soft">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;