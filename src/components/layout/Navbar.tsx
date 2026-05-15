import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkHeroPage = location.pathname === "/" || location.pathname === "/services" || location.pathname === "/contact" || location.pathname === "/about";

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
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const hasTransparentNav = isDarkHeroPage && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        !hasTransparentNav
          ? "bg-white text-slate-900 shadow-md py-3"
          : "bg-transparent text-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo invert={hasTransparentNav} />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "hover:text-accent1 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent1 hover:after:w-full after:transition-all after:duration-300",
                location.pathname === link.path ? "text-accent1 font-bold after:w-full" : ""
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
          className="lg:hidden p-2 relative w-10 h-10 flex items-center justify-center focus:outline-none text-current"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-5 flex flex-col justify-center relative">
            <span
              className={cn(
                "bg-current h-[2px] rounded-full transition-all duration-300 ease-out absolute inset-x-0",
                mobileMenuOpen ? "w-6 rotate-45" : "w-6 -translate-y-2"
              )}
            ></span>
            <span
              className={cn(
                "bg-current h-[2px] rounded-full transition-all duration-300 ease-out absolute inset-x-0 right-0 ml-auto",
                mobileMenuOpen ? "w-0 opacity-0" : "w-4 opacity-100"
              )}
            ></span>
            <span
              className={cn(
                "bg-current h-[2px] rounded-full transition-all duration-300 ease-out absolute inset-x-0",
                mobileMenuOpen ? "w-6 -rotate-45" : "w-6 translate-y-2"
              )}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl text-white shadow-2xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "block py-3 text-lg font-medium transition-all duration-300 hover:translate-x-2",
                      location.pathname === link.path ? "text-accent1 font-bold" : "text-slate-300"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <a
                  href="#quote"
                  className="block w-full text-center py-4 bg-accent1 hover:bg-accent2 text-primary font-bold rounded-xl shadow-[0_0_20px_rgba(255,165,0,0.3)] transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
