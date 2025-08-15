import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Template {
  id: string;
  title: string;
  category: string;
  color: string;
  description?: string;
  features?: string[];
  type?: string;
  pages?: string[];
  difficulty?: string;
}

interface TemplateCreatorProps {
  template: Template;
  children: React.ReactNode;
}

const TemplateCreator = ({ template, children }: TemplateCreatorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [websiteName, setWebsiteName] = useState("");
  const [message, setMessage] = useState("");
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedImages(prev => [...prev, ...files].slice(0, 10)); // Max 10 images
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const generateWebsite = async () => {
    if (!websiteName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter a website name.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate website generation
    setTimeout(() => {
      setIsGenerating(false);
      setIsOpen(false);
      
      // Generate a mock URL based on template type
      const templateType = template.type || 'single-page';
      const mockUrl = `https://your-gift.site/${websiteName.toLowerCase().replace(/\s+/g, '-')}-${template.id}-${Math.random().toString(36).substr(2, 8)}`;
      
      const pageCount = template.pages ? template.pages.length : 1;
      const templateDescription = templateType === 'multi-page' 
        ? `${pageCount} interactive pages`
        : templateType === 'interactive'
        ? 'Interactive experience'
        : 'Beautiful single page';
      
      toast({
        title: "🎉 Your Gift Website is Ready!",
        description: `${templateDescription} created at: ${mockUrl}`,
      });
      
      // Reset form
      setWebsiteName("");
      setMessage("");
      setUploadedImages([]);
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Create Your {template.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Website Name */}
          <div className="space-y-2">
            <Label htmlFor="website-name">Website Name *</Label>
            <Input
              id="website-name"
              placeholder="e.g., Happy Birthday Sarah, Our Love Story, etc."
              value={websiteName}
              onChange={(e) => setWebsiteName(e.target.value)}
            />
          </div>

          {/* Personal Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Personal Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Write a heartfelt message that will be displayed on your website..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          {/* Photo Upload */}
          <div className="space-y-4">
            <Label>Upload Photos (Optional - Up to 10)</Label>
            
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Drop your photos here or click to browse
                  </p>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <Label htmlFor="photo-upload">
                    <Button variant="outline" className="cursor-pointer" asChild>
                      <span>Choose Photos</span>
                    </Button>
                  </Label>
                </div>
              </div>
            </div>

            {/* Uploaded Images Preview */}
            {uploadedImages.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {uploadedImages.map((file, index) => (
                  <Card key={index} className="relative group">
                    <CardContent className="p-2">
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
                        <Image className="w-8 h-8 text-muted-foreground" />
                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                          <span className="text-xs text-primary font-medium">
                            {file.name.length > 15 ? file.name.slice(0, 15) + "..." : file.name}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeImage(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Generate Button */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={generateWebsite}
              disabled={isGenerating}
              className="flex-1"
              variant="hero"
            >
              {isGenerating ? "Creating Your Website..." : "Generate Website"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isGenerating}
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateCreator;