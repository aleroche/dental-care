'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/navigation";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo - Blue/Green */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex items-center">
              {/* Blue circle with M */}
              <div className="w-12 h-12 rounded-full bg-[--color-primary] flex items-center justify-center">
                <span className="text-white font-[family-name:var(--font-cormorant)] text-2xl font-bold">M</span>
              </div>
              {/* Green accent dot */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[--color-accent] rounded-full border-3 border-white" />
            </div>
            <div>
              <span className={`font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[--color-slate-700] transition-all ${scrolled ? 'text-lg' : 'text-2xl'}`}>
                MiraMar
              </span>
              <span className={`block text-[--color-slate-400] -mt-1 ${scrolled ? 'text-xs' : 'text-xs'}`}>
                Family Dental
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - More spacious */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <div key={item.title} className="relative group">
                <Link 
                  href={item.href || "#"}
                  className="text-sm font-medium text-[--color-slate-600] hover:text-[--color-primary] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-[--color-accent] after:transition-all hover:after:w-full"
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white rounded-xl shadow-xl border border-[--color-slate-100] p-3 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href || "#"}
                        className="block px-4 py-2.5 text-sm text-[--color-slate-600] hover:bg-[--color-slate-50] hover:text-[--color-primary] rounded-lg transition-colors"
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
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+12819999999" 
              className="flex items-center gap-2 text-[--color-slate-500] hover:text-[--color-primary] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(XXX) XXX-XXXX</span>
            </a>
            <Link
              href="/contact"
              className="px-7 py-3 bg-[--color-primary] text-white text-sm font-medium rounded-full hover:bg-[--color-primary-dark] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[--color-primary]/25"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[--color-slate-700]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[--color-slate-100]">
            <div className="px-6 py-8 space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.title}>
                  <Link 
                    href={item.href || "#"}
                    className="block py-3 font-medium text-[--color-slate-700]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-2 border-l-2 border-[--color-slate-100] ml-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href || "#"}
                          className="block py-2 text-sm text-[--color-slate-500]"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-[--color-primary] text-white font-medium rounded-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
