import React, { useState } from 'react';
import { Heart, Clock, ChefHat, Sparkles, ArrowUpRight, Eye } from 'lucide-react';
import { DrinkCan } from './DrinkCan';

export default function DrinkCard({
  drink,
  isFavourite,
  onToggleFavourite,
  onSelectDrink,
  index
}) {
  const [viewMode, setViewMode] = useState('photo'); // 'photo' | 'can'

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#ECE2D5] shadow-xs hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 ${drink.cardSpan}`}
    >
      {/* Visual Image / 3D Can Header */}
      <div 
        onClick={() => onSelectDrink(drink)}
        className="relative w-full h-72 sm:h-80 overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500"
        style={{
          backgroundColor: viewMode === 'can' ? drink.theme.bg : '#FAF7F2'
        }}
      >
        {viewMode === 'photo' ? (
          <>
            <img
              src={drink.image}
              alt={drink.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            {/* Soft gradient bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </>
        ) : (
          <div className="relative py-4 transform scale-90 group-hover:scale-95 transition-transform duration-500">
            {/* Giant background text snippet */}
            <span 
              className="absolute inset-0 flex items-center justify-center text-white/30 text-7xl font-black uppercase pointer-events-none select-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {drink.giantWord}
            </span>
            <DrinkCan drink={drink} />
          </div>
        )}

        {/* View mode toggle pill (Photo vs Can) */}
        <div 
          className="absolute bottom-4 left-4 z-20 flex items-center bg-black/60 backdrop-blur-md rounded-full p-0.5 border border-white/20 text-[10px] font-bold text-white shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setViewMode('photo')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
              viewMode === 'photo' ? 'bg-white text-[#2C241E] shadow-xs' : 'text-white/70 hover:text-white'
            }`}
          >
            Photo
          </button>
          <button
            onClick={() => setViewMode('can')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
              viewMode === 'can' ? 'bg-white text-[#2C241E] shadow-xs' : 'text-white/70 hover:text-white'
            }`}
          >
            3D Can
          </button>
        </div>

        {/* Category & Badge pill on image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-md text-[#2D241E] shadow-sm">
            {drink.category}
          </span>
          {drink.badge && (
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2D241E]/80 backdrop-blur-md text-[#F4ECE3] shadow-sm hidden sm:inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#E6AF2E]" />
              {drink.badge}
            </span>
          )}
        </div>

        {/* Heart / Favourite Button overlay */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavourite(drink.id);
          }}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/85 hover:bg-white backdrop-blur-md flex items-center justify-center text-[#3D2F26] hover:text-[#E26D77] transition-all duration-300 shadow-md hover:scale-110 cursor-pointer"
        >
          <Heart
            className={`w-5 h-5 transition-transform duration-300 ${
              isFavourite ? 'fill-[#E26D77] text-[#E26D77] scale-110' : 'group-hover:scale-105'
            }`}
          />
        </button>

        {/* Quick View Pill on Hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:flex items-center gap-1 bg-white/95 text-[#2C241E] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md">
          <span>View Recipe</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Header & Title */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 
              onClick={() => onSelectDrink(drink)}
              className="font-serif text-xl sm:text-2xl font-bold text-[#2D241E] hover:text-[#8C5D3F] transition-colors cursor-pointer leading-tight"
            >
              {drink.name}
            </h3>
          </div>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-[#736255] line-clamp-2 mb-4 leading-relaxed font-sans">
            {drink.description}
          </p>

          {/* Quick tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {drink.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2.5 py-0.5 rounded-md bg-[#FAF4ED] text-[#806857] border border-[#EBE2D7]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer with Prep time, Difficulty and Action */}
        <div className="pt-4 border-t border-[#F0E8DF] flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-medium text-[#7D6B5F]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C07D53]" />
              <span>{drink.prepTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ChefHat className="w-3.5 h-3.5 text-[#789262]" />
              <span>{drink.difficulty}</span>
            </div>
          </div>

          {/* View Recipe Button */}
          <button
            onClick={() => onSelectDrink(drink)}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#2D241E] hover:text-[#C07D53] transition-colors cursor-pointer"
          >
            <span>Recipe</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
