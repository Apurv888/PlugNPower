import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Zap } from "lucide-react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const visitedRoutes = useRef(new Set<string>());

  useEffect(() => {
    // If we haven't visited this route yet, show the loader
    if (!visitedRoutes.current.has(location.pathname)) {
      setIsLoading(true);
      visitedRoutes.current.add(location.pathname);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      // If we have, make sure loader is off
      setIsLoading(false);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute h-32 w-32 rounded-full border-t-4 border-r-4 border-accent1 opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute h-24 w-24 rounded-full border-b-4 border-l-4 border-white opacity-40"
            />
            
            {/* Center Zap with pulse */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent1 shadow-[0_0_30px_rgba(255,165,0,0.6)]"
            >
              <Zap className="h-8 w-8 text-primary font-black ml-1" />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <h2 className="font-serif text-2xl font-bold tracking-widest text-white uppercase flex items-center gap-2">
              Plug <span className="text-accent1">&</span> Power
            </h2>
            <p className="font-sans text-sm text-slate-400 mt-2 tracking-widest animate-pulse">
              POWERING UP...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
