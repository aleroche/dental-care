import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const ADDRESS = {
  street: "1234 Dental Way",
  city: "Katy",
  state: "TX",
  zip: "77494"
};
const SOCIAL = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com"
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#0052CC] to-[#003D99] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10 px-6 py-14">
        {/* Main Footer Content - 4 columns as per SPEC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#0A6CFF] font-serif text-xl font-bold">M</span>
              </div>
              <div>
                <span className="font-serif text-lg font-semibold text-white">
                  MiraMar
                </span>
                <span className="block text-white/60 -mt-1 text-xs">Family Dental</span>
              </div>
            </Link>
            
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              Your trusted family dentist in Katy, Texas. We&apos;re dedicated to providing 
              exceptional dental care for the whole family.
            </p>

            {/* Social Links - Better hover contrast */}
            <div className="flex gap-2">
              {SOCIAL.facebook && (
                <a 
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#00B894] hover:scale-110 transition-all duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {SOCIAL.instagram && (
                <a 
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#00B894] hover:scale-110 transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-5">Quick Navigation</h4>
            <ul className="space-y-2.5">
              {[
                "Meet Dr Beovides",
                "Specials",
                "Meet The Team",
                "Reviews",
                "Financing",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-white/70 hover:text-[#00B894] hover:translate-x-1 transition-all duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dental Services */}
          <div>
            <h4 className="font-serif text-lg mb-5">Dental Services</h4>
            <ul className="space-y-2.5">
              {[
                "New patients exam",
                "Pediatric dentist",
                "Dental cleanings",
                "Dental implants",
                "Cosmetic dentistry",
                "Orthodontics",
                "Root canals",
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="#"
                    className="text-white/70 hover:text-[#00B894] hover:translate-x-1 transition-all duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-5">Location</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00B894] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  {ADDRESS.street}<br />
                  {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00B894] flex-shrink-0" />
                <a href="tel:+12815550123" className="text-white/80 hover:text-[#00B894] transition-colors text-sm">
                  (281) 555-0123
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#00B894] flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: By Appointment</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>

            {/* Emergency Notice - Better contrast with darker green */}
            <div className="mt-5 p-4 bg-[#00B894] rounded-xl">
              <p className="text-white font-bold text-sm mb-1">Dental Emergency?</p>
              <p className="text-white/90 text-xs">
                Call us immediately for same-day emergency care.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-sm">
              &copy; {currentYear} MiraMar Family Dental
            </p>

            {/* Legal Links - Better hover */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/hipaa" className="text-white/50 hover:text-white transition-colors">
                HIPAA
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                New Patient Form
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Privacy Practice Notice
              </Link>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 text-sm">
              <button className="text-white/50 hover:text-white transition-colors">Español</button>
              <span className="text-white/30">|</span>
              <button className="text-white font-medium">English</button>
            </div>
          </div>
          
          {/* Created by */}
          <p className="text-white/30 text-xs text-center mt-4">
            Created by Blue Mountain Web
          </p>
        </div>
      </div>
    </footer>
  );
}
