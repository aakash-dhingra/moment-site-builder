import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-hero p-2 rounded-full shadow-soft mr-3">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              GiftSites
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Creating beautiful, personalized websites for life's most precious moments
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
            <a href="#" className="hover:text-primary transition-colors">Templates</a>
            <a href="#" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
          
          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 GiftSites. Made with <Heart className="w-4 h-4 inline text-romantic" /> for special moments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;