import kiteLogo from "@/assets/kite-logo.jpeg";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={kiteLogo} alt="KITE" className="h-8 w-8 rounded object-contain" />
            <span className="font-heading font-semibold tracking-[0.2em]">KITE</span>
          </div>

          <div className="flex gap-6">
            {["home", "products", "about", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 KITE STATIONARY</span>
          <span>Chennai, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
