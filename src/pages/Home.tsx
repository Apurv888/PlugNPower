import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Home as HomeIcon, 
  Building2, 
  BatteryCharging, 
  Video, 
  Wrench, 
  ThermometerSnowflake,
  FileBadge,
  Award,
  BadgeDollarSign,
  Briefcase,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";
import aboutImage from "@/src/assets/images/regenerated_image_1778497863953.png";

// --- Sections ---

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-32">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')`, 
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent1/20 text-accent2 border border-accent1/30 rounded-full mb-6 font-sans text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>Master Electricians Auckland</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Auckland’s Most Trusted Sparkies: <span className="text-accent1">Powering Your Home & Business.</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-slate-200 mb-8 max-w-xl leading-relaxed">
              Professional, Safe, and Affordable electrical solutions across the City of Sails. From residential wiring to commercial fit-outs, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4 relative z-50">
              <a 
                href="#quote"
                className="px-8 py-4 bg-accent1 hover:bg-accent2 text-primary font-bold rounded-md shadow-lg transition-transform transform hover:-translate-y-1"
              >
                Get a Free Quote
              </a>
              <Link 
                to="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-md backdrop-blur-sm transition-colors border border-white/20"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-full max-w-sm mx-auto lg:ml-auto lg:mr-0 relative z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border-t-4 border-accent1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-primary leading-none">4.9</h3>
                  <div className="flex items-center gap-1 mt-2 text-yellow-500">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <p className="text-slate-500 font-sans text-xs mt-1">Based on <strong>164 reviews</strong></p>
                </div>
                <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center p-2 shrink-0 shadow-sm border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-accent1/20 text-accent2 flex items-center justify-center font-bold font-serif text-sm">S</div>
                    <div>
                      <div className="font-bold text-primary font-serif text-sm">Sarah Jenkins</div>
                      <div className="text-xs text-slate-500">1 week ago</div>
                    </div>
                  </div>
                  <p className="text-slate-600 font-sans text-sm italic leading-snug">"Plug & Power rewired our entire house. Clean, fast, and no hidden costs at all. Highly professional sparkies!"</p>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-4">
                <a href="#quote" className="block w-full text-center bg-primary hover:bg-secondary text-white font-bold py-2.5 px-4 rounded-lg transition-colors duration-300 text-sm">
                  Join Our Happy Clients
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const trusts = [
    { icon: <ShieldCheck className="h-8 w-8 text-accent1" />, text: "Fully Licensed & Insured" },
    { icon: <CheckCircle2 className="h-8 w-8 text-accent1" />, text: "NZ Standards Compliant" },
    { icon: <Clock className="h-8 w-8 text-accent1" />, text: "Available 24/7 Emergencies" },
  ];

  return (
    <section className="bg-secondary/10 border-b border-slate-200 py-8 relative z-20 -mt-10 mx-4 md:mx-auto md:max-w-5xl rounded-lg shadow-xl bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {trusts.map((trust, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex items-center justify-center gap-4 pt-4 md:pt-0 first:pt-0"
            >
              <div className="p-3 bg-secondary/10 rounded-full">
                {trust.icon}
              </div>
              <span className="font-serif font-bold text-primary text-lg">{trust.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 md:py-28 overflow-hidden bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <h2 className="font-sans text-accent1 font-bold tracking-widest uppercase text-sm mb-2">Who We Are</h2>
              <div className="h-1 w-1/2 bg-accent1 rounded-full"></div>
            </div>
            
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              Electrical Safety You Can Rely On
            </h3>
            
            <p className="font-sans text-slate-600 leading-relaxed text-lg pt-4">
              PLUG & POWER ELECTRICAL LTD provides professional and reliable electrical services for residential, commercial, and office spaces. With skilled Auckland-based electricians and high-quality workmanship, we focus on safety, efficiency, and complete customer satisfaction on every project.
            </p>
            <p className="font-sans text-slate-600 leading-relaxed text-lg pb-6">
               Whether you need a quick repair at your home, a comprehensive switchboard upgrade, or a complete commercial fit-out, our local sparkies are here to power your needs out to industry-certified standards.
            </p>

            <ul className="space-y-4">
              {[
                "Work carried out to strict NZ Master Electrician standards.",
                "Full project support—from design to installation & testing.",
                "Clean, jargon-free quotes with no hidden costs."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent1 shrink-0" />
                  <span className="font-sans text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <Link to="/about" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent1 transition-colors">
                Read Our Story <Zap className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-8 lg:mt-0"
          >
            <img 
              src={aboutImage} 
              alt="Experienced Auckland Electrician" 
              className="relative rounded-2xl shadow-2xl object-cover h-[400px] sm:h-[500px] w-full"
            />
            
            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-primary text-white p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-4">
              <div className="text-4xl sm:text-5xl font-serif font-black text-accent1">15+</div>
              <div className="font-sans font-bold leading-tight text-sm sm:text-base">
                Years of <br/> Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const servicesList = [
    { icon: <HomeIcon className="h-8 w-8" />, title: "House Wiring", desc: "Complete wiring and rewiring for Auckland homes with minimal disruption." },
    { icon: <Building2 className="h-8 w-8" />, title: "Commercial Works", desc: "Reliable maintenance and fit-outs for offices and commercial spaces." },
    { icon: <Wrench className="h-8 w-8" />, title: "New Builds", desc: "Tailored electrical solutions for residential new building projects." },
    { icon: <Zap className="h-8 w-8" />, title: "Switchboards", desc: "Modern switchboard upgrades to handle today's electrical loads safely." },
    { icon: <ThermometerSnowflake className="h-8 w-8" />, title: "Heat Pumps", desc: "Energy-efficient heat pump and ventilation installation." },
    { icon: <Video className="h-8 w-8" />, title: "CCTV & Alarms", desc: "Security alarm systems and CCTV installation to protect your property." },
    { icon: <ShieldCheck className="h-8 w-8" />, title: "Safety Inspections", desc: "Comprehensive continuous electrical safety inspections for peace of mind." },
    { icon: <BatteryCharging className="h-8 w-8" />, title: "EV Chargers", desc: "Home and commercial electric vehicle charging system installations." },
    { icon: <FileBadge className="h-8 w-8" />, title: "Test & Tag", desc: "Appliance testing and tagging services to ensure workplace compliance." },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans text-accent1 font-bold tracking-widest uppercase text-sm mb-4 inline-block relative after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-accent1">What We Do</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Electrical Services
            </h3>
            <p className="font-sans text-slate-600 text-lg">
              From residential homes to commercial spaces, PLUG & POWER is here to power your needs—day or night.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-accent1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-16 w-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent1 transition-colors mb-6">
                {svc.icon}
              </div>
              <h4 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{svc.title}</h4>
              <p className="font-sans text-slate-600 mb-6 leading-relaxed">
                {svc.desc}
              </p>
              <Link to="/services" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent1 transition-colors gap-1 group/link">
                Learn more <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { icon: <Award className="h-10 w-10 text-primary" />, title: "Experienced & Qualified", desc: "Our team consists of highly skilled, NZ-rated electricians." },
    { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: "Safe & Industry-Standard", desc: "No corners cut. We work to strict Master Electricians standards." },
    { icon: <BadgeDollarSign className="h-10 w-10 text-primary" />, title: "Competitive Pricing", desc: "Affordable, transparent quotes with absolutely no hidden fees." },
    { icon: <Briefcase className="h-10 w-10 text-primary" />, title: "Professional Service", desc: "Fast, reliable, and punctual. We treat your property with respect." },
  ];

  return (
    <section className="py-20 bg-primary/5 border-y border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="font-sans text-accent1 font-bold tracking-widest uppercase text-sm mb-2">Why Choose Us</h2>
             <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Peace of mind. Guaranteed.
            </h3>
            <p className="font-sans text-slate-600 text-lg mb-8">
              We don't just provide services—we provide peace of mind. From thorough inspections to complex commercial installations, we make sure your property is safe and powered.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary transition-colors shadow-lg">
              Book a Sparky Now
            </Link>
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
             {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex gap-4 items-start hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-accent1/20 rounded-lg shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-primary mb-2">{reason.title}</h4>
                    <p className="font-sans text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Sarah from Ponsonby", quote: "Plug & Power rewired our old villa completely. They were on time, incredibly tidy, and explained everything clearly. Highly recommend these guys for any residential work!", rating: 5 },
    { name: "Mike from North Shore", quote: "Had an emergency power outage at our retail store. The team replied instantly and had us back running smoothly within hours. Fantastic service and very fair pricing.", rating: 5 },
    { name: "David from Mt Eden", quote: "Got them in for complete switchboard upgrades and heat pump installation. The sparkies were absolute legends, hard-working and professional. 10/10.", rating: 5 },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
       {/* Decorative bg element */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 origin-top"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-sans text-accent1 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
              <h3 className="font-serif text-4xl font-bold text-primary mb-4">
                What Our Clients Say
              </h3>
              <p className="font-sans text-slate-600 text-lg max-w-xl mx-auto">
                Don't take our word for it. Here is what locals across Auckland say about our electrical services.
              </p>
            </motion.div>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-slate-100 font-serif text-7xl leading-none font-black italic">"</div>
                
                <div className="flex gap-1 mb-6 text-yellow-400 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  ))}
                </div>
                
                <p className="font-sans text-slate-700 leading-relaxed mb-8 relative z-10 italic">"{review.quote}"</p>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center font-serif text-xl font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-primary">{review.name}</h5>
                    <div className="text-xs text-slate-500 font-sans">Verified Customer</div>
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
       </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do you service all areas of Auckland?", a: "Yes, we are proudly Auckland-wide. From Rodney to Franklin, our local sparkies can travel to your residential or commercial property." },
    { q: "Are your electricians licensed and insured?", a: "Absolutely. All our electricians are fully licensed, registered with the EWRB, and our company holds comprehensive public liability insurance." },
    { q: "How much does it cost to get a quote?", a: "We offer completely free, no-obligation quotes for most jobs such as rewiring, new builds, and commercial fit-outs." },
    { q: "Do you handle emergency electrical issues?", a: "Yes, we offer 24/7 emergency services. If you have a dangerous fault or total power loss, call us immediately and we'll dispatch a technician." },
    { q: "Can you provide Master Electrician guarantees?", a: "We work to the highest Master Electricians standards, ensuring your work is guaranteed, safe, and fully compliant with New Zealand electrical codes." }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-sans text-accent1 font-bold tracking-widest uppercase text-sm mb-2">FAQ</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Find Solutions In Our FAQs
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white border text-left border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-serif font-bold text-lg text-primary text-left">{faq.q}</span>
                <ChevronDown className={cn("h-5 w-5 text-accent1 transition-transform duration-300 shrink-0", open === i ? "transform rotate-180" : "")} />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="px-6 pb-6 text-slate-600 font-sans leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="quote" className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10">
         <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="white" strokeWidth="2"/>
               </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
         </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-sans text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              Get a free, no-obligation quote for your electrical project. Our experienced local Auckland team is ready to power up your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="w-full sm:w-auto px-8 py-4 bg-accent1 hover:bg-accent2 text-primary font-bold rounded-md shadow-lg transition-transform transform hover:-translate-y-1 text-lg">
                 Request a Free Quote
               </button>
               <a href="tel:09-123-4567" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-md backdrop-blur-sm transition-colors text-lg flex items-center justify-center gap-2">
                 Call 09-123-4567
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
