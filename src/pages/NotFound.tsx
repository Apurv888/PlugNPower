import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <div className="mb-6 text-7xl">
          🕵️‍♂️
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
          Oops!
        </h1>
        <p className="font-sans text-lg text-slate-600 mb-8 max-w-md mx-auto">
          This page does not exist...
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
