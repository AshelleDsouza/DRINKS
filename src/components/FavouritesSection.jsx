import React from 'react';
import { Heart, Sparkles, Coffee, ArrowRight, Trash2 } from 'lucide-react';
import DrinkCard from './DrinkCard';

export default function FavouritesSection({
  drinks,
  favourites,
  onToggleFavourite,
  onSelectDrink,
  onExploreClick
}) {
  const favouriteDrinks = drinks.filter((d) => favourites.includes(d.id));

  return (
    <section id="favourites-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#F6EFE7] rounded-4xl p-6 sm:p-10 md:p-12 border border-[#E8DACB]">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#C07D53] uppercase mb-1">
              <Heart className="w-3.5 h-3.5 fill-[#C07D53]" />
              <span>Your Personal Moodboard</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D241E]">
              My Saved Favourites
            </h2>
          </div>

          <div className="text-xs text-[#7B685B] font-medium">
            {favouriteDrinks.length > 0 ? (
              <span>Saved <strong className="text-[#2D241E]">{favouriteDrinks.length}</strong> {favouriteDrinks.length === 1 ? 'drink' : 'drinks'} in your home menu</span>
            ) : null}
          </div>
        </div>

        {/* Empty State */}
        {favouriteDrinks.length === 0 ? (
          <div className="bg-white/80 rounded-3xl p-10 sm:p-14 text-center max-w-md mx-auto border border-[#E5DACD] space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF5EE] border border-[#E2D2C3] flex items-center justify-center mx-auto text-[#B59D8E]">
              <Heart className="w-8 h-8 stroke-[1.5]" />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#2D241E]">
                No favourites saved yet
              </h3>
              <p className="text-xs sm:text-sm text-[#7F6F64] leading-relaxed">
                Click the heart icon on any drink card to build your own aesthetic home café menu.
              </p>
            </div>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D241E] text-white text-xs font-semibold hover:bg-[#43352B] transition-all cursor-pointer shadow-sm hover:scale-105"
            >
              <span>Explore All 10 Drinks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          /* Grid of saved favourites */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {favouriteDrinks.map((drink, idx) => (
              <DrinkCard
                key={drink.id}
                drink={drink}
                isFavourite={true}
                onToggleFavourite={onToggleFavourite}
                onSelectDrink={onSelectDrink}
                index={idx}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
