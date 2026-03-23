"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="container-wide w-full py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none font-bold text-[#00B894]/25 dark:text-[#00D9A5]/40 select-none">
              404
            </h1>
          </div>

          <div className="relative -mt-16 md:-mt-20 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900 dark:text-slate-100">
              The Clinic
              <br />
              <span className="text-[#00B894] dark:text-[#00D9A5]">Couldn't Find This Page</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-12 max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="cursor-pointer bg-[#00B894] hover:bg-[#00A383] text-white dark:bg-[#00D9A5] dark:hover:bg-[#00B894] dark:text-slate-900 gap-2 px-8 py-6 text-lg">
                <Link href="/">
                  <Home className="w-5 h-5" />
                  Take Me Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="cursor-pointer border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-[#00B894] hover:text-[#00B894] hover:bg-[#00B894]/5 dark:hover:border-[#00D9A5] dark:hover:text-[#00D9A5] dark:hover:bg-[#00D9A5]/5 gap-2 px-8 py-6 text-lg">
                <Link href="/contact">
                  <ArrowLeft className="w-5 h-5" />
                  Get Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}