import React, { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import CanShowcaseHero from './components/CanShowcaseHero';
import Hero from './components/Hero';
import SearchAndFilters from './components/SearchAndFilters';
import DrinkCard from './components/DrinkCard';
import RecipeModal from './components/RecipeModal';
import RandomDrinkGenerator from './components/RandomDrinkGenerator';
import FavouritesSection from './components/FavouritesSection';
import Footer from './components/Footer';
import { drinksData } from './data/drinks';
import { Sparkles, Heart, Coffee, RefreshCw, Layers } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'sip_and_stir_favourites';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentCanIndex, setCurrentCanIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : ['spanish-latte', 'iced-matcha-latte'];
    } catch {
      return ['spanish-latte', 'iced-matcha-latte'];
    }
  });

  const exploreRef = useRef(null);

  // Persist favourites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favourites));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }, [favourites]);

  // Toggle favourite
  const toggleFavourite = (drinkId) => {
    setFavourites((prev) => {
      if (prev.includes(drinkId)) {
        return prev.filter((id) => id !== drinkId);
      } else {
        return [...prev, drinkId];
      }
    });
  };

  // Scroll to explore section
  const handleScrollToExplore = () => {
    setActiveTab('explore');
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to favourites section
  const handleOpenFavourites = () => {
    setActiveTab('favourites');
    const el = document.getElementById('favourites-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to random generator
  const handleSurpriseMe = () => {
    const el = document.getElementById('surprise-me');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered drinks based on search & category
  const filteredDrinks = useMemo(() => {
    return drinksData.filter((drink) => {
      const matchesCategory =
        selectedCategory === 'all' || drink.category === selectedCategory;

      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        drink.name.toLowerCase().includes(term) ||
        drink.description.toLowerCase().includes(term) ||
        drink.subtitle.toLowerCase().includes(term) ||
        drink.category.toLowerCase().includes(term) ||
        drink.tags.some((tag) => tag.toLowerCase().includes(term)) ||
        drink.ingredients.some((ing) => ing.name.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C241E] flex flex-col font-sans selection:bg-[#E8CDBB]">
      
      {/* 
        ══════════════════════════════════════════════════════════════════════════
        1. BEHANCE / PINTEREST CAN ANIMATION HERO SHOWCASE
        Mirrors the exact video: Bold animated background colors, giant typography 
        behind the 3D beverage cans, floating garnish slices, and smooth arrow navigation.
        ══════════════════════════════════════════════════════════════════════════
      */}
      <CanShowcaseHero
        drinks={drinksData}
        currentIndex={currentCanIndex}
        setCurrentIndex={setCurrentCanIndex}
        onSelectDrink={(drink) => setSelectedDrink(drink)}
        onExploreClick={handleScrollToExplore}
        isFavourite={(id) => favourites.includes(id)}
        onToggleFavourite={toggleFavourite}
      />

      {/* 
        ══════════════════════════════════════════════════════════════════════════
        2. COMPACT STICKY SECONDARY NAV FOR SCROLLING EXPLORATION
        ══════════════════════════════════════════════════════════════════════════
      */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favouritesCount={favourites.length}
        onOpenFavourites={handleOpenFavourites}
        onExploreClick={handleScrollToExplore}
      />

      <main className="flex-1">
        
        {/* Magazine-style Pinterest Moodboard Introduction */}
        <Hero
          drinks={drinksData}
          onExploreClick={handleScrollToExplore}
          onSurpriseClick={handleSurpriseMe}
          onSelectDrink={(drink) => setSelectedDrink(drink)}
        />

        {/* Search and Category Filters */}
        <div ref={exploreRef}>
          <SearchAndFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            totalResults={filteredDrinks.length}
          />
        </div>

        {/* Explore the 10 Drinks (Pinterest-inspired Responsive Grid with Photo/3D Can toggle) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredDrinks.length === 0 ? (
            <div className="bg-white/60 rounded-3xl p-12 text-center border border-[#E8DEC7] my-8 max-w-lg mx-auto">
              <div className="w-14 h-14 bg-[#FAF2E8] rounded-full flex items-center justify-center mx-auto text-[#C07D53] mb-4">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2D241E] mb-2">No matching drinks found</h3>
              <p className="text-sm text-[#7D6A5D] mb-6">
                We couldn't find any drinks matching "{searchTerm}". Try clearing your search or browsing another category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 rounded-full bg-[#2D241E] text-white text-xs font-semibold hover:bg-[#43352B] transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
              {filteredDrinks.map((drink, index) => (
                <DrinkCard
                  key={drink.id}
                  drink={drink}
                  isFavourite={favourites.includes(drink.id)}
                  onToggleFavourite={toggleFavourite}
                  onSelectDrink={(d) => setSelectedDrink(d)}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>

        {/* Random Drink Generator: "Can't decide? Let the universe choose." */}
        <RandomDrinkGenerator
          drinks={drinksData}
          onSelectDrink={(drink) => setSelectedDrink(drink)}
        />

        {/* My Favourites Section */}
        <FavouritesSection
          drinks={drinksData}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
          onSelectDrink={(drink) => setSelectedDrink(drink)}
          onExploreClick={handleScrollToExplore}
        />
      </main>

      {/* Individual Recipe Experience Modal */}
      {selectedDrink && (
        <RecipeModal
          drink={selectedDrink}
          onClose={() => setSelectedDrink(null)}
          isFavourite={favourites.includes(selectedDrink.id)}
          onToggleFavourite={toggleFavourite}
          onSelectDrink={(d) => setSelectedDrink(d)}
          allDrinks={drinksData}
        />
      )}

      {/* Aesthetic Footer */}
      <Footer onExploreClick={handleScrollToExplore} />

    </div>
  );
}
