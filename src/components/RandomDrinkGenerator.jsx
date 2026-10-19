import React, { useState } from 'react';
import { Sparkles, Dices, ArrowRight, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RandomDrinkGenerator({ drinks, onSelectDrink }) {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  const handlePickDrink = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    let counter = 0;
    const totalSpins = 20;
    const intervalTime = 80;

    const interval = setInterval(() => {
      const randIdx = Math.floor(Math.random() * drinks.length);
      setDisplayIndex(randIdx);
      counter++;

      if (counter >= totalSpins) {
        clearInterval(interval);
        // Final random pick
        const finalDrink = drinks[Math.floor(Math.random() * drinks.length)];
        setSelectedDrink(finalDrink);
        setIsSpinning(false);

        // Fun sparkle confetti
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#E6AF2E', '#C07D53', '#789262']
        });
      }
    }, intervalTime);
  };

  const previewDrink = selectedDrink || drinks[displayIndex];

  return (
    <section id="surprise-me" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative rounded-4xl bg-gradient-to-br from-[#2D241E] via-[#382B22] to-[#1E1713] text-[#FAF7F2] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-[#4E3E34]">
        
        {/* Whimsical backdrop sparkles and glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C07D53]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#789262]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & Trigger */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#F3E7DC] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#E6AF2E] animate-pulse" />
              <span>Intuitive Drink Oracle</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Can’t decide? <br />
                <span className="font-script italic text-3xl sm:text-4xl md:text-5xl text-[#E8BF96] font-normal">
                  Let the universe choose.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#D0C2B7] max-w-lg leading-relaxed font-sans">
              Too many delicious cravings? Take a deep breath, click the button below, and let our little café roulette pick today’s perfect sip.
            </p>

            {/* Pick Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={handlePickDrink}
                disabled={isSpinning}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FAF7F2] hover:bg-white text-[#2D241E] font-serif text-base sm:text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-75 cursor-pointer"
              >
                <Dices className={`w-5 h-5 text-[#C07D53] ${isSpinning ? 'animate-spin' : 'group-hover:rotate-45'} transition-transform duration-300`} />
                <span>{isSpinning ? 'Shuffling the menu...' : selectedDrink ? 'Pick Another Drink' : 'Pick My Drink'}</span>
              </button>

              {selectedDrink && (
                <button
                  onClick={() => onSelectDrink(selectedDrink)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F1DFCF] hover:text-white underline-offset-4 hover:underline cursor-pointer"
                >
                  <span>Open Recipe directly</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Card Reveal Animation Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative card shadow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C07D53] via-[#E6AF2E] to-[#789262] rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Main Preview Card */}
              <div className={`relative bg-[#FAF7F2] text-[#2D241E] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-300 ${
                isSpinning ? 'scale-95 blur-[1px]' : 'scale-100'
              }`}>
                
                {/* Drink Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={previewDrink.image}
                    alt={previewDrink.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#2D241E]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {previewDrink.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#2D241E] text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">
                    ⏱ {previewDrink.prepTime}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 text-center space-y-3">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#9C6B4B]">
                    {isSpinning ? 'Consulting the beans...' : 'The Universe Chose For You:'}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#2D241E] leading-tight">
                    {previewDrink.name}
                  </h3>

                  <p className="text-xs text-[#6B574A] line-clamp-2 font-sans">
                    {previewDrink.subtitle}
                  </p>

                  <button
                    onClick={() => onSelectDrink(previewDrink)}
                    className="w-full py-3 rounded-xl bg-[#2D241E] text-[#FAF7F2] hover:bg-[#43352B] font-serif font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm mt-2"
                  >
                    <span>View This Recipe</span>
                    <ArrowRight className="w-4 h-4 text-[#E6AF2E]" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
