import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <Coffee className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-semibold">
              Roastery <span className="text-primary">&amp; Co</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">
            A cozy speciality coffee house in the heart of Indiranagar, Bangalore — slow brewed,
            single origin, story driven.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Visit</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            12th Main, Indiranagar
            <br />
            Bangalore 560038
            <br />
            Open daily · 7am – 11pm
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Follow</h4>
          <div className="flex gap-3">
            <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a aria-label="Twitter" href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Roastery &amp; Co. Brewed with love in Bangalore.
      </div>
    </footer>
  );
}
