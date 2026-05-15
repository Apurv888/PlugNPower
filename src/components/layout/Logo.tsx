import { Link } from 'react-router-dom';
import logoUrl from '../../assets/images/logo.png';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export function Logo({ className = "", invert = false }: LogoProps) {
  const textColor = invert ? "text-white" : "text-primary";
  const logoFilter = invert ? "invert hue-rotate-180 saturate-200 brightness-110" : "";
  
  return (
    <Link to="/" className={`flex items-center gap-2 lg:gap-3 group shrink-0 ${className}`}>
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 shrink-0">
        <img 
          src={logoUrl} 
          alt="Plug & Power Logo" 
          className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-110 ${logoFilter}`} 
        />
      </div>
      
      <div className="flex flex-col justify-center translate-y-0.5 whitespace-nowrap">
        <span className={`font-black text-xl sm:text-2xl tracking-wide leading-none ${textColor}`}>
          PLUG & POWER
        </span>
        <div className="flex items-center gap-2 mt-1.5 w-full">
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
