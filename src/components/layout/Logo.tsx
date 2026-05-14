import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export function Logo({ className = "", invert = false }: LogoProps) {
  const textColor = invert ? "text-white" : "text-primary";
  
  return (
    <Link to="/" className={`flex items-center gap-2 lg:gap-3 group ${className}`}>
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 shrink-0">
        <img src="/image.png" alt="PowerConnect Logo" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
      </div>
      
      <div className="flex flex-col justify-center translate-y-0.5">
        <span className={`font-black text-xl sm:text-2xl tracking-wide leading-none ${textColor}`}>
          PLUG & POWER
        </span>
        <div className="flex items-center gap-2 mt-1.5 w-full hidden sm:flex">
          <div className="h-[1.5px] bg-accent1 flex-grow"></div>
          <span className="text-accent1 text-[9px] sm:text-[10px] font-black tracking-[0.3em] leading-none uppercase">
            Electrical
          </span>
          <div className="h-[1.5px] bg-accent1 flex-grow"></div>
        </div>
      </div>
    </Link>
  );
}
