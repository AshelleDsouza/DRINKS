import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Heart, Sparkles, BookOpen } from 'lucide-react';
import { DrinkCan, FloatingGarnishes } from './DrinkCan';

export default function CanShowcaseHero({
  drinks,
  currentIndex,
  setCurrentIndex,
  onSelectDrink,
  onExploreClick,
  isFavourite,
  onToggleFavourite
}) {
  const currentDrink = drinks[currentIndex] || drinks[0];
  const [direction, setDirection] = useState('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % drinks.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + drinks.length) % drinks.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Keyboard arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  const { theme, giantWord, name, subtitle, category } = currentDrink;

  return (
    <section 
      className="relative w-full min-h-[96vh] md:min-h-screen flex flex-col justify-between overflow-hidden transition-colors duration-700 select-none"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Dynamic Background Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${theme.bgLight} 0%, transparent 75%)`
        }}
      />

      {/* Top Header Bar mirroring the reference video: Logo left, Drink tabs center, Actions right */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-5 sm:pt-6 flex items-center justify-between">
        
        {/* Brand Logo in Bold Clean Lettering */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2 drop-shadow-sm hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span>sip & stir.</span>
        </a>

        {/* Center Flavor Navigation Tabs (clickable drink selector) */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 text-xs lg:text-sm font-bold tracking-wide">
          {drinks.map((d, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={d.id}
                onClick={() => {
                  setDirection(idx > currentIndex ? 'right' : 'left');
                  setIsTransitioning(true);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsTransitioning(false), 500);
                }}
                className={`relative py-1 font-sans transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-white font-extrabold scale-110 drop-shadow-sm' 
                    : 'text-white/60 hover:text-white/95'
                }`}
              >
                <span>{d.shortName}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full animate-in fade-in" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Header Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Favorite Toggle for currently active can */}
          <button
            onClick={() => onToggleFavourite(currentDrink.id)}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all shadow-sm hover:scale-110 cursor-pointer"
            aria-label="Save this drink to favourites"
          >
            <Heart 
              className={`w-5 h-5 transition-transform ${
                isFavourite(currentDrink.id) ? 'fill-white text-white scale-110' : ''
              }`} 
            />
          </button>

          {/* Direct "View Recipe" header pill */}
          <button
            onClick={() => onSelectDrink(currentDrink)}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#2C241E] text-xs font-bold shadow-md hover:bg-[#FAF7F2] transition-transform hover:scale-105 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C07D53]" />
            <span>Recipe</span>
          </button>
        </div>
      </div>

      {/* 
        ════════════════════════════════════════════════════════════════════════
        CENTER SHOWCASE STAGE
        Clean Title-Case Typography (e.g. "Apple", "Matcha", "Caramel") with 
        uniform sizing and letter-spacing just like in the Pinterest reference!
        ════════════════════════════════════════════════════════════════════════
      */}
      <div className="relative flex-1 w-full flex items-center justify-center my-auto min-h-[440px] sm:min-h-[500px] md:min-h-[540px] overflow-hidden px-4 sm:px-8">
        
        {/* UNIFORM BACKGROUND WORD: Perfectly proportioned, elegant & centered */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none z-0 px-4">
          <span
            key={giantWord}
            className={`font-black text-white/95 leading-none tracking-tight text-center max-w-full drop-shadow-md select-none transition-all duration-700 ${
              isTransitioning 
                ? direction === 'right' ? 'translate-x-12 opacity-0 scale-95' : '-translate-x-12 opacity-0 scale-95' 
                : 'translate-x-0 opacity-95 scale-100'
            }`}
            style={{ 
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(3rem, 11vw, 8.5rem)',
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}
          >
            {giantWord}
          </span>
        </div>

        {/* Floating Fruit Slices, Garnish, Mint & Ice around the Can */}
        <FloatingGarnishes drink={currentDrink} />

        {/* Realistic 3D Centered Can with Smooth Enter/Exit Animation */}
        <div 
          key={currentDrink.id}
          onClick={() => onSelectDrink(currentDrink)}
          className={`relative z-20 cursor-pointer group transition-all duration-500 ease-out py-6 ${
            isTransitioning 
              ? direction === 'right' ? 'translate-x-16 opacity-40 rotate-6 scale-90' : '-translate-x-16 opacity-40 -rotate-6 scale-90'
              : 'translate-x-0 opacity-100 rotate-0 scale-100'
          }`}
          title="Click to view recipe details!"
        >
          {/* Subtle hover bounce */}
          <div className="transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
            <DrinkCan drink={currentDrink} />
          </div>

          {/* Interactive Tooltip on hover */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-lg">
            Click can to view full recipe ✨
          </div>
        </div>

      </div>

      {/* Bottom Controls Bar (Mirroring "SHOP NOW" & Navigation Arrows from Video) */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-6 pb-6 sm:pb-8 flex items-center justify-between">
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous drink"
          className="w-12 h-12 rounded-full bg-white/25 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all shadow-md hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Center Primary Action: "VIEW RECIPE" / "MAKE AT HOME" */}
        <div className="flex flex-col items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onSelectDrink(currentDrink)}
            className="group relative px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-white text-[#2C241E] hover:bg-[#FAF7F2] font-black tracking-wider text-xs sm:text-sm uppercase shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span>VIEW RECIPE • {currentDrink.prepTime}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Quick Counter (e.g., 03 / 10 • Strawberry Lemonade) */}
          <div className="text-[11px] font-bold tracking-widest text-white/85">
            {currentIndex < 9 ? `0${currentIndex + 1}` : currentIndex + 1} <span className="opacity-50">/</span> 10 • {name}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next drink"
          className="w-12 h-12 rounded-full bg-white/25 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all shadow-md hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>

    </section>
  );
}
