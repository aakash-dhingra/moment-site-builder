import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Cake, Gift, Flower, Gem, Coffee } from "lucide-react";

const TemplateGallery = () => {
  const templates = [
    {
      id: 1,
      title: "Romantic Evening",
      category: "Romantic",
      icon: Heart,
      color: "romantic",
      description: "Perfect for date nights, anniversaries, and love declarations",
      features: ["Photo gallery", "Love letters", "Music playlist"],
    },
    {
      id: 2,
      title: "Birthday Celebration",
      category: "Birthday",
      icon: Cake,
      color: "celebration",
      description: "Make birthdays unforgettable with personalized wishes",
      features: ["Birthday timeline", "Photo memories", "Wishes collection"],
    },
    {
      id: 3,
      title: "Heartfelt Apology",
      category: "Apology",
      icon: Flower,
      color: "gentle",
      description: "Express sincere apologies with thoughtful presentation",
      features: ["Personal message", "Memory lane", "Promise cards"],
    },
    {
      id: 4,
      title: "Marriage Proposal",
      category: "Proposal",
      icon: Gem,
      color: "elegant",
      description: "Pop the question in the most romantic way possible",
      features: ["Love story", "Photo journey", "The big question"],
    },
    {
      id: 5,
      title: "Thank You Gift",
      category: "Gratitude",
      icon: Gift,
      color: "celebration",
      description: "Show appreciation with a beautiful thank you page",
      features: ["Gratitude notes", "Shared memories", "Future plans"],
    },
    {
      id: 6,
      title: "Coffee Date Invite",
      category: "Invitation",
      icon: Coffee,
      color: "gentle",
      description: "Ask someone out with charm and creativity",
      features: ["Personal intro", "Date ideas", "Contact info"],
    },
  ];

  const getVariantFromColor = (color: string) => {
    switch (color) {
      case "romantic": return "romantic";
      case "celebration": return "celebration";
      case "gentle": return "gentle";
      case "elegant": return "elegant";
      default: return "default";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "romantic": return "text-romantic";
      case "celebration": return "text-celebration";
      case "gentle": return "text-gentle";
      case "elegant": return "text-elegant";
      default: return "text-primary";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Template</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each template is carefully designed to capture the perfect mood for your special occasion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => {
            const IconComponent = template.icon;
            return (
              <Card key={template.id} className="group hover:shadow-romantic transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`bg-${template.color}/20 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${getIconColor(template.color)}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{template.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {template.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      variant={getVariantFromColor(template.color)} 
                      className="w-full"
                    >
                      Use This Template
                    </Button>
                    <Button variant="outline" className="w-full">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Gift className="w-5 h-5" />
            Create Custom Template
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;