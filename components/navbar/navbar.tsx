'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { title: "About us", href: "/about", children: [
    { title: "Dr Keyttia Beovides", href: "/about/dr-beovides" },
    { title: "Meet the Team", href: "/about/team" }
  ]},
  { title: "Dental Services", href: "/services", children: [
    { title: "Diagnostic & Preventive", href: "/services/diagnostic" },
    { title: "Oral Surgery", href: "/services/surgery" },
    { title: "Restorative Dentistry", href: "/services/restorative" },
    { title: "Endodontics", href: "/services/endodontics" },
    { title: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { title: "Periodontal", href: "/services/periodontal" },
    { title: "Orthodontic", href: "/services/orthodontic" },
    { title: "Pediatric Dentistry", href: "/services/pediatric" }
  ]},
  { title: "Patients", href: "/patients", children: [
    { title: "New patients", href: "/patients/new" },
    { title: "MFD Membership", href: "/patients/membership" },
    { title: "Financing plans", href: "/patients/financing" },
    { title: "Dental Insurance", href: "/patients/insurance" },
    { title: "FAQs", href: "/patients/faqs" }
  ]},
  { title: "Blog", href: "/blog" },
  { title: "Deals", href: "/deals" },
  { title: "Reviews", href: "/reviews" },
  { title: "Contact us", href: "/contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only close menu on scroll, not on link click
  useEffect(() => {
    if (isOpen && !scrolled) {
      // Don't close on scroll when menu is open
    }
  }, [scrolled, isOpen]);

  const toggleItem = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    // Just close expanded items, not the menu itself
    setExpandedItems([]);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white shadow-sm py-3' 
          : 'bg-[#020617]/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="relative flex items-center">
              <div className="w-11 h-11 rounded-full bg-[#0A6CFF] flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">M</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#00B894] rounded-full border-2 border-white" />
            </div>
            <div>
              <span className={`font-serif text-xl font-semibold transition-all ${scrolled || isOpen ? 'text-[#1E293B]' : 'text-white'}`}>
                MiraMar
              </span>
              <span className={`block -mt-0.5 ${scrolled || isOpen ? 'text-[#64748B] text-xs' : 'text-white/60 text-xs'}`}>
                Family Dental
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.title} className="relative group">
                <Link 
                  href={item.href || "#"}
                  className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00B894] after:transition-all hover:after:w-full ${
                    scrolled ? 'text-[#475569] hover:text-[#0A6CFF]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-3 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href || "#"}
                        className="block px-4 py-2.5 text-sm text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0A6CFF] rounded-lg transition-colors"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-5">
            <a 
              href="tel:+12815550123" 
              className={`flex items-center gap-2 transition-colors ${scrolled ? 'text-[#64748B] hover:text-[#0A6CFF]' : 'text-white/80 hover:text-white'}`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(281) 555-0123</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#0A6CFF] text-white text-sm font-semibold rounded-lg hover:bg-[#0052CC] transition-all duration-300 hover:shadow-lg hover:shadow-[#0A6CFF]/25"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 z-50 ${scrolled || isOpen ? 'text-[#1E293B]' : 'text-white'}`}
            onClick={toggleMenu}
            onMouseDown={(e) => e.preventDefault()}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#E2E8F0] transition-all duration-200 ease-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 60px)', overflowY: 'auto' }}
      >
        <div className="px-4 py-2">
          {NAV_ITEMS.map((item) => (
            <div key={item.title} className="border-b border-[#F1F5F9]">
              <div className="flex items-center justify-between">
                <Link 
                  href={item.href || "#"}
                  className="flex-1 block py-4 font-semibold text-[#1E293B] text-lg"
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <button
                    onClick={(e) => toggleItem(e, item.title)}
                    className="p-3 text-[#64748B] touch-manipulation"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedItems.includes(item.title) ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              {item.children && expandedItems.includes(item.title) && (
                <div className="pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href || "#"}
                      className="block py-3 pl-4 text-[#64748B] hover:text-[#0A6CFF] hover:bg-[#F1F5F9] rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 pb-4">
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-4 bg-[#0A6CFF] text-white font-semibold rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
