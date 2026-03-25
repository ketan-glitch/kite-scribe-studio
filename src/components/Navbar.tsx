import kiteLogo from "@/assets/kite-logo.jpeg";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
          <img src={kiteLogo} alt="KITE Logo" className="h-10 w-10 rounded-md object-contain" />
          <span className="font-heading text-lg font-semibold tracking-[0.2em]">KITE</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["home", "products", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors capitalize tracking-wide"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
