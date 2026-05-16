import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  Zap, 
  ThermometerSnowflake, 
  ShieldCheck, 
  BatteryCharging,
  CheckCircle2,
  Home as HomeIcon,
  Building2,
  Wrench,
  Video,
  FileBadge
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const images = {
  lighting1: "/src/assets/images/lighting_solution.png",
  wiring1: "/src/assets/images/housing_solution.png",
  commercial1: "/src/assets/images/commercial_works.png",
  newbuilds1: "/src/assets/images/new_builds.png",
  switchboards1: "/src/assets/images/switchboards.png",
  heatpump1: "/src/assets/images/heatpump.png",
  cctv1: "/src/assets/images/cctv.png",
  safety1: "/src/assets/images/safety_inspection.png",
  ev1: "/src/assets/images/ev_chargers.png",
  testtag1: "/src/assets/images/test.png",
};

const services = [
  {
    id: "lighting",
    title: "1. Lighting Solution",
    icon: <Lightbulb className="h-10 w-10 text-accent1" />,
    description: "Enhance the look, feel and functionality of your space with our professional lighting solutions. Whether you're renovating a historic villa in Ponsonby or building a modern home in Albany, our expert Auckland electricians provide tailored lighting designs to meet your needs. We focus on energy efficient lighting that meets strict NZ standards, ensuring a beautiful, safely lit environment.",
    features: [
      "LED Downlights",
      "Feature & Pendant Lighting",
      "Indoor & Outdoor Lighting",
      "Smart Lighting Systems",
      "Energy Efficient Solutions"
    ],
    image: images.lighting1,
    reverse: false,
  },
  {
    id: "house-wiring",
    title: "2. House Wiring",
    icon: <HomeIcon className="h-10 w-10 text-accent1" />,
    description: "Safe, efficient and compliant electrical wiring for new builds, renovations and upgrades. We are a trusted provider of comprehensive home wiring services across the greater Auckland region. Our Master Electricians handle everything logically, ensuring every Kiwi home is powered reliably and up to current building codes.",
    features: [
      "New Home Wiring",
      "Renovations & Extensions",
      "Switchboard Upgrades",
      "Power Points & Switches",
      "Fault Finding & Repairs"
    ],
    image: images.wiring1,
    reverse: true,
  },
  {
    id: "commercial",
    title: "3. Commercial Works",
    icon: <Building2 className="h-10 w-10 text-accent1" />,
    description: "Reliable maintenance and fit outs for offices, retail stores, and commercial spaces. Our team understands that downtime costs money, which is why we offer fast, professional electrical services scaled to your business needs, completing heavy duty installations safely across New Zealand.",
    features: [
      "Office Fit outs",
      "Retail Lighting & Power",
      "Data & Communications",
      "Emergency Lighting",
      "3-Phase Power Solutions"
    ],
    image: images.commercial1,
    reverse: false,
  },
  {
    id: "new-builds",
    title: "4. New Builds",
    icon: <Wrench className="h-10 w-10 text-accent1" />,
    description: "Tailored electrical solutions for residential and commercial new building projects. Work with a trusted partner who can design and install electrical systems from the ground up, seamlessly coordinating with other trades to keep your build schedule on track.",
    features: [
      "Comprehensive Electrical Plans",
      "Underground Mains Wiring",
      "Liaison with Power Companies",
      "Modern Power Distribution",
      "Final Code of Compliance"
    ],
    image: images.newbuilds1,
    reverse: true,
  },
  {
    id: "switchboards",
    title: "5. Switchboards",
    icon: <Zap className="h-10 w-10 text-accent1" />,
    description: "Protect your home with modern switchboard upgrades designed to handle today's electrical loads safely. Older boards can be a serious fire hazard. We replace ancient ceramic fuses with modern RCDs and MCBs, ensuring your family or business complies with the latest NZ electrical safety standards.",
    features: [
      "Switchboard Upgrades",
      "RCD Safety Switches",
      "MCB Installations",
      "Smart Meter Wiring",
      "Fault Finding & Upgrades"
    ],
    image: images.switchboards1,
    reverse: false,
  },
  {
    id: "heatpump",
    title: "6. Heatpump & Ventilation",
    icon: <ThermometerSnowflake className="h-10 w-10 text-accent1" />,
    description: "Stay comfortable all year round with high-performance heat pumps and ventilation systems tailored for New Zealand's unique climate. From chilly Auckland winters to humid summers, our team provides expert heat pump installation, multi-room solutions, and maintenance servicing.",
    features: [
      "Heat Pump Installation",
      "Multi Room Solutions",
      "Ventilation Systems",
      "Humidity & Air Quality Control",
      "Maintenance & Servicing"
    ],
    image: images.heatpump1,
    reverse: true,
  },
  {
    id: "cctv-alarm",
    title: "7. CCTV & Alarm",
    icon: <Video className="h-10 w-10 text-accent1" />,
    description: "Protect what matters most with our advanced security systems. From residential homes to commercial premises in Auckland, we install cutting-edge CCTV cameras, alarm systems, and access control solutions. Enjoy smart phone monitoring and peace of mind knowing your property is safeguarded.",
    features: [
      "CCTV Installation",
      "Alarm Systems",
      "Smart Phone Monitoring",
      "Access Control",
      "Maintenance & Support"
    ],
    image: images.cctv1,
    reverse: false,
  },
  {
    id: "safety-inspections",
    title: "8. Safety Inspections",
    icon: <ShieldCheck className="h-10 w-10 text-accent1" />,
    description: "Comprehensive electrical safety inspections for ultimate peace of mind. Buying a new house or checking an older property? Our licensed electricians meticulously inspect your property's wiring, switchboards, and lighting to detect unseen hazards before they become dangerous and expensive.",
    features: [
      "Pre-Purchase Inspections",
      "Landlord Safety Certificates",
      "Insurance Compliance",
      "Thermal Imaging",
      "Detailed Safety Reports"
    ],
    image: images.safety1,
    reverse: true,
  },
  {
    id: "ev-charger",
    title: "9. EV Chargers",
    icon: <BatteryCharging className="h-10 w-10 text-accent1" />,
    description: "Power your drive the easy way with a professional EV charger installation. With the rise of electric vehicles across NZ, having a reliable home or business charging station is essential. We offer fast, safe, and load managed EV charging solutions tailored to all makes and models.",
    features: [
      "Home EV Charger Installation",
      "Commercial Charging Stations",
      "All EV Makes & Models",
      "Load Management Solutions",
      "Expert Advice & Support"
    ],
    image: images.ev1,
    reverse: false,
  },
  {
    id: "test-tag",
    title: "10. Test & Tag",
    icon: <FileBadge className="h-10 w-10 text-accent1" />,
    description: "Appliance testing and tagging services to ensure workplace compliance. The Health and Safety at Work Act requires businesses to provide a safe environment. We provide scheduled, rigorous testing of power tools, office equipment, and heavy machinery, keeping you fully compliant.",
    features: [
      "Appliance Testing",
      "Visual & Electrical Checks",
      "Asset Logging & Reporting",
      "Scheduled Maintenance Plans",
      "NZS 3760 Compliance"
    ],
    image: images.testtag1,
    reverse: true,
  }
];

export function Services() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <section className="relative text-white pt-32 pb-24 px-4 md:px-6 mb-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url('/src/assets/images/service_back.jpg')`, 
          }}
        >
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 opacity-30 transform origin-top hidden md:block z-0" />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="font-sans text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Plug & Power Electrical provides reliable, high-quality electrical services for homes, businesses and commercial properties across Auckland, NZ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16">
        {services.map((service, index) => (
          <motion.section 
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="scroll-mt-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-16 relative">
              {/* Content Side */}
              <div className={cn(
                "lg:col-span-5 flex flex-col justify-center",
                service.reverse ? "lg:order-2" : "lg:order-1"
              )}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary rounded-xl shadow-lg">
                    {service.icon}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                </div>
                
                <p className="font-sans text-lg text-slate-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 z-10">
                  <h3 className="font-sans font-bold text-primary mb-4 text-sm uppercase tracking-wider">Features included:</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent1 shrink-0 mt-0.5" />
                        <span className="font-sans text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Images Side */}
              <div className={cn(
                "lg:col-span-7 flex flex-col justify-center w-full",
                service.reverse ? "lg:order-1" : "lg:order-2"
              )}>
                <motion.div 
                  initial={{ opacity: 0, x: service.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl w-full group bg-slate-100"
                >
                  <img 
                    src={service.image} 
                    alt={`${service.title} in Auckland NZ`} 
                    className="block w-full aspect-video md:aspect-[4/3] xl:aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent1 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                </motion.div>
              </div>

              {/* Subtle Divider between sections, except after the last one */}
              {index !== services.length - 1 && (
                 <div className="absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-accent1 to-transparent opacity-80"></div>
              )}
            </div>
          </motion.section>
        ))}
      </div>
      
      {/* Footer CTA */}
      <section className="container mx-auto px-4 mt-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
           <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="2"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
             </svg>
          </div>
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Need a Licensed Electrician?</h2>
            <p className="font-sans text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Our team is ready to deliver neat, efficient, and quality workmanship built to last.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-10 py-4 bg-accent1 hover:bg-accent2 text-primary font-bold rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 text-lg"
            >
              Get Your Free Quote
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
