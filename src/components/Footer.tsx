import kiteLogo from "@/assets/kite-logo.jpeg";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-footer-bg text-footer-fg py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
            <img src={kiteLogo} alt={siteConfig.name} className="h-10 w-10 rounded-lg object-contain" />
            <div>
              <span className="font-heading font-semibold tracking-[0.25em] text-lg">{siteConfig.name}</span>
              <p className="text-footer-muted text-xs tracking-[0.15em] uppercase mt-0.5">Local Craft · Kalyan</p>
            </div>
          </div>

          <div className="flex gap-8">
            {siteConfig.navLinks.map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="text-xs text-footer-muted hover:text-footer-fg transition-colors duration-300 capitalize tracking-[0.2em] uppercase">
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Local craft badge & map reference */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a href="https://www.google.com/maps?q=19.244662647703226,73.12349102030598" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kite-yellow"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-xs tracking-[0.1em] text-footer-muted">Proudly from Kalyan, Maharashtra</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-footer-muted">
            <span>{siteConfig.copyright}</span>
            <span className="hidden md:inline">·</span>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
