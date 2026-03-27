import { siteConfig } from "@/config/site";

const imageMap: Record<string, string> = {
  green: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&h=400&fit=crop&q=80",
  blue: "https://images.unsplash.com/photo-1584628804572-f84284d9f388?w=600&h=400&fit=crop&q=80",
  red: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&q=80",
  yellow: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=400&fit=crop&q=80",
};

const colorMap = {
  green: "bg-kite-green",
  blue: "bg-kite-blue",
  red: "bg-kite-red",
  yellow: "bg-kite-yellow",
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-28 px-6 bg-section-alt">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">{siteConfig.products.heading}</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto tracking-wide">{siteConfig.products.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.products.categories.map((cat) => {
            const accentBg = colorMap[cat.colorKey];
            return (
              <div key={cat.title} className="group bg-card rounded-2xl overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 border border-border/50">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={imageMap[cat.colorKey]}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${accentBg}`} />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg mb-1.5">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
