import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white text-slate-900 shadow-md py-3"
          : "bg-transparent text-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Zap className="h-8 w-8 text-accent1 group-hover:text-accent2 duration-300" />
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
            PLUG <span className="text-accent1">&</span> POWER
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "hover:text-accent1 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent1 hover:after:w-full after:transition-all after:duration-300",
                location.pathname === link.path && !isScrolled ? "text-accent2" : "",
                location.pathname === link.path && isScrolled ? "text-primary" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#quote"
            className="px-6 py-2.5 bg-accent1 hover:bg-accent2 text-slate-900 font-semibold rounded-md shadow-sm transition-colors duration-300 transform hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-current"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white text-slate-900 shadow-lg border-t border-slate-100 flex flex-col pt-2 pb-6 px-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "py-2 font-medium border-b border-slate-100",
                location.pathname === link.path ? "text-primary font-bold" : ""
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#quote"
            className="mt-2 text-center py-3 w-full bg-primary text-white font-semibold rounded-md shadow-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
