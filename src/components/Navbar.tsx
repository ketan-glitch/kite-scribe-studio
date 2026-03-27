import kiteLogo from "@/assets/kite-logo.jpeg";
import { siteConfig } from "@/config/site";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-5xl flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
          <img src={kiteLogo} alt={`${siteConfig.name} Logo`} className="h-10 w-10 rounded-md object-contain" />
          <span className="font-heading text-lg font-semibold tracking-[0.25em]">{siteConfig.name}</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {siteConfig.navLinks.map((section) => (
            <button key={section} onClick={() => scrollTo(section)} className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 capitalize tracking-[0.2em] uppercase">
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
