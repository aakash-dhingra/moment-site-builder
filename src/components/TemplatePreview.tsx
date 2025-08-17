import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Image, Type, Layout, Sparkles, Play, Calendar, MessageSquare, Coffee, Gift, Star } from "lucide-react";
import sampleRomantic from "@/assets/sample-romantic.jpg";
import sampleBirthday from "@/assets/sample-birthday.jpg";
import sampleApology from "@/assets/sample-apology.jpg";
import sampleInvitation from "@/assets/sample-invitation.jpg";

interface Template {
  id: string;
  title: string;
  category: string;
  color: string;
  description: string;
  features: string[];
  type?: string;
  pages?: string[];
  interactiveElements?: string[];
  difficulty?: string;
}

interface TemplatePreviewProps {
  template: Template;
  children: React.ReactNode;
}

const TemplatePreview = ({ template, children }: TemplatePreviewProps) => {
  const getPreviewFeatures = () => {
    const baseFeatures = [
      { icon: Layout, title: "Responsive Design", description: "Looks perfect on all devices" },
      { icon: Type, title: "Custom Typography", description: "Elegant fonts and styling" },
    ];

    if (template.type === "multi-page") {
      baseFeatures.push(
        { icon: Image, title: "Multi-Page Layout", description: `${template.pages?.length || 3} interactive pages` },
        { icon: Sparkles, title: "Page Navigation", description: "Smooth transitions between pages" }
      );
    } else if (template.type === "interactive") {
      baseFeatures.push(
        { icon: Sparkles, title: "Interactive Elements", description: "Forms, counters, and live features" },
        { icon: Image, title: "Dynamic Content", description: "User-generated content support" }
      );
    } else {
      baseFeatures.push(
        { icon: Image, title: "Photo Integration", description: "Beautiful image displays" },
        { icon: Sparkles, title: "Smooth Animations", description: "Delightful interactions" }
      );
    }

    return baseFeatures;
  };

  const getSampleContent = () => {
    const contentMap: Record<string, { 
      image: string, 
      title: string, 
      message: string,
      icon: any,
      buttonText: string
    }> = {
      "Romantic": { 
        image: sampleRomantic, 
        title: "Our Love Story", 
        message: "Every moment with you feels like a fairytale. From our first coffee date to building dreams together, you've made every day magical.",
        icon: Heart,
        buttonText: "Read Our Story"
      },
      "Birthday": { 
        image: sampleBirthday, 
        title: "Happy 25th Birthday Sarah!", 
        message: "Another year of amazing memories! Here's to celebrating you and all the joy you bring to everyone around you.",
        icon: Gift,
        buttonText: "View Celebration"
      },
      "Apology": { 
        image: sampleApology, 
        title: "I'm Sorry", 
        message: "I know I made a mistake, and I want to make things right. Your friendship means everything to me.",
        icon: Star,
        buttonText: "My Apology"
      },
      "Invitation": { 
        image: sampleInvitation, 
        title: "Coffee & Conversation?", 
        message: "Would you like to catch up over coffee this weekend? I know this amazing little café downtown.",
        icon: Coffee,
        buttonText: "Let's Meet"
      },
      "Proposal": { 
        image: sampleRomantic, 
        title: "Will You Marry Me?", 
        message: "You are my everything, my best friend, and my greatest love. I want to spend forever making you smile.",
        icon: Heart,
        buttonText: "The Big Question"
      },
      "Gratitude": { 
        image: sampleInvitation, 
        title: "Thank You", 
        message: "Your kindness and support have meant the world to me. I'm so grateful to have you in my life.",
        icon: Heart,
        buttonText: "My Gratitude"
      }
    };
    
    return contentMap[template.category] || contentMap["Romantic"];
  };

  const getThemeFromColor = (color: string) => {
    switch (color) {
      case "romantic": return { primary: "#D946EF", background: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)" };
      case "celebration": return { primary: "#F59E0B", background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)" };
      case "gentle": return { primary: "#06B6D4", background: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)" };
      case "elegant": return { primary: "#8B5CF6", background: "linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)" };
      case "professional": return { primary: "#059669", background: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)" };
      default: return { primary: "#3B82F6", background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" };
    }
  };

  const theme = getThemeFromColor(template.color);
  const sampleContent = getSampleContent();
  const SampleIcon = sampleContent.icon;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Preview: {template.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Realistic Website Preview */}
          <div className="border-2 border-muted rounded-lg overflow-hidden shadow-lg">
            {/* Browser Bar Mockup */}
            <div className="bg-muted/50 px-4 py-2 border-b border-muted flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-background/80 px-3 py-1 rounded text-xs text-muted-foreground ml-4 flex-1">
                https://your-gift-website.com
              </div>
            </div>
            
            {/* Website Content */}
            <div 
              className="relative overflow-hidden"
              style={{ background: theme.background }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${sampleContent.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="relative p-8 min-h-[400px] flex flex-col">
                {/* Header */}
                <div className="text-center mb-8">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                    style={{ backgroundColor: theme.primary + "20", border: `2px solid ${theme.primary}40` }}
                  >
                    <SampleIcon className="w-10 h-10" style={{ color: theme.primary }} />
                  </div>
                  
                  <h1 className="text-4xl font-bold mb-4" style={{ color: theme.primary }}>
                    {sampleContent.title}
                  </h1>
                  
                  <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                    {sampleContent.message}
                  </p>
                </div>

                {/* Sample Photo Gallery */}
                <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={sampleContent.image} 
                      alt="Sample photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={sampleContent.image} 
                      alt="Sample photo" 
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={sampleContent.image} 
                      alt="Sample photo" 
                      className="w-full h-full object-cover sepia"
                    />
                  </div>
                </div>

                {/* Interactive Elements Preview */}
                <div className="flex flex-wrap gap-3 justify-center mb-6">
                  <Button 
                    style={{ backgroundColor: theme.primary, color: 'white' }}
                    className="hover:opacity-90 transition-opacity"
                  >
                    {sampleContent.buttonText}
                  </Button>
                  
                  {template.type === "interactive" && (
                    <>
                      <Button variant="outline" className="border-primary/30">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Leave Message
                      </Button>
                      <Button variant="outline" className="border-primary/30">
                        <Calendar className="w-4 h-4 mr-2" />
                        RSVP
                      </Button>
                    </>
                  )}
                  
                  {template.type === "multi-page" && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-background/20 rounded-md backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                      <div className="w-2 h-2 rounded-full bg-muted"></div>
                      <div className="w-2 h-2 rounded-full bg-muted"></div>
                      <div className="w-2 h-2 rounded-full bg-muted"></div>
                    </div>
                  )}
                </div>

                {/* Live Features Demo */}
                {template.interactiveElements?.includes("Live counter") && (
                  <div className="text-center p-4 bg-background/10 rounded-lg backdrop-blur-sm mb-4">
                    <div className="text-2xl font-bold" style={{ color: theme.primary }}>
                      1,247 days together
                    </div>
                    <div className="text-sm text-foreground/60">and counting...</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Template Type Info */}
          {template.pages && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Page Structure:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {template.pages.map((page, index) => (
                  <div key={index} className="bg-muted/30 p-2 rounded-md text-center">
                    <span className="text-xs font-medium">{page}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Elements */}
          {template.interactiveElements && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Interactive Features:</h3>
              <div className="flex flex-wrap gap-2">
                {template.interactiveElements.map((element, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    ✨ {element}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Template Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">What's Included:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getPreviewFeatures().map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Template Specific Features */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Template Features:</h3>
            <div className="flex flex-wrap gap-2">
              {template.features.map((feature, index) => (
                <Badge key={index} variant="outline">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplatePreview;