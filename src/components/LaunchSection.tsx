import { Rocket } from "lucide-react";
import { siteConfig } from "@/config/site";

const LaunchSection = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-2xl text-center">
        <Rocket className="w-10 h-10 mx-auto mb-4 animate-float" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">{siteConfig.launchText}</h2>
        <p className="text-primary-foreground/70 text-lg mb-10">{siteConfig.launchSubtext}</p>

        <div className="flex justify-center gap-5">
          {Object.entries(siteConfig.socials).map(([label, href]) => (
            <a key={label} href={href} className="px-8 py-3 rounded-full border border-primary-foreground/20 text-sm font-medium tracking-[0.15em] uppercase hover:bg-primary-foreground hover:text-primary transition-all duration-300 capitalize">
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;
