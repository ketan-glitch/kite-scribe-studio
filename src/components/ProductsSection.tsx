import { BookOpen, Briefcase, Palette, Printer } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = { green: BookOpen, blue: Briefcase, red: Palette, yellow: Printer };
const colorMap = {
  green: { text: "text-kite-green", bg: "bg-kite-green/10" },
  blue: { text: "text-kite-blue", bg: "bg-kite-blue/10" },
  red: { text: "text-kite-red", bg: "bg-kite-red/10" },
  yellow: { text: "text-kite-yellow", bg: "bg-kite-yellow/10" },
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">{siteConfig.products.heading}</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">{siteConfig.products.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.products.categories.map((cat) => {
            const Icon = iconMap[cat.colorKey];
            const colors = colorMap[cat.colorKey];
            return (
              <div key={cat.title} className="group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{cat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
