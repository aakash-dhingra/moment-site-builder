import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { templateCategories, Template } from "@/data/templates";
import TemplateCreator from "@/components/TemplateCreator";
import TemplatePreview from "@/components/TemplatePreview";
import { Crown, Zap, Sparkles } from "lucide-react";

const TemplateSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("Romantic");

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "simple": return <Zap className="w-3 h-3" />;
      case "advanced": return <Sparkles className="w-3 h-3" />;
      case "premium": return <Crown className="w-3 h-3" />;
      default: return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "simple": return "bg-gentle/20 text-gentle border-gentle/30";
      case "advanced": return "bg-professional/20 text-professional border-professional/30";
      case "premium": return "bg-elegant/20 text-elegant border-elegant/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getVariantFromColor = (color: string) => {
    switch (color) {
      case "romantic": return "romantic";
      case "celebration": return "celebration";
      case "gentle": return "gentle";
      case "elegant": return "elegant";
      case "professional": return "professional";
      default: return "default";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "romantic": return "text-romantic";
      case "celebration": return "text-celebration";
      case "gentle": return "text-gentle";
      case "elegant": return "text-elegant";
      case "professional": return "text-professional";
      default: return "text-primary";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto" id="templates-section">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Template</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From simple cards to interactive multi-page experiences - find the perfect template for your special occasion
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            {templateCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name} className="text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {templateCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((template: Template) => {
                  const IconComponent = template.icon;
                  return (
                    <Card key={template.id} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`text-xs ${getDifficultyColor(template.difficulty)} border`}>
                              {getDifficultyIcon(template.difficulty)}
                              <span className="ml-1 capitalize">{template.difficulty}</span>
                            </Badge>
                            {template.type === "multi-page" && (
                              <Badge variant="outline" className="text-xs">
                                Multi-page
                              </Badge>
                            )}
                            {template.type === "interactive" && (
                              <Badge variant="outline" className="text-xs">
                                Interactive
                              </Badge>
                            )}
                          </div>
                          
                          <div className={`bg-${template.color}/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`w-8 h-8 ${getIconColor(template.color)}`} />
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{template.description}</p>
                        </div>
                        
                        {template.pages && (
                          <div className="mb-4">
                            <p className="text-xs font-medium text-muted-foreground mb-2">Pages included:</p>
                            <div className="flex flex-wrap gap-1">
                              {template.pages.map((page, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {page}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="space-y-2 mb-6">
                          {template.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-3">
                          <TemplateCreator template={template}>
                            <Button 
                              variant={getVariantFromColor(template.color)} 
                              className="w-full"
                            >
                              Create with This Template
                            </Button>
                          </TemplateCreator>
                          <TemplatePreview template={template}>
                            <Button variant="outline" className="w-full">
                              Preview Template
                            </Button>
                          </TemplatePreview>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <TemplateCreator template={{ 
            id: "custom", 
            title: "Custom Template", 
            category: "Custom", 
            color: "professional",
            description: "Create your own unique template",
            features: [],
            type: "single-page",
            difficulty: "advanced"
          }}>
            <Button variant="hero" size="lg">
              <Sparkles className="w-5 h-5" />
              Create Custom Template
            </Button>
          </TemplateCreator>
        </div>
      </div>
    </section>
  );
};

export default TemplateSelector;