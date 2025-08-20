import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Heart, Image, Type, Layout, Sparkles, Play, Calendar, MessageSquare, Coffee, Gift, Star, Users, Clock, Camera, Music, MapPin, Crown, Zap, Globe } from "lucide-react";
import { useState } from "react";
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
  const [guestCount, setGuestCount] = useState(42);
  const [loveCounter, setLoveCounter] = useState(1247);
  const [isPlaying, setIsPlaying] = useState(false);

  const getTemplateComplexity = () => {
    if (template.difficulty === "Premium") return "premium";
    if (template.difficulty === "Advanced") return "advanced";
    return "simple";
  };

  const complexity = getTemplateComplexity();

  const getPreviewFeatures = () => {
    const baseFeatures = [
      { icon: Layout, title: "Responsive Design", description: "Looks perfect on all devices" },
      { icon: Type, title: "Custom Typography", description: "Elegant fonts and styling" },
    ];

    if (complexity === "premium") {
      baseFeatures.push(
        { icon: Crown, title: "Premium Design", description: "Exclusive high-end layouts" },
        { icon: Zap, title: "Live Features", description: "Real-time interactions and updates" },
        { icon: Music, title: "Media Integration", description: "Audio, video, and animations" },
        { icon: Users, title: "Guest Management", description: "RSVP system and guest tracking" }
      );
    } else if (complexity === "advanced") {
      baseFeatures.push(
        { icon: Sparkles, title: "Interactive Elements", description: "Dynamic content and animations" },
        { icon: Image, title: "Photo Gallery", description: "Advanced photo displays" },
        { icon: Globe, title: "Multi-Page", description: "Connected page navigation" }
      );
    } else {
      baseFeatures.push(
        { icon: Image, title: "Photo Integration", description: "Simple image displays" },
        { icon: Heart, title: "Basic Animations", description: "Smooth transitions" }
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
            
            {/* Website Content - Different layouts based on complexity */}
            {complexity === "simple" && (
              <div 
                className="relative overflow-hidden"
                style={{ background: theme.background }}
              >
                {/* Header section */}
                <div className="relative p-6 min-h-[500px]">
                  <div className="text-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: theme.primary + "20" }}
                    >
                      <SampleIcon className="w-8 h-8" style={{ color: theme.primary }} />
                    </div>
                    
                    <h1 className="text-3xl font-bold mb-3" style={{ color: theme.primary }}>
                      {sampleContent.title}
                    </h1>
                    
                    <p className="text-base text-foreground/70 max-w-md mx-auto mb-6">
                      {sampleContent.message}
                    </p>
                  </div>

                  {/* Main content section with photo */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-64 h-48 rounded-lg overflow-hidden shadow-md mb-6">
                      <img 
                        src={sampleContent.image} 
                        alt="Main content photo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Additional content section */}
                    <div className="bg-background/30 rounded-lg p-4 max-w-sm mx-auto mb-6">
                      <h3 className="font-semibold mb-2" style={{ color: theme.primary }}>Message Details</h3>
                      <p className="text-sm text-foreground/60 mb-3">
                        This beautiful single-page design includes all essential elements for your message.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-foreground/50">
                        <Calendar className="w-3 h-3" />
                        <span>Single page layout</span>
                      </div>
                    </div>

                    {/* Contact/Action section */}
                    <div className="space-y-3">
                      <Button 
                        style={{ backgroundColor: theme.primary, color: 'white' }}
                        className="w-full"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        {sampleContent.buttonText}
                      </Button>
                      
                      <div className="text-center">
                        <p className="text-xs text-foreground/50">Share this message</p>
                        <div className="flex justify-center gap-2 mt-2">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Heart className="w-3 h-3" style={{ color: theme.primary }} />
                          </div>
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <MessageSquare className="w-3 h-3" style={{ color: theme.primary }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer section */}
                  <div className="text-center text-xs text-foreground/40 mt-6">
                    Created with ❤️ • Simple & Beautiful
                  </div>
                </div>
              </div>
            )}

            {complexity === "advanced" && (
              <div 
                className="relative overflow-hidden"
                style={{ background: theme.background }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-primary/30 animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 rounded-full bg-primary/25 animate-pulse delay-700"></div>
                </div>
                
                <div className="relative p-6 min-h-[600px]">
                  {/* Multi-page navigation header */}
                  <div className="flex justify-between items-center mb-6 bg-background/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="flex gap-2">
                      <div className="px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: theme.primary, color: 'white' }}>Home</div>
                      <div className="px-2 py-1 rounded text-xs text-primary/70 hover:bg-primary/10 cursor-pointer">Gallery</div>
                      <div className="px-2 py-1 rounded text-xs text-primary/70 hover:bg-primary/10 cursor-pointer">Story</div>
                      <div className="px-2 py-1 rounded text-xs text-primary/70 hover:bg-primary/10 cursor-pointer">Contact</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <Badge variant="outline" className="text-xs">Multi-Page</Badge>
                    </div>
                  </div>

                  {/* Hero section */}
                  <div className="text-center mb-8">
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border-2 animate-pulse relative"
                      style={{ backgroundColor: theme.primary + "15", borderColor: theme.primary + "30" }}
                    >
                      <SampleIcon className="w-12 h-12" style={{ color: theme.primary }} />
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Play className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    
                    <h1 className="text-4xl font-bold mb-4" style={{ color: theme.primary }}>
                      {sampleContent.title}
                    </h1>
                    
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-6">
                      {sampleContent.message}
                    </p>
                  </div>

                  {/* Interactive features section */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Live counter */}
                    <Card className="p-4 bg-background/20 backdrop-blur-sm border-primary/20 hover:scale-105 transition-transform cursor-pointer">
                      <div className="text-center">
                        <div 
                          className="text-2xl font-bold mb-1"
                          style={{ color: theme.primary }}
                          onClick={() => setLoveCounter(prev => prev + 1)}
                        >
                          ❤️ {loveCounter}
                        </div>
                        <div className="text-xs text-foreground/60">Interactive Counter</div>
                        <div className="text-xs text-foreground/40">Click to increase!</div>
                      </div>
                    </Card>

                    {/* Music player mockup */}
                    <Card className="p-4 bg-background/20 backdrop-blur-sm border-primary/20">
                      <div className="text-center">
                        <div 
                          className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: theme.primary }}
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? (
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          ) : (
                            <Play className="w-3 h-3 text-white ml-0.5" />
                          )}
                        </div>
                        <div className="text-xs font-medium" style={{ color: theme.primary }}>
                          {isPlaying ? "Now Playing..." : "Play Music"}
                        </div>
                        <div className="text-xs text-foreground/60">Background Audio</div>
                      </div>
                    </Card>
                  </div>

                  {/* Enhanced photo gallery */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: theme.primary }}>
                      Photo Gallery
                    </h3>
                    <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto mb-4">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
                          <img 
                            src={sampleContent.image} 
                            alt={`Gallery ${i + 1}`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ filter: i === 1 ? 'sepia(0.3)' : i === 2 ? 'grayscale(0.5)' : i === 3 ? 'brightness(1.2)' : 'none' }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                          <div className="absolute bottom-1 right-1 w-4 h-4 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-2 h-2 text-gray-700" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-xs text-foreground/50">
                      Click any photo to view in fullscreen
                    </div>
                  </div>

                  {/* Story timeline section */}
                  <div className="mb-6 bg-background/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: theme.primary }}>
                      Our Timeline
                    </h3>
                    <div className="space-y-3">
                      {['First Meeting', 'First Date', 'Special Moment'].map((event, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: theme.primary }}
                          ></div>
                          <div className="flex-1 text-sm">
                            <span className="font-medium">{event}</span>
                            <span className="text-foreground/60 ml-2">2024</span>
                          </div>
                          <Clock className="w-3 h-3 text-foreground/40" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons with more options */}
                  <div className="space-y-3">
                    <div className="flex gap-2 justify-center">
                      <Button 
                        style={{ backgroundColor: theme.primary, color: 'white' }}
                        className="hover:scale-105 transition-transform"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        {sampleContent.buttonText}
                      </Button>
                      
                      <Button variant="outline" className="border-primary/30 hover:scale-105 transition-transform">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Leave Message
                      </Button>
                    </div>

                    <div className="flex gap-2 justify-center">
                      <Button variant="ghost" size="sm" className="text-primary/70 hover:text-primary">
                        <Camera className="w-4 h-4 mr-1" />
                        Gallery
                      </Button>
                      <Button variant="ghost" size="sm" className="text-primary/70 hover:text-primary">
                        <Music className="w-4 h-4 mr-1" />
                        Music
                      </Button>
                      <Button variant="ghost" size="sm" className="text-primary/70 hover:text-primary">
                        <Users className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Page indicator */}
                  <div className="flex justify-center mt-6 gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                    <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                    <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                  </div>
                </div>
              </div>
            )}

            {complexity === "premium" && (
              <div 
                className="relative overflow-hidden"
                style={{ background: theme.background }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 animate-pulse"></div>
                  <div className="absolute top-20 left-8 w-8 h-8 rounded-full bg-primary/30 animate-pulse delay-500"></div>
                  <div className="absolute bottom-16 right-12 w-6 h-6 rounded-full bg-primary/25 animate-pulse delay-1000"></div>
                  <div className="absolute bottom-8 left-16 w-10 h-10 rounded-full bg-primary/15 animate-pulse delay-700"></div>
                </div>
                
                <div className="relative p-8 min-h-[500px]">
                  {/* Premium header with floating elements */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <Crown className="w-5 h-5 text-yellow-500" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Globe className="w-3 h-3 text-primary" />
                      <Users className="w-3 h-3 text-primary" />
                      <Music className="w-3 h-3 text-primary" />
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border-2 shadow-lg relative"
                      style={{ 
                        backgroundColor: theme.primary + "10", 
                        borderColor: theme.primary + "40",
                        boxShadow: `0 0 30px ${theme.primary}20`
                      }}
                    >
                      <SampleIcon className="w-12 h-12" style={{ color: theme.primary }} />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {sampleContent.title}
                    </h1>
                    
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-6">
                      {sampleContent.message}
                    </p>

                    {/* Live stats */}
                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
                      <Card className="p-3 bg-background/20 backdrop-blur-sm border-primary/20">
                        <div className="text-lg font-bold" style={{ color: theme.primary }}>
                          {guestCount}
                        </div>
                        <div className="text-xs text-foreground/60">Guests</div>
                      </Card>
                      <Card className="p-3 bg-background/20 backdrop-blur-sm border-primary/20">
                        <div className="text-lg font-bold" style={{ color: theme.primary }}>
                          {loveCounter}
                        </div>
                        <div className="text-xs text-foreground/60">Days</div>
                      </Card>
                      <Card className="p-3 bg-background/20 backdrop-blur-sm border-primary/20">
                        <div className="text-lg font-bold text-green-500">Live</div>
                        <div className="text-xs text-foreground/60">Status</div>
                      </Card>
                    </div>
                  </div>

                  {/* Advanced photo gallery with lightbox effect */}
                  <div className="mb-6">
                    <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto mb-4">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
                          <img 
                            src={sampleContent.image} 
                            alt={`Gallery ${i + 1}`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ 
                              filter: i === 1 ? 'sepia(0.3)' : 
                                     i === 2 ? 'grayscale(0.5)' : 
                                     i === 3 ? 'hue-rotate(20deg)' : 'none' 
                            }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <Camera className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Button variant="ghost" size="sm" className="text-primary">
                        <Camera className="w-4 h-4 mr-2" />
                        View All Photos (24)
                      </Button>
                    </div>
                  </div>

                  {/* Interactive RSVP form */}
                  <div className="bg-background/30 rounded-lg p-4 mb-6 backdrop-blur-sm border border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-sm">Quick RSVP</h3>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Live
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Your name..." 
                        className="text-xs h-8"
                        value="Sarah M."
                        readOnly
                      />
                      <Button 
                        size="sm" 
                        style={{ backgroundColor: theme.primary, color: 'white' }}
                        onClick={() => setGuestCount(prev => prev + 1)}
                        className="h-8 hover:scale-105 transition-transform"
                      >
                        ✓ Going
                      </Button>
                    </div>
                    <Progress value={75} className="mt-2 h-1" />
                    <div className="text-xs text-foreground/60 mt-1">75% response rate</div>
                  </div>

                  {/* Advanced interactive elements */}
                  <div className="flex flex-wrap gap-3 justify-center mb-4">
                    <Button 
                      style={{ backgroundColor: theme.primary, color: 'white' }}
                      className="hover:scale-105 transition-transform shadow-lg"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      {sampleContent.buttonText}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="border-primary/30 hover:scale-105 transition-transform"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Music className="w-4 h-4 mr-2 animate-pulse" /> : <Play className="w-4 h-4 mr-2" />}
                      {isPlaying ? "Playing..." : "Our Song"}
                    </Button>
                    
                    <Button variant="outline" className="border-primary/30 hover:scale-105 transition-transform">
                      <MapPin className="w-4 h-4 mr-2" />
                      Location
                    </Button>
                    
                    <Button variant="outline" className="border-primary/30 hover:scale-105 transition-transform">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Guestbook ({guestCount})
                    </Button>
                  </div>

                  {/* Live activity feed */}
                  <div className="bg-background/20 rounded-lg p-3 backdrop-blur-sm border border-primary/10">
                    <div className="text-xs text-foreground/60 mb-2">💫 Live Activity</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>Emma just RSVP'd "Yes" 2m ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Michael left a message 5m ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>3 new photos uploaded 12m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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