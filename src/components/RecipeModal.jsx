import React, { useState, useEffect } from 'react';
import { 
  X, Clock, ChefHat, Users, Check, Heart, Sparkles, Plus, Minus, 
  RotateCcw, Award, Lightbulb, Share2, BookmarkCheck, ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DrinkCan } from './DrinkCan';

export default function RecipeModal({
  drink,
  onClose,
  isFavourite,
  onToggleFavourite,
  onSelectDrink,
  allDrinks
}) {
  const [servings, setServings] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [viewCanMode, setViewCanMode] = useState(false);

  // Reset steps & servings state when a new drink is loaded
  useEffect(() => {
    if (drink) {
      setServings(drink.servings || 1);
      setCheckedIngredients({});
      setCompletedSteps({});
      setHasCelebrated(false);
      setCopiedLink(false);
    }
  }, [drink]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!drink) return null;

  // Toggle ingredient checkbox
  const toggleIngredient = (idx) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Toggle step completion
  const toggleStep = (stepIdx) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepIdx]: !prev[stepIdx]
    }));
  };

  // Calculate completion progress
  const totalSteps = drink.instructions.length;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  // Serving multiplier
  const multiplier = servings / (drink.servings || 1);

  // Trigger celebration confetti
  const triggerCelebration = () => {
    setHasCelebrated(true);
    // Mark all steps as complete if not already
    const allDone = {};
    drink.instructions.forEach((_, idx) => {
      allDone[idx] = true;
    });
    setCompletedSteps(allDone);

    // Confetti cannon
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C07D53', '#789262', '#E26D77', '#E6AF2E', '#FAF7F2']
    });
  };

  // Share drink handler
  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Related drinks recommendation (same category or nearby)
  const relatedDrinks = allDrinks
    .filter(d => d.id !== drink.id)
    .sort((a, b) => (a.category === drink.category ? -1 : 1))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 transition-all duration-300">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden border border-[#ECE0D0] my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Floating Top Controls */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
          {/* Favourite button */}
          <button
            onClick={() => onToggleFavourite(drink.id)}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#2D241E] hover:text-[#E26D77] transition-all shadow-md hover:scale-105 cursor-pointer"
            aria-label="Save to favourites"
          >
            <Heart className={`w-5 h-5 ${isFavourite ? 'fill-[#E26D77] text-[#E26D77]' : ''}`} />
          </button>

          {/* Share button */}
          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#2D241E] hover:text-[#C07D53] transition-all shadow-md hover:scale-105 cursor-pointer"
            title="Share drink"
          >
            {copiedLink ? <BookmarkCheck className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#2D241E] text-white flex items-center justify-center hover:bg-[#43352B] transition-all shadow-md hover:scale-105 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1">
          
          {/* Hero Media Section (Photo or 3D Can presentation) */}
          <div 
            className="relative w-full h-80 sm:h-96 overflow-hidden flex items-center justify-center transition-colors duration-500"
            style={{
              backgroundColor: viewCanMode ? drink.theme.bg : '#201813'
            }}
          >
            {!viewCanMode ? (
              <>
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201813]/90 via-[#201813]/40 to-transparent" />
              </>
            ) : (
              <div className="relative py-4 transform scale-90 flex items-center justify-center">
                <span 
                  className="absolute inset-0 flex items-center justify-center text-white/30 text-8xl font-black uppercase pointer-events-none select-none"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {drink.giantWord}
                </span>
                <div className="relative z-10 scale-90">
                  <DrinkCan drink={drink} />
                </div>
              </div>
            )}
            
            {/* View Mode Pill on Top-Left */}
            <div className="absolute top-4 left-4 z-20 flex items-center bg-black/60 backdrop-blur-md rounded-full p-0.5 border border-white/20 text-[10px] font-bold text-white shadow-md">
              <button
                onClick={() => setViewCanMode(false)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  !viewCanMode ? 'bg-white text-[#2C241E] shadow-xs' : 'text-white/70 hover:text-white'
                }`}
              >
                Photo
              </button>
              <button
                onClick={() => setViewCanMode(true)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  viewCanMode ? 'bg-white text-[#2C241E] shadow-xs' : 'text-white/70 hover:text-white'
                }`}
              >
                3D Can
              </button>
            </div>

            {/* Title & Metadata Over Image */}
            <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {drink.category}
                </span>
                <span className="text-xs text-[#E8D9CE] font-sans">
                  {drink.nutrition}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
                {drink.name}
              </h1>
              <p className="text-sm sm:text-base text-white/90 font-sans mt-1 line-clamp-2">
                {drink.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Stats Pill Ribbon */}
          <div className="bg-[#EFE7DE] border-y border-[#E2D5C7] px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#5C4A3E]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C07D53]" />
                <span>Prep: {drink.prepTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-[#789262]" />
                <span>Difficulty: {drink.difficulty}</span>
              </div>
            </div>

            {/* Serving Size Adjuster */}
            <div className="flex items-center gap-3 bg-white px-3.5 py-1.5 rounded-full border border-[#DBCDC0] shadow-xs">
              <span className="text-[#7A675B] text-xs font-medium">Servings:</span>
              <button
                onClick={() => setServings(Math.max(1, servings - 1))}
                disabled={servings <= 1}
                className="w-6 h-6 rounded-full bg-[#FAF7F2] hover:bg-[#EFE7DE] disabled:opacity-30 flex items-center justify-center text-[#2D241E] transition-colors cursor-pointer"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-serif font-bold text-sm text-[#2D241E] w-4 text-center">
                {servings}
              </span>
              <button
                onClick={() => setServings(servings + 1)}
                className="w-6 h-6 rounded-full bg-[#FAF7F2] hover:bg-[#EFE7DE] flex items-center justify-center text-[#2D241E] transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Main Recipe Content Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Ingredient Checklist */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-[#E9DFD3] shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#2D241E] flex items-center gap-2">
                    <span>Ingredients</span>
                    <span className="text-xs font-sans font-normal text-[#8A7669] bg-[#FAF5EE] px-2.5 py-0.5 rounded-full border border-[#E8DEC7]">
                      {drink.ingredients.length} items
                    </span>
                  </h3>
                  {servings !== 1 && (
                    <button
                      onClick={() => setServings(1)}
                      className="text-[11px] text-[#C07D53] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  )}
                </div>

                <p className="text-xs text-[#8A776A] mb-4">
                  Adjusted for <strong>{servings} {servings === 1 ? 'serving' : 'servings'}</strong>. Tap to check off as you prep!
                </p>

                <div className="space-y-2.5">
                  {drink.ingredients.map((ing, idx) => {
                    const isChecked = !!checkedIngredients[idx];
                    const scaledAmount = Number((ing.amount * multiplier).toFixed(1)).toString();

                    return (
                      <div
                        key={idx}
                        onClick={() => toggleIngredient(idx)}
                        className={`flex items-start gap-3 p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                          isChecked
                            ? 'bg-[#F2F6ED] border-[#C8DCB8] text-[#556947]'
                            : 'bg-[#FAF7F2] hover:bg-[#F3EFE9] border-[#EAE0D3] text-[#3E3228]'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center border transition-all ${
                          isChecked 
                            ? 'bg-[#789262] border-[#789262] text-white' 
                            : 'border-[#CBBBB0] bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="flex-1 text-xs sm:text-sm">
                          <span className={`font-semibold mr-1.5 ${isChecked ? 'line-through opacity-70' : ''}`}>
                            {scaledAmount} {ing.unit}
                          </span>
                          <span className={`${isChecked ? 'line-through opacity-70 text-[#6B7E5C]' : ''}`}>
                            {ing.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Barista Pro-Tip Card */}
              {drink.proTip && (
                <div className="bg-[#FAF3E8] rounded-3xl p-5 border border-[#E8DCC8] flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-[#E6AF2E]/20 text-[#8F6814] shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#4D3622] mb-0.5">Barista's Secret Note</h4>
                    <p className="text-xs text-[#6B5542] leading-relaxed">
                      {drink.proTip}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Step-by-Step Instructions with Progress Bar */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Progress Indicator Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#E9DFD3] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg font-bold text-[#2D241E]">Preparation Steps</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EFE7DE] text-[#695447]">
                      {completedCount} of {totalSteps} done
                    </span>
                  </div>
                  <span className="font-serif font-bold text-sm text-[#C07D53]">
                    {progressPercent}%
                  </span>
                </div>

                {/* Progress bar line */}
                <div className="w-full bg-[#EFE9DF] h-2.5 rounded-full overflow-hidden mb-6">
                  <div 
                    className="bg-gradient-to-r from-[#C07D53] to-[#789262] h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Numbered Step Cards */}
                <div className="space-y-4">
                  {drink.instructions.map((step, idx) => {
                    const isStepDone = !!completedSteps[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleStep(idx)}
                        className={`group relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isStepDone
                            ? 'bg-[#F4F7F1] border-[#CDE0BF]'
                            : 'bg-[#FAF7F2] hover:bg-[#F3ECE4] border-[#E8DEC7]'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Step Number Circle */}
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-sm font-bold shrink-0 transition-all ${
                            isStepDone
                              ? 'bg-[#789262] text-white shadow-xs'
                              : 'bg-white text-[#2D241E] border border-[#D5C7B7]'
                          }`}>
                            {isStepDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.step}
                          </div>

                          <div className="flex-1">
                            <h5 className={`font-serif text-base font-bold mb-1 transition-colors ${
                              isStepDone ? 'text-[#5B7348] line-through' : 'text-[#2D241E]'
                            }`}>
                              {step.title}
                            </h5>
                            <p className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                              isStepDone ? 'text-[#7D916C]' : 'text-[#69574B]'
                            }`}>
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Celebratory "Made it!" Button */}
                <div className="mt-6 pt-4 border-t border-[#F0E8DD]">
                  <button
                    onClick={triggerCelebration}
                    className={`w-full py-4 rounded-2xl font-serif text-base font-bold flex items-center justify-center gap-2.5 shadow-md transition-all duration-300 cursor-pointer ${
                      hasCelebrated || progressPercent === 100
                        ? 'bg-[#789262] hover:bg-[#688053] text-white'
                        : 'bg-[#2D241E] hover:bg-[#43352B] text-[#FAF7F2] hover:scale-[1.01]'
                    }`}
                  >
                    <Sparkles className="w-5 h-5 text-[#E6AF2E] animate-bounce" />
                    <span>{hasCelebrated ? '🎉 Cheers! You Made It!' : 'I Made This Drink!'}</span>
                  </button>
                  {hasCelebrated && (
                    <p className="text-center text-xs font-script text-2xl text-[#8E5E3D] mt-2 animate-fade-in">
                      Take a photo & savor every slow sip! ✨
                    </p>
                  )}
                </div>

              </div>

            </div>

          </div>

          {/* Related Drinks Recommendations */}
          <div className="p-6 sm:p-8 bg-[#F3ECE4] border-t border-[#E5DACD]">
            <h4 className="font-serif text-xl font-bold text-[#2D241E] mb-4">
              More drinks you will love
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedDrinks.map((relDrink) => (
                <div
                  key={relDrink.id}
                  onClick={() => onSelectDrink(relDrink)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E2D5C7] p-3 flex items-center gap-3 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <img
                    src={relDrink.image}
                    alt={relDrink.name}
                    className="w-14 h-14 rounded-xl object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#C07D53] uppercase">{relDrink.category}</span>
                    <h5 className="font-serif text-sm font-bold text-[#2D241E] truncate group-hover:text-[#8C5D3F]">
                      {relDrink.name}
                    </h5>
                    <span className="text-[11px] text-[#7E6D62]">{relDrink.prepTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A8988D] group-hover:text-[#2D241E] group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
