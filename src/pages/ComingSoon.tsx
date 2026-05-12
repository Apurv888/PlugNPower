import { motion } from "motion/react";
import { Wrench } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function ComingSoon() {
  const location = useLocation();
  const pageName = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <div className="inline-flex items-center justify-center p-4 bg-accent1/20 rounded-full mb-6">
          <Wrench className="h-12 w-12 text-primary" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
          {pageName} Page
        </h1>
        <p className="font-sans text-lg text-slate-600 mb-8 max-w-md mx-auto">
          We're currently working on the {pageName} page. It will be wired up and live shortly!
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-lg hover:bg-secondary transition-colors"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
