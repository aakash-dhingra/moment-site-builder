import { Heart, Cake, Gift, Flower, Gem, Coffee, Star, Music, Camera, MessageCircle, Calendar, PartyPopper } from "lucide-react";

export interface Template {
  id: string;
  title: string;
  category: string;
  icon: any;
  color: string;
  description: string;
  features: string[];
  type: 'single-page' | 'multi-page' | 'interactive' | string;
  pages?: string[];
  interactiveElements?: string[];
  difficulty: 'simple' | 'advanced' | 'premium' | string;
}

export const templateCategories = [
  {
    name: "Romantic",
    templates: [
      {
        id: "romantic-1",
        title: "Love Story Timeline",
        category: "Romantic",
        icon: Heart,
        color: "romantic",
        description: "Interactive timeline of your relationship milestones",
        features: ["Photo timeline", "Memory cards", "Love notes", "Music playlist"],
        type: "multi-page",
        pages: ["Cover", "Our Story", "Memories", "Future Plans"],
        interactiveElements: ["Scrolling timeline", "Photo lightbox", "Audio player"],
        difficulty: "advanced"
      },
      {
        id: "romantic-2", 
        title: "Digital Love Letter",
        category: "Romantic",
        icon: MessageCircle,
        color: "romantic",
        description: "Elegant single-page love letter with romantic animations",
        features: ["Animated text", "Background music", "Photo collage"],
        type: "single-page",
        interactiveElements: ["Typewriter effect", "Floating hearts", "Photo carousel"],
        difficulty: "simple"
      },
      {
        id: "romantic-3",
        title: "Anniversary Celebration",
        category: "Romantic", 
        icon: Star,
        color: "romantic",
        description: "Multi-page anniversary site with interactive elements",
        features: ["Year counter", "Photo gallery", "Message board", "Memory lane"],
        type: "interactive",
        pages: ["Anniversary Counter", "Photo Gallery", "Messages", "Future Dreams"],
        interactiveElements: ["Live counter", "Photo upload", "Guest messages"],
        difficulty: "premium"
      }
    ]
  },
  {
    name: "Birthday",
    templates: [
      {
        id: "birthday-1",
        title: "Birthday Party Invitation",
        category: "Birthday",
        icon: PartyPopper,
        color: "celebration", 
        description: "Interactive party invitation with RSVP system",
        features: ["RSVP form", "Party details", "Photo memories", "Countdown timer"],
        type: "interactive",
        pages: ["Invitation", "Party Details", "RSVP", "Photo Memories"],
        interactiveElements: ["RSVP system", "Countdown timer", "Photo upload"],
        difficulty: "advanced"
      },
      {
        id: "birthday-2",
        title: "Birthday Wishes Collection",
        category: "Birthday",
        icon: Cake,
        color: "celebration",
        description: "Collect birthday wishes from friends and family",
        features: ["Wish collection", "Photo gallery", "Video messages", "Birthday timeline"],
        type: "multi-page", 
        pages: ["Birthday Person", "Leave a Wish", "All Wishes", "Photo Gallery"],
        interactiveElements: ["Wish submission", "Photo upload", "Video recording"],
        difficulty: "premium"
      },
      {
        id: "birthday-3",
        title: "Simple Birthday Card",
        category: "Birthday",
        icon: Gift,
        color: "celebration",
        description: "Beautiful animated birthday card",
        features: ["Animated card", "Personal message", "Photo slideshow"],
        type: "single-page",
        interactiveElements: ["Card animation", "Photo slideshow", "Confetti effect"],
        difficulty: "simple"
      }
    ]
  },
  {
    name: "Apology",
    templates: [
      {
        id: "apology-1",
        title: "Heartfelt Apology Journey",
        category: "Apology",
        icon: Flower,
        color: "gentle",
        description: "Multi-step apology with reflection and promises",
        features: ["Apology steps", "Memory lane", "Promise cards", "Forgiveness request"],
        type: "multi-page",
        pages: ["I'm Sorry", "What Happened", "Our Memories", "My Promise"],
        interactiveElements: ["Step navigation", "Memory timeline", "Promise maker"],
        difficulty: "advanced"
      },
      {
        id: "apology-2",
        title: "Simple Sorry Note", 
        category: "Apology",
        icon: MessageCircle,
        color: "gentle",
        description: "Sincere and elegant apology message",
        features: ["Personal message", "Gentle animations", "Memory photo"],
        type: "single-page",
        interactiveElements: ["Gentle animations", "Photo fade-in"],
        difficulty: "simple"
      }
    ]
  },
  {
    name: "Proposal",
    templates: [
      {
        id: "proposal-1",
        title: "Epic Proposal Story",
        category: "Proposal",
        icon: Gem,
        color: "elegant",
        description: "Complete proposal experience with your love story",
        features: ["Love story", "Photo journey", "The proposal", "Ring reveal"],
        type: "multi-page",
        pages: ["How We Met", "Our Journey", "Why I Love You", "Will You Marry Me?"],
        interactiveElements: ["Story progression", "Photo reveals", "Ring animation"],
        difficulty: "premium"
      },
      {
        id: "proposal-2",
        title: "Simple Proposal",
        category: "Proposal", 
        icon: Heart,
        color: "elegant",
        description: "Elegant and direct proposal page",
        features: ["Beautiful design", "Personal message", "Ring showcase"],
        type: "single-page",
        interactiveElements: ["Ring animation", "Yes/No buttons"],
        difficulty: "simple"
      }
    ]
  },
  {
    name: "Gratitude",
    templates: [
      {
        id: "gratitude-1",
        title: "Thank You Journey",
        category: "Gratitude",
        icon: Gift,
        color: "professional",
        description: "Multi-page thank you experience",
        features: ["Gratitude story", "Photo memories", "Impact showcase", "Future connection"],
        type: "multi-page", 
        pages: ["Thank You", "What You Mean to Me", "Our Memories", "Stay Connected"],
        interactiveElements: ["Memory slideshow", "Impact counter", "Contact form"],
        difficulty: "advanced"
      },
      {
        id: "gratitude-2",
        title: "Simple Thank You",
        category: "Gratitude",
        icon: Heart,
        color: "professional", 
        description: "Beautiful thank you note",
        features: ["Personal message", "Photo inclusion", "Elegant design"],
        type: "single-page",
        interactiveElements: ["Photo reveal", "Message animation"],
        difficulty: "simple"
      }
    ]
  },
  {
    name: "Invitation",
    templates: [
      {
        id: "invitation-1",
        title: "Coffee Date Adventure",
        category: "Invitation",
        icon: Coffee,
        color: "gentle",
        description: "Creative coffee date invitation with location ideas",
        features: ["Personal intro", "Date ideas", "Location map", "Contact info"],
        type: "multi-page",
        pages: ["Hello", "Coffee Date Ideas", "Let's Meet", "Contact"],
        interactiveElements: ["Date picker", "Location map", "RSVP form"],
        difficulty: "advanced"
      },
      {
        id: "invitation-2",
        title: "Event Invitation Hub",
        category: "Invitation",
        icon: Calendar,
        color: "gentle",
        description: "Complete event invitation with all details",
        features: ["Event details", "RSVP system", "Photo gallery", "Location info"],
        type: "interactive",
        pages: ["Event Info", "RSVP", "Gallery", "Location"],
        interactiveElements: ["RSVP tracking", "Photo upload", "Map integration"],
        difficulty: "premium"
      },
      {
        id: "invitation-3",
        title: "Simple Invite",
        category: "Invitation",
        icon: MessageCircle,
        color: "gentle",
        description: "Clean and simple invitation",
        features: ["Event details", "RSVP button", "Contact info"],
        type: "single-page",
        interactiveElements: ["RSVP button", "Contact reveal"],
        difficulty: "simple"
      }
    ]
  }
];

export const getAllTemplates = (): Template[] => {
  return templateCategories.flatMap(category => category.templates);
};

export const getTemplatesByCategory = (categoryName: string): Template[] => {
  const category = templateCategories.find(cat => cat.name === categoryName);
  return category ? category.templates : [];
};

export const getTemplateById = (id: string): Template | undefined => {
  return getAllTemplates().find(template => template.id === id);
};