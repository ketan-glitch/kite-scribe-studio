import { Rocket } from "lucide-react";

const LaunchSection = () => {
  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-2xl text-center">
        <Rocket className="w-10 h-10 mx-auto mb-4 animate-float" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">We're Launching Soon!</h2>
        <p className="text-primary-foreground/70 text-lg mb-8">
          Stay tuned for the grand opening of KITE STATIONARY in Chennai.
        </p>

        <div className="flex justify-center gap-4">
          {[
            { label: "Instagram", href: "#" },
            { label: "WhatsApp", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="px-6 py-2.5 rounded-full border border-primary-foreground/30 text-sm font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;
