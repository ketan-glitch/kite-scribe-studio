import { siteConfig } from "@/config/site";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">About Us</h2>

        <div className="flex gap-1.5 justify-center mb-10">
          <span className="w-10 h-1 rounded-full bg-kite-red" />
          <span className="w-10 h-1 rounded-full bg-kite-green" />
          <span className="w-10 h-1 rounded-full bg-kite-yellow" />
          <span className="w-10 h-1 rounded-full bg-kite-blue" />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{siteConfig.aboutText}</p>

        <p className="text-foreground font-heading font-medium text-2xl italic leading-relaxed">
          "{siteConfig.mission}"
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
