export const drinksData = [
  {
    id: 'spanish-latte',
    name: 'Spanish Latte',
    giantWord: 'Spanish',
    shortName: 'Spanish Latte',
    subtitle: 'Creamy espresso with caramelized sweet condensed milk',
    category: 'Coffee',
    prepTime: '5 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#E29578',           // Warm terracotta coral
      bgLight: '#F3B49F',
      text: '#FFFFFF',
      accent: '#FFDDD2',
      canBody: '#C86D49',
      canSecondary: '#DF8B65',
      badgeBg: '#FAF7F2',
      badgeText: '#4A2818',
    },
    accentColor: '#C07D53',
    cardSpan: 'col-span-12 md:col-span-7 lg:col-span-7',
    badge: 'Café Signature',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
    description: 'A luxurious twist on the traditional iced latte, combining bold espresso with rich, silky condensed milk and chilled whole milk over crystal-clear ice cubes.',
    tags: ['Rich', 'Sweet & Bold', 'Bestseller', 'Iced'],
    nutrition: '190 kcal • 6g Protein • 28g Carbs',
    ingredients: [
      { name: 'Freshly brewed double espresso', amount: 2, unit: 'shots', originalAmount: 2 },
      { name: 'Sweetened condensed milk', amount: 2, unit: 'tbsp', originalAmount: 2 },
      { name: 'Whole milk (or oat milk)', amount: 120, unit: 'ml', originalAmount: 120 },
      { name: 'Ice cubes', amount: 1, unit: 'cup', originalAmount: 1 },
      { name: 'Ground cinnamon (optional dust)', amount: 1, unit: 'pinch', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'Layer the sweetness', text: 'Add 2 tablespoons of sweetened condensed milk to the bottom of a tall glass.' },
      { step: 2, title: 'Chill with ice', text: 'Fill the glass to the brim with clear ice cubes, keeping the condensed milk centered.' },
      { step: 3, title: 'Pour the cold milk', text: 'Slowly pour 120ml of cold whole milk or creamy oat milk over the ice until 3/4 full.' },
      { step: 4, title: 'Float the espresso', text: 'Freshly pull a double shot of espresso and gently float it over the top using the back of a spoon for that aesthetic layered gradient.' },
      { step: 5, title: 'Stir & enjoy', text: 'Swirl with a glass straw just before drinking to watch the golden coffee waves mingle with the creamy milk!' }
    ],
    proTip: 'Use a dark roast coffee with chocolatey or nutty undertones to perfectly counterbalance the condensed milk.'
  },
  {
    id: 'iced-matcha-latte',
    name: 'Iced Matcha Latte',
    giantWord: 'Matcha',
    shortName: 'Matcha',
    subtitle: 'Vibrant ceremonial green tea layered over velvety chilled milk',
    category: 'Tea & Matcha',
    prepTime: '6 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#94B447',           // Vibrant matcha lime/sage green
      bgLight: '#ABC961',
      text: '#FFFFFF',
      accent: '#E6F4B8',
      canBody: '#6C8B2A',
      canSecondary: '#85A836',
      badgeBg: '#FAF7F2',
      badgeText: '#2B3D10',
    },
    accentColor: '#789262',
    cardSpan: 'col-span-12 md:col-span-5 lg:col-span-5',
    badge: 'Zen Moment',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1200&auto=format&fit=crop',
    description: 'Vibrant jade ceremonial matcha whisked with warm water into an airy froth, layered gently over crisp ice and your choice of creamy milk.',
    tags: ['Antioxidant Rich', 'Earthy', 'Clean Energy'],
    nutrition: '140 kcal • 4g Protein • 16g Carbs',
    ingredients: [
      { name: 'Ceremonial grade matcha powder', amount: 1.5, unit: 'tsp', originalAmount: 1.5 },
      { name: 'Warm water (approx 80°C / 175°F)', amount: 60, unit: 'ml', originalAmount: 60 },
      { name: 'Oat or whole milk', amount: 180, unit: 'ml', originalAmount: 180 },
      { name: 'Vanilla syrup or maple syrup', amount: 1, unit: 'tbsp', originalAmount: 1 },
      { name: 'Large ice cubes', amount: 1, unit: 'cup', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'Sift the matcha', text: 'Sift 1.5 tsp of ceremonial matcha through a fine mesh strainer into a chawan or bowl to prevent any clumps.' },
      { step: 2, title: 'Whisk until frothy', text: 'Pour in 60ml warm water. Whisk vigorously in a "W" motion using a bamboo chasen until a thick, bright green foam forms on top.' },
      { step: 3, title: 'Prepare the glass', text: 'Fill your serving glass with large ice cubes, pour in the milk and sweetener, stirring lightly.' },
      { step: 4, title: 'Pour the jade cascade', text: 'Slowly pour the whisked matcha over the top of the ice. Marvel at the cloud-like emerald gradient before you sip.' }
    ],
    proTip: 'Never use boiling water! Water over 80°C scorches delicate matcha leaves and introduces bitter notes.'
  },
  {
    id: 'strawberry-lemonade',
    name: 'Strawberry Lemonade',
    giantWord: 'Berry',
    shortName: 'Strawberry',
    subtitle: 'Muddled sun-ripened berries with fresh squeezed Meyer lemons',
    category: 'Fruity',
    prepTime: '7 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#FA8072',           // Fresh coral strawberry salmon pink
      bgLight: '#FF9E93',
      text: '#FFFFFF',
      accent: '#FFE0DC',
      canBody: '#E05847',
      canSecondary: '#F47160',
      badgeBg: '#FAF7F2',
      badgeText: '#4D1510',
    },
    accentColor: '#E26D77',
    cardSpan: 'col-span-12 md:col-span-5 lg:col-span-5',
    badge: 'Summer Favorite',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?q=80&w=1200&auto=format&fit=crop',
    description: 'Freshly muddled sweet ripe strawberries mingled with zesty freshly squeezed lemon juice, simple cane syrup, and sparkling spring water.',
    tags: ['Tangy', 'Berry Bliss', 'Ultra Refreshing'],
    nutrition: '110 kcal • 1g Protein • 26g Carbs',
    ingredients: [
      { name: 'Fresh ripe strawberries, hulled', amount: 5, unit: 'whole', originalAmount: 5 },
      { name: 'Freshly squeezed lemon juice', amount: 45, unit: 'ml', originalAmount: 45 },
      { name: 'Pure cane sugar syrup', amount: 2, unit: 'tbsp', originalAmount: 2 },
      { name: 'Cold water or sparkling club soda', amount: 180, unit: 'ml', originalAmount: 180 },
      { name: 'Crushed ice & lemon wheels for garnish', amount: 1, unit: 'cup', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'Muddle the berries', text: 'Place fresh strawberries and cane syrup in your glass. Gently muddle with a cocktail muddler until crushed and juicy.' },
      { step: 2, title: 'Add citrus punch', text: 'Pour in the freshly squeezed lemon juice and stir with the strawberry purée.' },
      { step: 3, title: 'Ice to the top', text: 'Pack the glass with crushed ice, tucking a fresh lemon wheel against the side of the glass.' },
      { step: 4, title: 'Top & garnish', text: 'Top off with chilled water or club soda. Crown with half a fresh strawberry and a fragrant sprig of mint.' }
    ],
    proTip: 'Lightly rub a lemon peel around the rim of your glass to release bright citrus aromatic oils with every sip.'
  },
  {
    id: 'iced-caramel-macchiato',
    name: 'Iced Caramel Macchiato',
    giantWord: 'Caramel',
    shortName: 'Macchiato',
    subtitle: 'Vanilla-scented milk marked by dark espresso & buttery caramel drizzle',
    category: 'Coffee',
    prepTime: '5 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#D4A373',           // Rich caramel golden amber
      bgLight: '#E6BC94',
      text: '#FFFFFF',
      accent: '#FAEDCD',
      canBody: '#A86C38',
      canSecondary: '#C6874E',
      badgeBg: '#FAF7F2',
      badgeText: '#422810',
    },
    accentColor: '#BF7E3E',
    cardSpan: 'col-span-12 md:col-span-7 lg:col-span-7',
    badge: 'Starbucks Dup',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1200&auto=format&fit=crop',
    description: 'The iconic café masterpiece made at home: silky vanilla milk chilled over ice, marked with bold espresso, and finished with a crosshatch of salted caramel drizzle.',
    tags: ['Caramel Drizzle', 'Vanilla Infused', 'Layered Aesthetic'],
    nutrition: '210 kcal • 5g Protein • 32g Carbs',
    ingredients: [
      { name: 'Vanilla syrup', amount: 2, unit: 'tbsp', originalAmount: 2 },
      { name: 'Cold milk of choice', amount: 180, unit: 'ml', originalAmount: 180 },
      { name: 'Espresso shots', amount: 2, unit: 'shots', originalAmount: 2 },
      { name: 'Salted caramel sauce drizzle', amount: 1.5, unit: 'tbsp', originalAmount: 1.5 },
      { name: 'Cubed ice', amount: 1, unit: 'cup', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'Base syrup', text: 'Drizzle 2 tablespoons of vanilla syrup directly into the bottom of a tall glass.' },
      { step: 2, title: 'Cold milk & ice', text: 'Pour 180ml milk into the glass and fill almost to the top with crisp ice cubes.' },
      { step: 3, title: 'Mark with espresso', text: 'Carefully pour freshly pulled double espresso over the ice; macchiato means "marked", so keep the espresso hovering on top.' },
      { step: 4, title: 'The iconic crosshatch', text: 'Generously drizzle golden salted caramel in a crosshatch pattern right over the surface foam and ice.' }
    ],
    proTip: 'Do not stir before serving! Part of the magic is sipping the warm espresso through the cold, vanilla-sweetened milk.'
  },
  {
    id: 'blueberry-mojito-mocktail',
    name: 'Blueberry Mojito Mocktail',
    giantWord: 'Mojito',
    shortName: 'Blueberry',
    subtitle: 'Crushed blueberries, slapped fresh garden mint & bubbly lime soda',
    category: 'Refreshing',
    prepTime: '6 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#6C757D',           // Cool slate indigo
      bgLight: '#8D99AE',
      text: '#FFFFFF',
      accent: '#EDF2F4',
      canBody: '#404E7C',
      canSecondary: '#5A6B9D',
      badgeBg: '#FAF7F2',
      badgeText: '#1A213B',
    },
    accentColor: '#4A6B82',
    cardSpan: 'col-span-12 md:col-span-6 lg:col-span-6',
    badge: 'Zero Proof',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop',
    description: 'An effervescent mocktail celebrating garden herbs and berry sweetness. Fresh mint leaves awakened by clapping, paired with bursting blueberries and sparkling citrus.',
    tags: ['Zero Alcohol', 'Fizzy & Crisp', 'Herbal Note'],
    nutrition: '95 kcal • 1g Protein • 22g Carbs',
    ingredients: [
      { name: 'Fresh blueberries', amount: 0.33, unit: 'cup', originalAmount: 0.33 },
      { name: 'Fresh mint leaves', amount: 8, unit: 'leaves', originalAmount: 8 },
      { name: 'Fresh lime juice', amount: 30, unit: 'ml', originalAmount: 30 },
      { name: 'Agave nectar or simple syrup', amount: 1.5, unit: 'tbsp', originalAmount: 1.5 },
      { name: 'Sparkling water or lemon-lime club soda', amount: 180, unit: 'ml', originalAmount: 180 },
      { name: 'Crushed ice', amount: 1, unit: 'cup', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'Awaken the mint', text: 'Slap the mint leaves between your palms to release the essential oils without crushing bitter veins, then drop them into the glass.' },
      { step: 2, title: 'Muddle berries & lime', text: 'Add blueberries, fresh lime juice, and agave nectar. Gently muddle until berries release their royal purple juices.' },
      { step: 3, title: 'Pack with crushed ice', text: 'Fill the glass with crushed ice, allowing the purple juices to weave through the crystal lattice.' },
      { step: 4, title: 'Fizzy finish', text: 'Top with chilled sparkling soda and garnish with a bouquet of fresh mint sprigs and floating blueberries.' }
    ],
    proTip: 'Gently slap mint leaves between your palms instead of grinding them to prevent releasing bitter chlorophyll.'
  },
  {
    id: 'vietnamese-iced-coffee',
    name: 'Vietnamese Iced Coffee',
    giantWord: 'Robusta',
    shortName: 'Vietnamese',
    subtitle: 'Slow-dripped robusta coffee cascading over sweet condensed nectar',
    category: 'Coffee',
    prepTime: '8 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#6F4E37',           // Deep dark espresso brown
      bgLight: '#8C674E',
      text: '#FFFFFF',
      accent: '#F4ECE4',
      canBody: '#432918',
      canSecondary: '#5E3A24',
      badgeBg: '#FAF7F2',
      badgeText: '#28170D',
    },
    accentColor: '#533422',
    cardSpan: 'col-span-12 md:col-span-6 lg:col-span-6',
    badge: 'High Caffeine',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop',
    description: 'Cà Phê Sữa Đá: Deep, chocolatey dark roast robusta coffee traditionally brewed via a Phin filter, melting down into a thick pillow of sweet condensed milk over crushed ice.',
    tags: ['Strong Kick', 'Chocolate Undertones', 'Traditional'],
    nutrition: '200 kcal • 4g Protein • 29g Carbs',
    ingredients: [
      { name: 'Dark roast Vietnamese ground coffee (e.g., Trung Nguyen)', amount: 3, unit: 'tbsp', originalAmount: 3 },
      { name: 'Sweetened condensed milk', amount: 2.5, unit: 'tbsp', originalAmount: 2.5 },
      { name: 'Boiling water (approx 95°C)', amount: 120, unit: 'ml', originalAmount: 120 },
      { name: 'Crushed ice', amount: 1.5, unit: 'cups', originalAmount: 1.5 }
    ],
    instructions: [
      { step: 1, title: 'Prepare the base', text: 'Spoon 2.5 tbsp of sweetened condensed milk into a heatproof glass.' },
      { step: 2, title: 'Setup the phin filter', text: 'Place the metal Phin filter atop the glass, add coarse ground coffee, and gently screw the damper down without packing too tight.' },
      { step: 3, title: 'Bloom & drip', text: 'Pour a splash of hot water to bloom the grounds for 30 seconds. Fill the chamber with the remaining hot water and watch the rich coffee drip drop by drop.' },
      { step: 4, title: 'Stir & ice', text: 'Once dripped, stir the dark coffee and condensed milk until silky caramel-hued, then pour over a tall glass brimming with crushed ice.' }
    ],
    proTip: 'If you don’t have a Phin filter, an extra-strong French Press or concentrated Moka Pot coffee works wonderfully.'
  },
  {
    id: 'mango-smoothie',
    name: 'Mango Smoothie',
    giantWord: 'Mango',
    shortName: 'Mango',
    subtitle: 'Velvety golden mango purée with Greek yogurt & wildflower honey',
    category: 'Fruity',
    prepTime: '5 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#F4A261',           // Sun-drenched golden mango orange
      bgLight: '#F7B886',
      text: '#FFFFFF',
      accent: '#FFF0D9',
      canBody: '#E76F51',
      canSecondary: '#EE886D',
      badgeBg: '#FAF7F2',
      badgeText: '#4A1D13',
    },
    accentColor: '#EAA22E',
    cardSpan: 'col-span-12 md:col-span-5 lg:col-span-5',
    badge: 'Tropical Glow',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1200&auto=format&fit=crop',
    description: 'Sunshine in a glass. Ultra-creamy frozen Alphonso mango chunks blended with thick vanilla Greek yogurt, a drizzle of floral honey, and a splash of creamy milk.',
    tags: ['Creamy', 'Naturally Sweet', 'Breakfast Favorite'],
    nutrition: '230 kcal • 9g Protein • 44g Carbs',
    ingredients: [
      { name: 'Ripe or frozen mango chunks', amount: 1.5, unit: 'cups', originalAmount: 1.5 },
      { name: 'Greek yogurt (plain or vanilla)', amount: 0.5, unit: 'cup', originalAmount: 0.5 },
      { name: 'Milk of choice (almond, oat, or dairy)', amount: 100, unit: 'ml', originalAmount: 100 },
      { name: 'Pure wildflower honey or agave', amount: 1, unit: 'tbsp', originalAmount: 1 },
      { name: 'A pinch of ground cardamom', amount: 1, unit: 'pinch', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'Add to blender', text: 'Place the ripe mango chunks, chilled Greek yogurt, and choice of milk into a high-speed blender.' },
      { step: 2, title: 'Touch of spice', text: 'Drizzle the honey and add a tiny pinch of cardamom for that authentic luxury lassi twist.' },
      { step: 3, title: 'Blend until velvet', text: 'Blend on high speed for 60 seconds until thick, glossy, and completely smooth without any ice crystals.' },
      { step: 4, title: 'Serve chilled', text: 'Pour into an aesthetic tumbler, topped with a few fresh mango dices and an edible flower or mint leaf.' }
    ],
    proTip: 'Using frozen mango eliminates the need for ice, resulting in an exceptionally thick, un-diluted smoothie.'
  },
  {
    id: 'dalgona-coffee',
    name: 'Dalgona Coffee',
    giantWord: 'Dalgona',
    shortName: 'Dalgona',
    subtitle: 'Whipping cloud-like caramel coffee mousse over chilled vanilla milk',
    category: 'Coffee',
    prepTime: '6 mins',
    difficulty: 'Medium',
    servings: 1,
    theme: {
      bg: '#B07D62',           // Whipped caramel foam color
      bgLight: '#C79A82',
      text: '#FFFFFF',
      accent: '#F3E5DC',
      canBody: '#8A5336',
      canSecondary: '#A36B4D',
      badgeBg: '#FAF7F2',
      badgeText: '#3B2113',
    },
    accentColor: '#9C6237',
    cardSpan: 'col-span-12 md:col-span-7 lg:col-span-7',
    badge: 'Viral Sensation',
    image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?q=80&w=1200&auto=format&fit=crop',
    description: 'The sensational whipped coffee foam that took the world by storm. Equal parts instant coffee, sugar, and boiling water whipped into thick, shiny golden peaks atop iced milk.',
    tags: ['Cloud Mousse', 'Photogenic', 'Satisfying'],
    nutrition: '160 kcal • 4g Protein • 24g Carbs',
    ingredients: [
      { name: 'Quality instant coffee granules', amount: 2, unit: 'tbsp', originalAmount: 2 },
      { name: 'Granulated sugar', amount: 2, unit: 'tbsp', originalAmount: 2 },
      { name: 'Boiling hot water', amount: 2, unit: 'tbsp', originalAmount: 2 },
      { name: 'Chilled milk of choice', amount: 200, unit: 'ml', originalAmount: 200 },
      { name: 'Ice cubes', amount: 1, unit: 'cup', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'The golden ratio', text: 'In a small mixing bowl, combine exactly 2 tbsp instant coffee, 2 tbsp sugar, and 2 tbsp boiling water (1:1:1 ratio).' },
      { step: 2, title: 'Whip to stiff peaks', text: 'Using a handheld milk frother or whisk, beat for 2 to 3 minutes until it transforms into a thick, glossy, light caramel-colored mousse.' },
      { step: 3, title: 'Prepare the chilled glass', text: 'Fill a rounded drinking glass with ice cubes and pour in 200ml of cold fresh milk.' },
      { step: 4, title: 'Dollop the cloud', text: 'Generously spoon the whipped coffee cloud on top. Dust with cocoa powder or cookie crumbs for extra flair.' }
    ],
    proTip: 'This only works with instant coffee or espresso powder! Freshly ground brewed coffee does not have the emulsifying surface tension.'
  },
  {
    id: 'watermelon-mint-cooler',
    name: 'Watermelon Mint Cooler',
    giantWord: 'Melon',
    shortName: 'Watermelon',
    subtitle: 'Sweet ruby watermelon juice, garden mint & tangy fresh lime splash',
    category: 'Refreshing',
    prepTime: '5 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#E76F51',           // Vibrant ruby melon red
      bgLight: '#ED8B72',
      text: '#FFFFFF',
      accent: '#FDECE8',
      canBody: '#CE4227',
      canSecondary: '#E3593F',
      badgeBg: '#FAF7F2',
      badgeText: '#4A140A',
    },
    accentColor: '#D85464',
    cardSpan: 'col-span-12 md:col-span-6 lg:col-span-6',
    badge: 'Hydration Hero',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=1200&auto=format&fit=crop',
    description: 'Pure hydration and summer bliss. Crisp seedless watermelon blended with cool garden mint, strained into a translucent ruby elixir with a squeeze of fresh tart lime.',
    tags: ['Low Calorie', 'Natural Hydration', 'Crisp'],
    nutrition: '85 kcal • 1g Protein • 19g Carbs',
    ingredients: [
      { name: 'Fresh chilled watermelon cubes', amount: 2, unit: 'cups', originalAmount: 2 },
      { name: 'Fresh mint leaves', amount: 6, unit: 'leaves', originalAmount: 6 },
      { name: 'Fresh lime juice', amount: 1, unit: 'tbsp', originalAmount: 1 },
      { name: 'Chilled sparkling water (optional)', amount: 60, unit: 'ml', originalAmount: 60 },
      { name: 'Ice cubes & watermelon wedge for garnish', amount: 1, unit: 'cup', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'Blend the fruit', text: 'Add chilled watermelon cubes, fresh mint leaves, and lime juice into a blender.' },
      { step: 2, title: 'Quick blitz', text: 'Pulse for 15-20 seconds until liquified. Strain through a fine sieve if you prefer a crystal-clear juice, or keep the silky pulp.' },
      { step: 3, title: 'Pour over ice', text: 'Fill an aesthetic glass with ice cubes and pour the ruby watermelon cooler over the top.' },
      { step: 4, title: 'Sparkle & garnish', text: 'Top with a splash of sparkling water for effervescence, garnishing with a mini watermelon slice on the rim.' }
    ],
    proTip: 'Chill your watermelon in the fridge for at least 3 hours prior for the crispiest, most refreshing sip.'
  },
  {
    id: 'chocolate-milkshake',
    name: 'Chocolate Milkshake',
    giantWord: 'Cocoa',
    shortName: 'Chocolate',
    subtitle: 'Decadent Dutch cocoa, rich chocolate ice cream & artisan fudge swirl',
    category: 'Sweet Treats',
    prepTime: '5 mins',
    difficulty: 'Easy',
    servings: 1,
    theme: {
      bg: '#543D37',           // Rich dark chocolate brown
      bgLight: '#73574F',
      text: '#FFFFFF',
      accent: '#EAE1DF',
      canBody: '#382621',
      canSecondary: '#4B352E',
      badgeBg: '#FAF7F2',
      badgeText: '#221512',
    },
    accentColor: '#4A342B',
    cardSpan: 'col-span-12 md:col-span-6 lg:col-span-6',
    badge: 'Cozy Indulgence',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1200&auto=format&fit=crop',
    description: 'The ultimate diner classic elevated: rich dark chocolate gelato blended with whole milk, Dutch-processed cocoa powder, and swirled with warm chocolate fudge syrup.',
    tags: ['Decadent', 'Comfort Food', 'Rich Chocolate'],
    nutrition: '340 kcal • 8g Protein • 48g Carbs',
    ingredients: [
      { name: 'Rich chocolate ice cream or gelato', amount: 3, unit: 'scoops', originalAmount: 3 },
      { name: 'Whole cold milk', amount: 120, unit: 'ml', originalAmount: 120 },
      { name: 'Dutch cocoa powder', amount: 1, unit: 'tbsp', originalAmount: 1 },
      { name: 'Dark chocolate syrup for glass swirl', amount: 2, unit: 'tbsp', originalAmount: 2 },
      { name: 'Whipped cream & chocolate shavings', amount: 1, unit: 'serving', originalAmount: 1 }
    ],
    instructions: [
      { step: 1, title: 'Swirl the glass', text: 'Before blending, swirl chocolate syrup lavishly along the inside walls of your chilled serving glass and pop it in the freezer.' },
      { step: 2, title: 'Blend the shake', text: 'In your blender, combine the scoops of chocolate ice cream, cold milk, and Dutch cocoa powder.' },
      { step: 3, title: 'Pulse to perfection', text: 'Blend on medium speed until thick, creamy, and pourable, keeping it dense and frosty.' },
      { step: 4, title: 'Crown the creation', text: 'Pour into the frosted chocolate-swirled glass. Top with a cloud of whipped cream and dark chocolate curls.' }
    ],
    proTip: 'Let the ice cream soften on the counter for 4 minutes before blending; this ensures a smooth texture without needing extra milk.'
  }
];

export const categoriesList = [
  { id: 'all', label: 'All Drinks', icon: 'Sparkles' },
  { id: 'Coffee', label: 'Coffee', icon: 'Coffee' },
  { id: 'Fruity', label: 'Fruity', icon: 'Apple' },
  { id: 'Refreshing', label: 'Refreshing', icon: 'Droplets' },
  { id: 'Sweet Treats', label: 'Sweet Treats', icon: 'IceCream' },
  { id: 'Tea & Matcha', label: 'Tea & Matcha', icon: 'Leaf' }
];
