import React from 'react';
import { Sparkles, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onExploreClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#201813] text-[#FAF7F2] overflow-hidden pt-16 pb-12 mt-12 border-t border-[#382B22]">
      
      {/* Editorial Quote Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 pb-16 border-b border-white/10">
        
        {/* Whimsical coffee cup icon */}
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-xl shadow-inner">
          ☕
        </div>

        {/* The required aesthetic quote */}
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal italic tracking-tight text-[#F7ECE1] leading-snug">
          “Good drinks, slow mornings, and little moments of happiness.”
        </blockquote>

        <p className="font-script text-xl sm:text-2xl text-[#D9A679]">
          romanticize your daily rituals ✨
        </p>

        {/* CTA to explore recipes again */}
        <div className="pt-2">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FAF7F2] text-[#201813] font-serif font-bold text-sm sm:text-base hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span>Explore The Drinks Again</span>
            <Sparkles className="w-4 h-4 text-[#C07D53]" />
          </button>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#9B897D]">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <span className="font-serif text-xl font-bold tracking-tight text-[#FAF7F2]">
            sip & stir<span className="text-[#C07D53]">.</span>
          </span>
          <span className="text-white/20">|</span>
          <span>Your Little Home Café</span>
        </div>

        {/* Love tag */}
        <div className="flex items-center gap-1.5 text-center">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#E26D77] fill-[#E26D77]" />
          <span>for cozy mornings & slow afternoons</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
        >
          <span>Back to Top</span>
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <ArrowUp className="w-3.5 h-3.5" />
          </div>
        </button>

      </div>
    </footer>
  );
}
