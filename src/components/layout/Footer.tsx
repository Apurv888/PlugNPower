import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Zap className="h-8 w-8 text-accent1 group-hover:text-accent2 duration-300" />
              <span className="font-serif text-2xl font-bold tracking-tight">
                PLUG <span className="text-accent1">&</span> POWER
              </span>
            </Link>
            <p className="text-slate-300 mt-4 leading-relaxed font-sans text-sm">
              Auckland's Most Trusted Sparkies. Safe, reliable, and Master Electricians certified for residential and commercial works.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent1 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent1 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent1 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-accent1">Sitemap</h3>
            <ul className="space-y-3 font-sans text-slate-300">
              <li><Link to="/" className="hover:text-accent2 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent2 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent2 transition-colors">Our Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent2 transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-accent2 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-accent1">Top Services</h3>
            <ul className="space-y-3 font-sans text-slate-300">
              <li><Link to="/services" className="hover:text-accent2 transition-colors">House Wiring</Link></li>
              <li><Link to="/services" className="hover:text-accent2 transition-colors">Switchboard Upgrades</Link></li>
              <li><Link to="/services" className="hover:text-accent2 transition-colors">Commercial Fit-outs</Link></li>
              <li><Link to="/services" className="hover:text-accent2 transition-colors">EV Charger Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent2 transition-colors">Heat Pump Solutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-accent1">Contact Us</h3>
            <ul className="space-y-4 font-sans text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent1 shrink-0 mt-0.5" />
                <a href="tel:09-123-4567" className="hover:text-accent2 transition-colors">09-123-4567</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent1 shrink-0 mt-0.5" />
                <a href="mailto:info@plugandpower.co.nz" className="hover:text-accent2 transition-colors">info@plugandpower.co.nz</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent1 shrink-0 mt-0.5" />
                <span>123 Sparky Avenue, Penrose<br />Auckland 1061, NZ</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent1 shrink-0 mt-0.5" />
                <span>Available 24/7 for Emergencies</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-secondary text-center text-slate-400 font-sans text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Plug & Power Electrical Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent1 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent1 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
