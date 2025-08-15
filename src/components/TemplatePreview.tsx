import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Image, Type, Layout, Sparkles } from "lucide-react";

interface Template {
  id: number;
  title: string;
  category: string;
  color: string;
  description: string;
  features: string[];
}

interface TemplatePreviewProps {
  template: Template;
  children: React.ReactNode;
}

const TemplatePreview = ({ template, children }: TemplatePreviewProps) => {
  const mockPreviewFeatures = [
    { icon: Layout, title: "Responsive Design", description: "Looks perfect on all devices" },
    { icon: Image, title: "Photo Gallery", description: "Beautiful image displays" },
    { icon: Type, title: "Custom Typography", description: "Elegant fonts and styling" },
    { icon: Sparkles, title: "Smooth Animations", description: "Delightful interactions" },
  ];

  const getThemeFromColor = (color: string) => {
    switch (color) {
      case "romantic": return { primary: "#D946EF", background: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)" };
      case "celebration": return { primary: "#F59E0B", background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)" };
      case "gentle": return { primary: "#06B6D4", background: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)" };
      case "elegant": return { primary: "#8B5CF6", background: "linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)" };
      default: return { primary: "#3B82F6", background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" };
    }
  };

  const theme = getThemeFromColor(template.color);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Preview: {template.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Mock Website Preview */}
          <div className="border-2 border-muted rounded-lg overflow-hidden">
            <div 
              className="h-96 p-8 flex flex-col justify-center items-center text-center relative"
              style={{ background: theme.background }}
            >
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="text-xs">
                  {template.category}
                </Badge>
              </div>
              
              <div className="space-y-4 max-w-md">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: theme.primary + "20" }}
                >
                  <Heart className="w-8 h-8" style={{ color: theme.primary }} />
                </div>
                
                <h1 className="text-3xl font-bold" style={{ color: theme.primary }}>
                  Sample {template.title}
                </h1>
                
                <p className="text-muted-foreground">
                  This is how your personalized website will look with the {template.title.toLowerCase()} template.
                  Upload your photos and add your personal message to make it unique.
                </p>
                
                <div className="flex gap-2 justify-center">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <Image className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <Image className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <Image className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">What's Included:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockPreviewFeatures.map((feature, index) => {
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