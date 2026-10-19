import React from 'react';
import { Search, X, Sparkles, Coffee, Apple, Droplets, IceCream, Leaf, SlidersHorizontal } from 'lucide-react';
import { categoriesList } from '../data/drinks';

export default function SearchAndFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  totalResults
}) {
  // Mapping icons to string names
  const renderIcon = (name) => {
    switch (name) {
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Apple': return <Apple className="w-4 h-4" />;
      case 'Droplets': return <Droplets className="w-4 h-4" />;
      case 'IceCream': return <IceCream className="w-4 h-4" />;
      case 'Leaf': return <Leaf className="w-4 h-4" />;
      case 'Sparkles': default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#E9DFC8] shadow-sm">
        
        {/* Title & subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E6543] mb-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Curate Your Craving</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D241E]">
              What are you craving today?
            </h2>
          </div>
          <div className="text-sm text-[#7D6B5E] font-medium">
            Showing <span className="font-bold text-[#2D241E]">{totalResults}</span> {totalResults === 1 ? 'drink' : 'drinks'}
          </div>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#9E8B7F]">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by drink name, ingredients (e.g., matcha, espresso, mint, mango)..."
            className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E2D5C7] text-[#2C241E] placeholder-[#9E8C7F] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C07D53] focus:border-transparent transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#9E8B7F] hover:text-[#2C241E] cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Pills / Chips */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
          {categoriesList.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2D241E] text-[#FAF7F2] shadow-md scale-105'
                    : 'bg-[#FAF7F2] text-[#635346] hover:bg-[#EFE8DD] border border-[#E5DACD] hover:text-[#2D241E]'
                }`}
              >
                <span className={isSelected ? 'text-[#E6AF2E]' : 'text-[#8E7869]'}>
                  {renderIcon(cat.icon)}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
