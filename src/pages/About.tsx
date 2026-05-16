import { motion } from "motion/react";
import { ShieldCheck, Users, Target, Zap, CheckCircle2, ArrowRight, BadgeDollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Safety First",
      desc: "We strictly adhere to New Zealand electrical standards to ensure the highest safety for your home and business."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Customer Focused",
      desc: "Your satisfaction is our priority. We communicate clearly, arrive on time, and respect your property."
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Quality Workmanship",
      desc: "From premium materials to precise installations, we never cut corners on the quality of our work."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Innovation & Efficiency",
      desc: "We stay updated with the latest electrical technologies to provide energy efficient and modern solutions."
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10" />,
      title: "Affordable Rates",
      desc: "We offer competitive pricing and transparent quotes with no hidden fees for all our electrical services."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "24/7 Support",
      desc: "Electrical emergencies can happen anytime. Our team is available around the clock to assist you when you need it most."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <section className="relative text-white pt-32 pb-24 px-4 md:px-6 mb-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url('/images/aboutus.jpg')`, 
          }}
        >
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent1/10 -skew-x-12 opacity-30 transform origin-top hidden md:block z-0" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="font-sans text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Plug & Power Electrical is your trusted local electrical service provider in Auckland. We bring expertise, reliability, and precision to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-sans text-accent1 font-bold tracking-widest uppercase text-sm mb-2">Our Story</h2>
            <h3 className="font-serif text-4xl font-bold text-primary">
              Leading the Charge in Auckland's Electrical Services
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed text-lg">
              Founded by <span className="font-bold text-slate-800">Ashish Patel</span> and <span className="font-bold text-slate-800">Ravi Patel</span>, Plug & Power Electrical was built on a simple premise: to provide Auckland residents and businesses with honest, high quality electrical work that stands the test of time.
            </p>
            <p className="font-sans text-slate-600 leading-relaxed text-lg">
              What started as a small team tackling residential wiring has grown into a structured operation equipped for large commercial fit outs, new builds, and comprehensive smart home upgrades. Despite our growth, we remain true to our local roots, prioritizing personal relationships, clear communication, and meticulous attention to detail.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-accent1" /> Fully Registered & Licensed Electricians
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-accent1" /> Comprehensive Public Liability Insurance
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-accent1" /> 100% Workmanship Guarantee
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img 
                src="/images/about_img.png" 
                alt="Electricians working on a project" 
                className="w-full h-full object-cover"
              />
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                   <h4 className="font-serif text-2xl font-bold mb-2">Our Promise</h4>
                   <p className="text-white/90 leading-relaxed font-medium">
                     "To deliver electrical solutions that are safe, durable, and completed to the highest New Zealand standards."
                   </p>
                </div>
              </div>
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent1 rounded-full mix-blend-multiply opacity-20 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent2 rounded-full mix-blend-multiply opacity-20 hidden md:block"></div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-accent1 font-bold tracking-widest uppercase text-sm mb-4 inline-block relative after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-accent1">Our Core Values</h2>
            <h3 className="font-serif text-4xl font-bold text-primary mb-6">
              What Drives Us Forward
            </h3>
            <p className="text-slate-600 font-sans text-lg">
              These principles are embedded in everything we do, from the first point of contact to the final switch-on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                className="bg-slate-50 hover:bg-white relative overflow-hidden rounded-2xl p-8 border border-slate-200 hover:border-transparent group z-0 transition-all duration-300"
              >
                {/* Backsround Shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent1/5 rounded-bl-full -z-10 group-hover:scale-[2] transition-transform duration-700 ease-in-out"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent2/5 rounded-tr-full -z-10 group-hover:scale-[2] transition-transform duration-700 ease-in-out"></div>
                
                <div className="bg-white w-20 h-20 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-accent1 group-hover:border-accent1 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <div className="text-primary group-hover:text-white transition-colors duration-500">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-serif font-bold text-2xl text-primary mb-3 group-hover:text-accent1 transition-colors duration-300">{value.title}</h4>
                <p className="font-sans text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  {value.desc}
                </p>
                
                {/* Decorative bottom line animation */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-accent1 to-accent2 group-hover:w-full transition-all duration-500 ease-out"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 opacity-10">
               <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                     <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="white" strokeWidth="2"/>
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cta-pattern)" />
               </svg>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to start your next project?
              </h2>
              <p className="text-slate-300 text-lg mb-10">
                Partner with Auckland's most trusted electricians. Get in touch with us today to discuss your requirements and receive a free quote.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-8 py-4 bg-accent1 hover:bg-accent1/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-accent1/30 flex items-center justify-center gap-2"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/30 text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
