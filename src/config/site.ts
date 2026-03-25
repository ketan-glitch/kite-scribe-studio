export const siteConfig = {
  // Brand
  name: "KITE",
  fullName: "KITE STATIONARY",
  tagline: "Think. Create. Repeat.",
  description: "Your one-stop shop for quality stationery, fine writing & creative supplies",
  mission: "Helping you think better, create freely, and repeat success every day.",
  aboutText:
    "KITE STATIONARY is a creative and quality-focused stationery brand built for students, artists, and professionals. We blend affordability with a premium feel — because great ideas deserve great tools.",

  // Contact
  phone: "+91 98765 43210",
  email: "hello@kiteshop.com",
  location: "Chennai, Tamil Nadu",

  // Social
  socials: {
    instagram: "#",
    whatsapp: "#",
  },

  // Navigation sections
  navLinks: ["home", "products", "about", "contact"] as const,

  // Product categories (icon names reference lucide-react)
  products: {
    heading: "Our Products",
    subtitle: "Everything you need to think, create, and succeed",
    categories: [
      { title: "School Supplies", description: "Notebooks, pens, pencils, geometry boxes", colorKey: "green" as const },
      { title: "Office Supplies", description: "Files, organizers, premium writing tools", colorKey: "blue" as const },
      { title: "Art Materials", description: "Sketchbooks, paints, brushes", colorKey: "red" as const },
      { title: "Printing & Photocopy", description: "Quick print, xerox, document services", colorKey: "yellow" as const },
    ],
  },

  // Launch / announcement
  launchText: "We're Launching Soon!",
  launchSubtext: "Stay tuned for the grand opening of KITE STATIONARY in Chennai.",
  openingSoonLabel: "Opening Soon",

  // Footer
  copyright: `© ${new Date().getFullYear()} KITE STATIONARY`,
};
