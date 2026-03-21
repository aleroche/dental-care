'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
  { 
    title: "About us", 
    href: "/about", 
    children: [
      { title: "Dr Keyttia Beovides", href: "/about-us/dr-keyttia-beovides" },
      { title: "Meet the Team", href: "/about-us/team" }
    ]
  },
  { 
    title: "Dental Services", 
    href: "/services", 
    children: [
      { title: "Diagnostic & Preventive", href: "/services/diagnostic" },
      { title: "Oral Surgery", href: "/services/surgery" },
      { title: "Restorative Dentistry", href: "/services/restorative" },
      { title: "Endodontics", href: "/services/endodontics" },
      { title: "Cosmetic Dentistry", href: "/services/cosmetic" },
      { title: "Periodontal", href: "/services/periodontal" },
      { title: "Orthodontic", href: "/services/orthodontic" },
      { title: "Pediatric Dentistry", href: "/services/pediatric" }
    ]
  },
  { 
    title: "Patients", 
    href: "/patients", 
    children: [
      { title: "New patients", href: "/patients/new" },
      { title: "MFD Membership", href: "/patients/membership" },
      { title: "Financing plans", href: "/patients/financing" },
      { title: "Dental Insurance", href: "/patients/insurance" },
      { title: "FAQs", href: "/patients/faqs" }
    ]
  },
  { title: "Blog", href: "/blog" },
  { title: "Deals", href: "/deals" },
  { title: "Reviews", href: "/reviews" },
  { title: "Contact us", href: "/contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = mounted && theme === 'dark';

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const headerBg = scrolled || isOpen 
    ? 'bg-white dark:bg-[#0F172A] shadow-sm' 
    : isDark 
      ? 'bg-[#0F172A]/95 dark:bg-[#0F172A]/95 backdrop-blur-md' 
      : 'bg-[#020617]/95 backdrop-blur-md';
      
  const headerPy = scrolled || isOpen ? 'py-3' : 'py-4';
  
  const textColor = scrolled || isOpen 
    ? 'text-[#1E293B] dark:text-white' 
    : 'text-white';
    
  const mutedColor = scrolled || isOpen 
    ? 'text-[#64748B] dark:text-[#94A3B8]' 
    : 'text-white/60';

  const navLinkColor = scrolled || isOpen
    ? 'text-[#475569] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B] hover:text-[#0A6CFF]'
    : 'text-white/80 hover:bg-white/10 hover:text-white';

  const mobileMenuBg = 'bg-white dark:bg-[#0F172A]';
  const mobileBorderColor = 'border-[#E2E8F0] dark:border-[#334155]';
  const mobileTextColor = 'text-[#1E293B] dark:text-white';
  const mobileMutedColor = 'text-[#64748B] dark:text-[#94A3B8]';
  const mobileHoverColor = 'hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B]';
  const mobileAccentColor = 'hover:text-[#0A6CFF] dark:hover:text-[#4D94FF]';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} ${headerPy}`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="relative flex items-center">
              <div className="w-11 h-11 rounded-full bg-[#0A6CFF] flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">M</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#00B894] rounded-full border-2 border-white dark:border-[#0F172A]" />
            </div>
            <div>
              <span className={`font-serif text-xl font-semibold transition-all ${textColor}`}>
                MiraMar
              </span>
              <span className={`block -mt-0.5 ${mutedColor} text-xs`}>
                Family Dental
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-1">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className={`
                        inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-transparent 
                        ${navLinkColor}
                      `}>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute left-0 top-full mt-1 !bg-transparent !border-0 !shadow-none">
                        <ul className="w-56 bg-white dark:bg-[#1E293B] p-1 rounded-lg shadow-xl dark:shadow-2xl">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href || "#"}
                                  className="block px-4 py-2.5 text-sm text-[#475569] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#0A6CFF]/20 hover:text-[#0A6CFF] dark:hover:text-[#4D94FF] rounded-md cursor-pointer transition-colors"
                                >
                                  {child.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link 
                        href={item.href || "#"}
                        className={`
                          inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-transparent
                          ${navLinkColor}
                        `}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`cursor-pointer p-2.5 rounded-lg transition-colors ${
                scrolled || isOpen
                  ? 'text-[#64748B] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B] hover:text-[#0A6CFF] dark:hover:text-[#4D94FF]'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <a 
              href="tel:+12815550123" 
              className={`flex items-center gap-2 transition-colors ${scrolled || isOpen ? 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0A6CFF] dark:hover:text-[#4D94FF]' : 'text-white/80 hover:text-white'}`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(281) 555-0123</span>
            </a>
            <Link
              href="/contact"
              className="cursor-pointer px-6 py-2.5 bg-[#0A6CFF] text-white text-sm font-semibold rounded-lg hover:bg-[#0052CC] transition-all duration-300 hover:shadow-lg hover:shadow-[#0A6CFF]/25"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`cursor-pointer lg:hidden p-2 z-50 ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 ${mobileMenuBg} shadow-xl border-t ${mobileBorderColor} transition-all duration-200 ease-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 60px)', overflowY: 'auto' }}
      >
        <div className="px-4 py-2 space-y-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.title} className={`border-b ${mobileBorderColor}`}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className={`w-full flex items-center justify-between py-4 font-semibold ${mobileTextColor} text-lg bg-transparent hover:bg-transparent cursor-pointer`}
                  >
                    {item.title}
                    <ChevronDown className={`w-5 h-5 transition-transform ${openSubmenu === item.title ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${openSubmenu === item.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className={`pb-2 space-y-1`}>
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.href || "#"}
                            className={`block px-4 py-3 ${mobileMutedColor} ${mobileHoverColor} ${mobileAccentColor} rounded-lg cursor-pointer transition-colors`}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenSubmenu(null);
                            }}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.href || "#"}
                  className={`block py-4 font-semibold ${mobileTextColor} text-lg`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 pb-4">
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-4 bg-[#0A6CFF] text-white font-semibold rounded-lg cursor-pointer"
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
