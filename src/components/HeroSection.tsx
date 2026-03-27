import kiteLogo from "@/assets/kite-logo.jpeg";
import { siteConfig } from "@/config/site";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      <div className="animate-fade-in-up">
        <img src={kiteLogo} alt={`${siteConfig.name} Stationary Logo`} className="w-44 h-44 md:w-56 md:h-56 mx-auto mb-10 object-contain rounded-3xl shadow-xl" />
      </div>

      <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" style={{ animationDelay: "0.1s" }}>
        {siteConfig.tagline}
      </h1>

      <div className="flex gap-2 my-8">
        <span className="w-3.5 h-3.5 rounded-full bg-kite-red" />
        <span className="w-3.5 h-3.5 rounded-full bg-kite-green" />
        <span className="w-3.5 h-3.5 rounded-full bg-kite-yellow" />
        <span className="w-3.5 h-3.5 rounded-full bg-kite-blue" />
      </div>

      <div className="inline-block px-10 py-4 rounded-full border border-kite-blue/30 bg-kite-blue/5 text-kite-blue font-medium text-base mb-8 tracking-[0.15em] uppercase hover:bg-kite-blue/10 hover:border-kite-blue/50 transition-all duration-300 cursor-default">
        {siteConfig.openingSoonLabel}
      </div>

      <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-6 leading-relaxed">
        {siteConfig.description}
      </p>

      <p className="text-muted-foreground text-sm flex items-center gap-2 tracking-[0.15em] uppercase">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        {siteConfig.location}
      </p>
    </section>
  );
};

export default HeroSection;
