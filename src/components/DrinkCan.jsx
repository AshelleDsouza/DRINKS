import React from 'react';

/**
 * Realistic 3D-styled Beverage Can Component
 * Crafted to mirror the Fruit Cider / Soda can from the Behance / Pinterest reference video:
 * - Metallic top rim, beveled neck, pull-tab
 * - Condensation droplets with specular reflections
 * - Embossed vintage oval label with drink title, fruit/botanical badge, and craft typography
 * - Bottom rim with soft contact drop-shadow
 */
export function DrinkCan({ drink, className = '' }) {
  const { theme, name, category, subtitle } = drink;

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      
      {/* 3D Can Body Container */}
      <div className="relative w-48 sm:w-56 md:w-64 h-[330px] sm:h-[390px] md:h-[430px] filter drop-shadow-2xl">
        
        {/* Top Rim (Brushed Aluminium & Chrome Shine) */}
        <div className="relative w-[78%] h-7 mx-auto rounded-t-xl bg-gradient-to-r from-[#D6D6D6] via-[#FFFFFF] via-45% to-[#8E8E93] border-t border-x border-[#FFFFFF]/80 shadow-md overflow-hidden z-20">
          {/* Inner rim ridge */}
          <div className="w-[88%] h-3 mx-auto mt-1 rounded-full bg-gradient-to-r from-[#8E8E93] via-[#E5E5EA] to-[#636366] border border-black/10 flex items-center justify-center">
            {/* Pull tab hint */}
            <div className="w-5 h-2 rounded-full bg-gradient-to-r from-[#B0B0B0] to-[#EAEAEA] border border-black/20" />
          </div>
          {/* Glossy specular highlight line across top */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-white opacity-80" />
        </div>

        {/* Can Tapered Neck / Chime */}
        <div 
          className="relative w-[88%] h-5 mx-auto rounded-t-sm z-10 overflow-hidden shadow-inner"
          style={{
            background: `linear-gradient(to right, ${theme.canBody} 0%, ${theme.canSecondary} 25%, #FFFFFF 48%, ${theme.canBody} 70%, #1A1A1A 100%)`
          }}
        >
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Main Can Cylinder Body */}
        <div 
          className="relative w-full h-[270px] sm:h-[320px] md:h-[355px] rounded-b-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-between py-4"
          style={{
            backgroundColor: theme.canBody,
            backgroundImage: `linear-gradient(90deg, 
              rgba(0,0,0,0.55) 0%, 
              rgba(0,0,0,0.2) 14%, 
              rgba(255,255,255,0.05) 28%, 
              rgba(255,255,255,0.55) 48%, 
              rgba(255,255,255,0.15) 54%, 
              rgba(0,0,0,0.2) 78%, 
              rgba(0,0,0,0.7) 100%)`
          }}
        >
          
          {/* Subtle Can Texture & Metallic Sheen Strip */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/25 pointer-events-none" />

          {/* Condensation Droplets Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <filter id="droplet-shadow">
                <feDropShadow dx="1" dy="1" stdDeviation="0.5" floodColor="#000" floodOpacity="0.4" />
              </filter>
              <circle cx="20%" cy="18%" r="3.5" fill="#FFFFFF" opacity="0.9" filter="url(#droplet-shadow)" />
              <circle cx="23%" cy="22%" r="2" fill="#FFFFFF" opacity="0.8" />
              <circle cx="15%" cy="45%" r="4" fill="#FFFFFF" opacity="0.85" filter="url(#droplet-shadow)" />
              <circle cx="82%" cy="30%" r="3" fill="#FFFFFF" opacity="0.9" />
              <circle cx="85%" cy="55%" r="4.5" fill="#FFFFFF" opacity="0.85" filter="url(#droplet-shadow)" />
              <circle cx="78%" cy="75%" r="2.5" fill="#FFFFFF" opacity="0.8" />
              <circle cx="25%" cy="80%" r="3.5" fill="#FFFFFF" opacity="0.8" />
              <circle cx="48%" cy="12%" r="2" fill="#FFFFFF" opacity="0.7" />
              <circle cx="53%" cy="88%" r="3" fill="#FFFFFF" opacity="0.75" />
            </svg>
          </div>

          {/* Top Brand Stamp on Can */}
          <div className="relative z-10 text-center pt-1">
            <span className="text-[10px] sm:text-[11px] font-sans font-extrabold tracking-[0.25em] text-white/90 uppercase drop-shadow-sm">
              Sip & Stir Home Café
            </span>
          </div>

          {/* Authentic Vintage Oval Craft Badge (Faithful to Behance reference video) */}
          <div className="relative z-10 w-[78%] sm:w-[82%] bg-[#FFFDF9] rounded-full py-5 px-3 border-2 border-[#D8C7B5] shadow-xl flex flex-col items-center justify-center text-center">
            
            {/* Arched Top Header */}
            <div className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.22em] text-[#C45738] uppercase">
              ARTISAN BLEND
            </div>
            
            <div className="text-[8px] font-script text-[#8F7565] tracking-widest italic -mt-0.5">
              edition artisanale
            </div>

            {/* Center Drink Icon / Graphic */}
            <div className="w-11 h-11 sm:w-13 sm:h-13 my-1.5 rounded-full bg-[#FAF3EB] border border-[#E8DEC7] flex items-center justify-center shadow-inner text-2xl group-hover:scale-110 transition-transform">
              {drink.category === 'Coffee' && '☕'}
              {drink.category === 'Tea & Matcha' && '🍵'}
              {drink.category === 'Fruity' && (drink.id.includes('mango') ? '🥭' : '🍓')}
              {drink.category === 'Refreshing' && (drink.id.includes('watermelon') ? '🍉' : '🫐')}
              {drink.category === 'Sweet Treats' && '🍫'}
            </div>

            {/* Drink Name in Oval Badge */}
            <div className="font-serif font-black text-sm sm:text-base text-[#2E1F16] leading-tight px-1">
              {drink.name}
            </div>

            {/* Script subtitle */}
            <div className="font-script text-xs text-[#8E5E3D] italic mt-0.5">
              Fresh Home Recipe
            </div>

            {/* Subtle Divider Lines with Spec Info */}
            <div className="w-full mt-2 pt-1 border-t border-[#E8DCCB] flex items-center justify-between px-2 text-[8px] sm:text-[9px] font-bold text-[#8B7465]">
              <span>330 ml</span>
              <span className="w-1 h-1 rounded-full bg-[#C45738]" />
              <span>PREP: {drink.prepTime}</span>
              <span className="w-1 h-1 rounded-full bg-[#C45738]" />
              <span>100% FRESH</span>
            </div>
          </div>

          {/* Bottom Volume / Signature stamp */}
          <div className="relative z-10 pb-1 text-center">
            <span className="text-[9px] font-semibold text-white/80 tracking-wider">
              {drink.tags[0]} • Crafted for slow living
            </span>
          </div>

          {/* Bottom Metallic Lip Rim */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/60 via-[#E5E5EA]/40 to-transparent border-b-2 border-white/50" />
        </div>

      </div>

      {/* Realistic Oval Ground Shadow under Can */}
      <div 
        className="w-40 sm:w-48 h-5 sm:h-6 rounded-full -mt-2.5 blur-md"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)'
        }}
      />
    </div>
  );
}

/**
 * Floating Garnish / Ingredient Elements (Floating Fruit slices, Mint leaves, Ice cubes, Coffee beans)
 * Moves smoothly around the can with customized float animations exactly like in the video.
 */
export function FloatingGarnishes({ drink }) {
  const getGarnishConfig = (id) => {
    switch (id) {
      case 'spanish-latte':
      case 'dalgona-coffee':
      case 'vietnamese-iced-coffee':
      case 'iced-caramel-macchiato':
        return {
          leftTop: { emoji: '🧊', label: 'Clear Ice', shadow: 'rgba(0,0,0,0.2)' },
          rightTop: { emoji: '☕', label: 'Espresso', shadow: 'rgba(0,0,0,0.25)' },
          leftBottom: { emoji: '✨', label: 'Caramel', shadow: 'rgba(0,0,0,0.2)' },
          rightBottom: { emoji: '🧊', label: 'Chilled Milk', shadow: 'rgba(0,0,0,0.2)' },
          botanical1: '🌱',
          botanical2: '✨'
        };
      case 'iced-matcha-latte':
        return {
          leftTop: { emoji: '🍃', label: 'Matcha Leaf', shadow: 'rgba(40,80,20,0.3)' },
          rightTop: { emoji: '🧊', label: 'Ice Cubes', shadow: 'rgba(0,0,0,0.2)' },
          leftBottom: { emoji: '🍵', label: 'Ceremonial', shadow: 'rgba(40,80,20,0.3)' },
          rightBottom: { emoji: '🍃', label: 'Green Tea', shadow: 'rgba(40,80,20,0.3)' },
          botanical1: '🌿',
          botanical2: '🌱'
        };
      case 'strawberry-lemonade':
        return {
          leftTop: { emoji: '🍓', label: 'Fresh Berry', shadow: 'rgba(200,40,40,0.3)' },
          rightTop: { emoji: '🍋', label: 'Meyer Lemon', shadow: 'rgba(200,160,20,0.3)' },
          leftBottom: { emoji: '🍓', label: 'Sliced Berry', shadow: 'rgba(200,40,40,0.3)' },
          rightBottom: { emoji: '🌿', label: 'Fresh Mint', shadow: 'rgba(40,100,20,0.3)' },
          botanical1: '🍃',
          botanical2: '🍋'
        };
      case 'blueberry-mojito-mocktail':
        return {
          leftTop: { emoji: '🫐', label: 'Blueberry', shadow: 'rgba(40,40,120,0.3)' },
          rightTop: { emoji: '🌿', label: 'Garden Mint', shadow: 'rgba(20,90,20,0.3)' },
          leftBottom: { emoji: '🍋', label: 'Tart Lime', shadow: 'rgba(60,120,20,0.3)' },
          rightBottom: { emoji: '🫐', label: 'Berry Fizz', shadow: 'rgba(40,40,120,0.3)' },
          botanical1: '🍃',
          botanical2: '🧊'
        };
      case 'mango-smoothie':
        return {
          leftTop: { emoji: '🥭', label: 'Golden Mango', shadow: 'rgba(200,120,20,0.3)' },
          rightTop: { emoji: '🍯', label: 'Wildflower Honey', shadow: 'rgba(200,140,20,0.3)' },
          leftBottom: { emoji: '🥭', label: 'Mango Dice', shadow: 'rgba(200,120,20,0.3)' },
          rightBottom: { emoji: '🥛', label: 'Greek Yogurt', shadow: 'rgba(0,0,0,0.2)' },
          botanical1: '✨',
          botanical2: '🥭'
        };
      case 'watermelon-mint-cooler':
        return {
          leftTop: { emoji: '🍉', label: 'Watermelon Slice', shadow: 'rgba(200,50,50,0.3)' },
          rightTop: { emoji: '🌿', label: 'Garden Mint', shadow: 'rgba(30,100,20,0.3)' },
          leftBottom: { emoji: '🧊', label: 'Crushed Ice', shadow: 'rgba(0,0,0,0.2)' },
          rightBottom: { emoji: '🍉', label: 'Melon Wedge', shadow: 'rgba(200,50,50,0.3)' },
          botanical1: '🍃',
          botanical2: '🍋'
        };
      case 'chocolate-milkshake':
      default:
        return {
          leftTop: { emoji: '🍫', label: 'Dutch Cocoa', shadow: 'rgba(60,30,20,0.3)' },
          rightTop: { emoji: '🍨', label: 'Ice Cream', shadow: 'rgba(60,30,20,0.3)' },
          leftBottom: { emoji: '✨', label: 'Fudge Swirl', shadow: 'rgba(60,30,20,0.3)' },
          rightBottom: { emoji: '🍫', label: 'Dark Chocolate', shadow: 'rgba(60,30,20,0.3)' },
          botanical1: '✨',
          botanical2: '🍨'
        };
    }
  };

  const garnishes = getGarnishConfig(drink.id);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      
      {/* Top Left Floating Garnish */}
      <div 
        className="absolute left-4 sm:left-12 lg:left-24 top-16 sm:top-24 animate-float-slow"
        style={{ animationDuration: '6s' }}
      >
        <div className="text-4xl sm:text-6xl md:text-7xl filter drop-shadow-xl hover:scale-110 transition-transform">
          {garnishes.leftTop.emoji}
        </div>
      </div>

      {/* Top Right Floating Garnish */}
      <div 
        className="absolute right-4 sm:right-12 lg:right-28 top-12 sm:top-20 animate-float-reverse"
        style={{ animationDuration: '7s' }}
      >
        <div className="text-4xl sm:text-6xl md:text-7xl filter drop-shadow-xl hover:scale-110 transition-transform">
          {garnishes.rightTop.emoji}
        </div>
      </div>

      {/* Bottom Left Floating Garnish (Bigger slice near foreground) */}
      <div 
        className="absolute -left-2 sm:left-10 lg:left-16 bottom-16 sm:bottom-24 animate-float-reverse"
        style={{ animationDuration: '8s' }}
      >
        <div className="text-5xl sm:text-7xl md:text-8xl filter drop-shadow-2xl">
          {garnishes.leftBottom.emoji}
        </div>
      </div>

      {/* Bottom Right Floating Garnish */}
      <div 
        className="absolute right-2 sm:right-10 lg:right-20 bottom-14 sm:bottom-20 animate-float-slow"
        style={{ animationDuration: '6.5s' }}
      >
        <div className="text-5xl sm:text-6xl md:text-7xl filter drop-shadow-2xl">
          {garnishes.rightBottom.emoji}
        </div>
      </div>

      {/* Small Decorative Botanical Leaves right around the can base */}
      <div className="absolute left-[34%] bottom-28 text-2xl sm:text-3xl animate-pulse-subtle">
        {garnishes.botanical1}
      </div>
      <div className="absolute right-[33%] top-24 text-2xl sm:text-3xl animate-pulse-subtle">
        {garnishes.botanical2}
      </div>

    </div>
  );
}
