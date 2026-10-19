import React from 'react';
import { Heart, Search, Sparkles, Coffee, Compass, Bookmark } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  favouritesCount, 
  onOpenFavourites,
  onExploreClick
}) {
  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner with café greeting */}
      <div className="bg-[#2D241E] text-[#E8DCC4] text-xs py-1.5 px-4 text-center font-medium tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#E6AF2E] animate-pulse" />
        <span>Homemade café moments • 10 aesthetic drinks to romanticize your day</span>
        <Sparkles className="w-3.5 h-3.5 text-[#E6AF2E] animate-pulse" />
      </div>

      {/* Main Glassmorphic Nav */}
      <nav className="glass-cafe border-b border-[#EAE3D9] px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group flex items-center gap-2.5 text-decoration-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#EFE7DC] border border-[#D9CBBF] flex items-center justify-center text-lg shadow-sm group-hover:scale-105 group-hover:bg-[#E4D5C5] transition-transform duration-300">
              ☕
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#2C241E] leading-none group-hover:text-[#8C5D3F] transition-colors">
                sip & stir<span className="text-[#C07D53]">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#8F7D70] font-sans mt-0.5">
                Your Little Home Café
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#F3ECE4]/80 p-1.5 rounded-full border border-[#E5DACD]">
            <button
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === 'home' 
                  ? 'bg-[#2D241E] text-[#FAF7F2] shadow-sm' 
                  : 'text-[#6D5D52] hover:text-[#2D241E] hover:bg-[#E8DFD3]'
              }`}
            >
              Home
            </button>
            <button
              onClick={onExploreClick}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === 'explore' 
                  ? 'bg-[#2D241E] text-[#FAF7F2] shadow-sm' 
                  : 'text-[#6D5D52] hover:text-[#2D241E] hover:bg-[#E8DFD3]'
              }`}
            >
              Explore Drinks
            </button>
            <a
              href="#categories"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('categories');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#6D5D52] hover:text-[#2D241E] hover:bg-[#E8DFD3] transition-all duration-200 cursor-pointer"
            >
              Categories
            </a>
            <button
              onClick={onOpenFavourites}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'favourites' 
                  ? 'bg-[#2D241E] text-[#FAF7F2] shadow-sm' 
                  : 'text-[#6D5D52] hover:text-[#2D241E] hover:bg-[#E8DFD3]'
              }`}
            >
              <span>My Favourites</span>
              {favouritesCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#C07D53] text-white text-[10px] flex items-center justify-center font-bold">
                  {favouritesCount}
                </span>
              )}
            </button>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Quick Surprise generator trigger */}
            <a
              href="#surprise-me"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('surprise-me');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full border border-[#D9CBBF] bg-white/70 text-[#4D3F35] hover:bg-[#EFE8DD] transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D97D54]" />
              <span>Surprise Me</span>
            </a>

            {/* Heart / Favourites Button */}
            <button
              onClick={onOpenFavourites}
              aria-label="View Saved Favourites"
              className="relative p-2.5 rounded-full bg-[#FAF7F2] border border-[#D9CBBF] text-[#4A3B32] hover:text-[#E26D77] hover:border-[#E26D77] hover:bg-[#FFF5F5] transition-all duration-200 group cursor-pointer shadow-sm hover:scale-105"
            >
              <Heart 
                className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                  favouritesCount > 0 ? 'fill-[#E26D77] text-[#E26D77]' : ''
                }`} 
              />
              {favouritesCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 bg-[#E26D77] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {favouritesCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
