import React from 'react';
import { Sparkles, ArrowDown, Shuffle, Coffee, Heart, Star, Compass } from 'lucide-react';

export default function Hero({ onExploreClick, onSurpriseClick, onSelectDrink, drinks }) {
  // Highlight 3 featured drinks for the animated Pinterest hero collage
  const matcha = drinks.find(d => d.id === 'iced-matcha-latte') || drinks[1];
  const spanishLatte = drinks.find(d => d.id === 'spanish-latte') || drinks[0];
  const strawberry = drinks.find(d => d.id === 'strawberry-lemonade') || drinks[2];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Decorative whimsical backdrop blobs and ambient blur */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#F5E6D3]/60 via-[#F3DEE0]/40 to-[#E4EBD9]/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#EADCC9]/50 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute top-48 -right-12 w-80 h-80 bg-[#F9E5C8]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 z-10">
          
          {/* Aesthetic Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0E6] border border-[#E4D2C3] shadow-xs text-xs font-medium text-[#7C5A43]">
            <span className="flex h-2 w-2 rounded-full bg-[#C07D53] animate-ping" />
            <span className="font-serif italic font-semibold">sip & stir.</span>
            <span className="text-[#A89282]">•</span>
            <span>Your Little Home Café</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold tracking-tight text-[#281F19] leading-[1.08]">
              Your next <br />
              <span className="relative inline-block italic font-normal text-[#8A5134] font-serif pr-2">
                favourite drink
                {/* Curved underline flourish */}
                <svg className="absolute left-0 -bottom-2 w-full h-3 text-[#D97D54]/50" viewBox="0 0 250 12" fill="none">
                  <path d="M3 9C60 2 180 2 247 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              is one sip away.
            </h1>
          </div>

          {/* Hand-drawn aesthetic note */}
          <div className="flex items-center gap-3">
            <p className="font-script text-2xl md:text-3xl text-[#9E6543] rotate-[-2deg]">
              "simple rituals, slow mornings ✨"
            </p>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#6B5A4E] leading-relaxed max-w-lg font-sans">
            <strong className="text-[#2C241E] font-semibold">10 delicious drinks.</strong> Simple ingredients. Main-character café vibes, crafted right in your kitchen.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            {/* Primary CTA */}
            <button
              onClick={onExploreClick}
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2D241E] text-[#FAF7F2] font-medium text-sm md:text-base shadow-lg shadow-[#2D241E]/15 hover:bg-[#43352B] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Drinks</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            {/* Secondary CTA: Surprise Me! */}
            <button
              onClick={onSurpriseClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#4A3B32] border border-[#DACDC0] font-medium text-sm md:text-base shadow-xs hover:border-[#C07D53] hover:text-[#C07D53] transition-all duration-300 hover:scale-[1.02] cursor-pointer backdrop-blur-xs"
            >
              <Sparkles className="w-4 h-4 text-[#C07D53] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Surprise Me!</span>
            </button>
          </div>

          {/* Trust/Vibe counters */}
          <div className="pt-4 border-t border-[#EAE1D5] flex items-center gap-6 sm:gap-8 text-xs text-[#7A695D]">
            <div>
              <span className="block font-serif text-xl font-bold text-[#2C241E]">10</span>
              <span>Curated Recipes</span>
            </div>
            <div className="w-px h-8 bg-[#E5DACE]" />
            <div>
              <span className="block font-serif text-xl font-bold text-[#2C241E]">5 min</span>
              <span>Average Prep</span>
            </div>
            <div className="w-px h-8 bg-[#E5DACE]" />
            <div>
              <span className="block font-serif text-xl font-bold text-[#2C241E]">100%</span>
              <span>Beginner Friendly</span>
            </div>
          </div>
        </div>

        {/* Right Column: Pinterest-Inspired Floating Visual Moodboard */}
        <div className="lg:col-span-6 relative mt-4 lg:mt-0">
          
          {/* Main Visual Composition Container */}
          <div className="relative w-full h-[460px] sm:h-[520px] max-w-lg mx-auto">
            
            {/* Center Main Card - Spanish Latte / Iced Coffee */}
            <div 
              onClick={() => onSelectDrink(spanishLatte)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[280px] h-[340px] sm:h-[390px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white cursor-pointer group hover:rotate-1 hover:scale-105 transition-all duration-500 z-20"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={spanishLatte.image} 
                  alt={spanishLatte.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Floating mini badge on image */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#3D2C20] shadow-xs">
                  ★ Staff Favorite
                </div>

                {/* Bottom Card Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F8DEC7]">Coffee Bar</span>
                  <h3 className="font-serif text-xl font-bold leading-snug drop-shadow-sm">{spanishLatte.name}</h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-0.5">{spanishLatte.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Left Top Card - Floating Matcha */}
            <div 
              onClick={() => onSelectDrink(matcha)}
              className="absolute left-0 sm:left-4 top-2 sm:top-6 w-[170px] sm:w-[200px] h-[210px] sm:h-[240px] rounded-2xl overflow-hidden shadow-xl border-3 border-white bg-white cursor-pointer group hover:-rotate-3 hover:scale-105 transition-all duration-500 z-10 animate-float-slow"
            >
              <div className="relative w-full h-full">
                <img 
                  src={matcha.image} 
                  alt={matcha.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="bg-[#6B8756]/90 text-[10px] w-max px-2 py-0.5 rounded-full mb-1 font-medium">Ceremonial</div>
                  <h4 className="font-serif text-sm font-bold leading-tight">{matcha.name}</h4>
                </div>
              </div>
            </div>

            {/* Right Bottom Card - Floating Strawberry Lemonade */}
            <div 
              onClick={() => onSelectDrink(strawberry)}
              className="absolute right-0 sm:right-2 bottom-4 sm:bottom-6 w-[180px] sm:w-[210px] h-[230px] sm:h-[260px] rounded-2xl overflow-hidden shadow-xl border-3 border-white bg-white cursor-pointer group hover:rotate-3 hover:scale-105 transition-all duration-500 z-30 animate-float-reverse"
            >
              <div className="relative w-full h-full">
                <img 
                  src={strawberry.image} 
                  alt={strawberry.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="bg-[#E26D77]/90 text-[10px] w-max px-2 py-0.5 rounded-full mb-1 font-medium">Berry Crisp</div>
                  <h4 className="font-serif text-sm font-bold leading-tight">{strawberry.name}</h4>
                </div>
              </div>
            </div>

            {/* Whimsical Sticker: "Made with love" */}
            <div className="absolute -top-3 right-8 bg-[#FFF9F0] border-2 border-[#EAD5C3] p-2.5 rounded-2xl shadow-md rotate-6 hidden sm:flex items-center gap-1.5 z-30">
              <span className="text-xl">🍋</span>
              <div className="flex flex-col">
                <span className="font-script text-base text-[#6E4F39] leading-none">Fresh & Chilled</span>
                <span className="text-[9px] text-[#A68F80] font-sans font-medium uppercase tracking-wider">Homemade</span>
              </div>
            </div>

            {/* Whimsical Sticker: Star quote */}
            <div className="absolute bottom-8 left-2 bg-[#2D241E] text-[#F4ECE3] px-3 py-1.5 rounded-full shadow-lg -rotate-6 hidden sm:flex items-center gap-1.5 z-30 text-xs font-serif">
              <Star className="w-3.5 h-3.5 text-[#E6AF2E] fill-[#E6AF2E]" />
              <span>Café vibe at home</span>
            </div>

            {/* Floating Ice / Sparkle Icon */}
            <div className="absolute top-1/2 left-2 text-2xl -translate-y-8 animate-bounce" style={{ animationDuration: '3s' }}>
              🧊
            </div>
            <div className="absolute top-20 right-4 text-2xl animate-pulse">
              ✨
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
