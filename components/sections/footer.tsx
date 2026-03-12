import Link from "next/link";
import { SITE_NAME, ADDRESS, SOCIAL } from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/navigation";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[--color-primary] to-[--color-primary-dark] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10 px-6 py-16">
        {/* Main Footer Content - More Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-[--color-primary] font-[family-name:var(--font-cormorant)] text-2xl font-bold">M</span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-white">
                  MiraMar
                </span>
                <span className="block text-white/60 -mt-1 text-xs">Family Dental</span>
              </div>
            </Link>
            
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Your trusted family dentist in Katy, Texas. We're dedicated to providing 
              exceptional dental care for the whole family in a warm and welcoming environment.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL.facebook && (
                <a 
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[--color-accent] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {SOCIAL.instagram && (
                <a 
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[--color-accent] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links - More Spacing */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href || "#"} 
                    className="text-white/70 hover:text-[--color-accent] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - More Spacing */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Dental Cleanings",
                "Dental Implants",
                "Cosmetic Dentistry",
                "Orthodontics",
                "Root Canals",
                "Pediatric Dentistry",
                "Teeth Whitening",
                "Emergency Dental",
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/70 hover:text-[--color-accent] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - More Spacing */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[--color-accent] flex-shrink-0 mt-0.5" />
                <span className="text-white/75 text-sm">
                  {ADDRESS.city}, {ADDRESS.state}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[--color-accent] flex-shrink-0" />
                <a href="tel:+12819999999" className="text-white/75 hover:text-[--color-accent] transition-colors text-sm">
                  (XXX) XXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[--color-accent] flex-shrink-0" />
                <a href="mailto:info@miramarfamilydental.com" className="text-white/75 hover:text-[--color-accent] transition-colors text-sm">
                  info@miramarfamilydental.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[--color-accent] flex-shrink-0 mt-0.5" />
                <div className="text-white/75 text-sm">
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: By Appointment</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>

            {/* Emergency Notice - Green Accent */}
            <div className="mt-6 p-5 bg-[--color-accent] rounded-xl">
              <p className="text-white font-semibold text-sm mb-1">Dental Emergency?</p>
              <p className="text-white/80 text-xs">
                Call us immediately for same-day emergency care.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - More Spacing */}
        <div className="border-t border-white/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            {/* Copyright */}
            <p className="text-white/50 text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/hipaa" className="text-white/50 hover:text-white transition-colors">
                HIPAA Notice
              </Link>
              <Link href="/accessibility" className="text-white/50 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 text-sm">
              <button className="text-white/50 hover:text-white transition-colors">Español</button>
              <span className="text-white/20">|</span>
              <button className="text-white font-medium">English</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
