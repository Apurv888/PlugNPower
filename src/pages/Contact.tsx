import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="relative text-white pt-32 pb-24 px-4 md:px-6 mb-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1520690214124-2405c5217036?q=80&w=2070&auto=format&fit=crop')`, 
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
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="font-sans text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your electrical project? Get in touch with our expert Auckland team today for a free, no-obligation quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Information (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-10"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="font-sans text-slate-600 leading-relaxed mb-8">
                Whether you need a quick repair, a complete house rewire, or commercial electrical services, the Plug & Power Electrical team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-accent1 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-primary mb-1">Phone</h3>
                  <p className="text-slate-600 mb-1">
                    <a href="tel:0226177220" className="hover:text-accent1 transition-colors font-medium">022 617 7220</a> (Ashish Patel)
                  </p>
                  <p className="text-slate-600">
                    <a href="tel:0226772115" className="hover:text-accent1 transition-colors font-medium">022 677 2115</a> (Ravi Patel)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-accent1 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-primary mb-1">Email</h3>
                  <a href="mailto:plugpowerservices@gmail.com" className="text-slate-600 hover:text-accent1 transition-colors font-medium">
                    plugpowerservices@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-accent1 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-primary mb-1">Service Area</h3>
                  <p className="text-slate-600">
                    Auckland Wide<br />
                    Residential • Commercial • Industrial
                  </p>
                </div>
              </div>
            </div>

            {/* Auckland "Map" Image Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-md h-48 relative mt-10">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543880509-f31f964092b7?q=80&w=800&auto=format&fit=crop')` }}
              ></div>
              <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">Send us a message</h3>
              
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Message Sent!</h4>
                  <p>Thanks for reaching out. A member of our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 text-green-600 font-medium hover:text-green-800 underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="font-sans text-sm font-bold text-slate-700">First Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent1 focus:ring-2 focus:ring-accent1/20 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="font-sans text-sm font-bold text-slate-700">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent1 focus:ring-2 focus:ring-accent1/20 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-sans text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent1 focus:ring-2 focus:ring-accent1/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-sans text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent1 focus:ring-2 focus:ring-accent1/20 outline-none transition-all"
                        placeholder="021 123 4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="font-sans text-sm font-bold text-slate-700">Service Required</label>
                    <div className="relative">
                      <select 
                        id="service" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent1 focus:ring-2 focus:ring-accent1/20 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="House Wiring">House Wiring & Rewiring</option>
                        <option value="Commercial">Commercial Works</option>
                        <option value="New Builds">New Builds</option>
                        <option value="Switchboards">Switchboard Upgrades</option>
                        <option value="Heat Pump">Heat Pump & Ventilation</option>
                        <option value="Security">CCTV & Alarms</option>
                        <option value="Inspection">Safety Inspections</option>
                        <option value="EV Charger">EV Chargers</option>
                        <option value="Test and Tag">Test & Tag</option>
                        <option value="Other">Other Query / Quote</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-sans text-sm font-bold text-slate-700">Project Details or Message <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent1 focus:ring-2 focus:ring-accent1/20 outline-none transition-all resize-y"
                      placeholder="Tell us about what you need help with..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-slate-800 text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
