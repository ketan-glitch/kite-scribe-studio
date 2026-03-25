import { BookOpen, Briefcase, Palette, Printer } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "School Supplies",
    description: "Notebooks, pens, pencils, geometry boxes",
    color: "text-kite-green",
    bg: "bg-kite-green/10",
  },
  {
    icon: Briefcase,
    title: "Office Supplies",
    description: "Files, organizers, premium writing tools",
    color: "text-kite-blue",
    bg: "bg-kite-blue/10",
  },
  {
    icon: Palette,
    title: "Art Materials",
    description: "Sketchbooks, paints, brushes",
    color: "text-kite-red",
    bg: "bg-kite-red/10",
  },
  {
    icon: Printer,
    title: "Printing & Photocopy",
    description: "Quick print, xerox, document services",
    color: "text-kite-yellow",
    bg: "bg-kite-yellow/10",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
          Everything you need to think, create, and succeed
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${cat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <cat.icon className={`w-6 h-6 ${cat.color}`} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
