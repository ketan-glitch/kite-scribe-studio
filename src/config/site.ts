export const siteConfig = {
  // Brand
  name: "KITE",
  fullName: "KITE STATIONARY",
  tagline: "Think. Create. Repeat.",
  description: "Your one-stop shop for quality stationery, fine writing & creative supplies",
  mission: "Helping you think better, create freely, and repeat success every day.",
  aboutText:
    "We believe that great ideas deserve great tools. Based in Kalyan, KITE was born from a simple philosophy: Think. Create. Repeat. We curate a selection of fine stationery and premium writing instruments that blend timeless aesthetics with modern functionality. Whether you are a student, an artist, or a professional, we provide the canvas for your next big idea.",

  // Contact
  phone: "+91 83905 77189 | +91 8689814110",
  email: "kitestationery@gmail.com",
  location: "Kalyan, Maharashtra",

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
  launchSubtext: "Stay tuned for the grand opening of KITE STATIONARY in Kalyan.",
  openingSoonLabel: "Opening Soon",

  // Footer
  copyright: `© ${new Date().getFullYear()} KITE STATIONARY`,
};
