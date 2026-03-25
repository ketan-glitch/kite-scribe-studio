import kiteLogo from "@/assets/kite-logo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="animate-fade-in-up">
        <img src={kiteLogo} alt="KITE Stationary Logo" className="w-32 h-32 mx-auto mb-8 object-contain rounded-2xl" />
      </div>

      <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4" style={{ animationDelay: "0.1s" }}>
        Think. Create. Repeat.
      </h1>

      <div className="flex gap-1.5 my-6">
        <span className="w-3 h-3 rounded-full bg-kite-red" />
        <span className="w-3 h-3 rounded-full bg-kite-green" />
        <span className="w-3 h-3 rounded-full bg-kite-yellow" />
        <span className="w-3 h-3 rounded-full bg-kite-blue" />
      </div>

      <div className="inline-block px-5 py-2 rounded-full bg-kite-blue/10 text-kite-blue font-medium text-sm mb-6 tracking-wide">
        Opening Soon
      </div>

      <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-4 leading-relaxed">
        Your one-stop shop for quality stationery, fine writing &amp; creative supplies
      </p>

      <p className="text-muted-foreground text-sm flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        Chennai, Tamil Nadu
      </p>
    </section>
  );
};

export default HeroSection;
