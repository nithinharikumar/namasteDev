const makeRestaurant = (info) => ({
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info,
    },
  },
});

const makeCategory = (title, items) => ({
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      title,
      itemCards: items.map((i) => ({ card: { info: i } })),
    },
  },
});

const makeMenu = (restaurantInfo, categories) => ({
  cards: [
    makeRestaurant(restaurantInfo),
    {
      groupedCard: {
        cardGroupMap: {
          REGULAR: { cards: categories.map(([t, items]) => makeCategory(t, items)) },
        },
      },
    },
  ],
});

// ─── Ariya Jyoti (77110) ─────────────────────────────────────────────────────
const ariyaJyoti = makeMenu(
  {
    id: "77110",
    name: "Ariya Jyoti",
    city: "Thiruvananthapuram",
    cloudinaryImageId: "9dda54b8ef4f8815e7a74751947b6564",
    cuisines: ["South Indian", "Chinese"],
    costForTwoMessage: "₹150 for two",
    avgRating: 4.6,
    avgRatingString: "4.6",
    totalRatingsString: "7.4K+ ratings",
  },
  [
    [
      "Recommended",
      [
        { id: "aj-1", name: "Masala Dosa", price: 11700, isVeg: 1, isBestseller: true, imageId: "qdocaemhgec7p5vxbw4y", description: "Crispy rice crepe stuffed with spiced potato mash, served with chutney & sambar.", ratings: { aggregatedRating: { rating: "4.6", ratingCount: "2726 ratings" } } },
        { id: "aj-2", name: "Ghee Roast Dosa", price: 11700, isVeg: 1, isBestseller: true, imageId: "czpr7nky9xziouucjwsz", description: "Crispy dosa roasted in pure ghee, served with coconut chutney.", ratings: { aggregatedRating: { rating: "4.7", ratingCount: "1965 ratings" } } },
        { id: "aj-3", name: "Ghee Masala Dosa", price: 12100, isVeg: 1, isBestseller: true, imageId: "bwv6o3g8qyt3u6f9qukx", description: "Golden crispy dosa with a fragrant ghee masala filling.", ratings: { aggregatedRating: { rating: "4.7", ratingCount: "589 ratings" } } },
        { id: "aj-4", name: "Podi Dosa", price: 9000, isVeg: 1, isBestseller: true, imageId: "c50839a10375a03d1637e0afd44d216d", description: "Thin dosa dusted with spicy podi powder and ghee.", ratings: { aggregatedRating: { rating: "4.5", ratingCount: "203 ratings" } } },
        { id: "aj-5", name: "Rava Dosa", price: 11000, isVeg: 1, isBestseller: true, imageId: "ldmcaoscokts9vtsdcqg", description: "Lacy, crispy semolina dosa served with chutney and sambar.", ratings: { aggregatedRating: { rating: "4.5", ratingCount: "216 ratings" } } },
        { id: "aj-6", name: "Onion Rava Dosa", price: 13200, isVeg: 1, isBestseller: true, imageId: "d370uvncelnzblhtntce", description: "Crispy rava dosa loaded with caramelised onions.", ratings: { aggregatedRating: { rating: "4.3", ratingCount: "149 ratings" } } },
        { id: "aj-7", name: "Plain Uttapam", price: 6800, isVeg: 1, isBestseller: true, imageId: "gck4namvi6fgdrxy8emt", description: "Soft thick rice pancake, served with chutney and sambar.", ratings: { aggregatedRating: { rating: "4.1", ratingCount: "142 ratings" } } },
        { id: "aj-8", name: "Veg Uttapam", price: 12100, isVeg: 1, imageId: "pw3hujdm981sxyegwsrp", description: "Fluffy uttapam topped with fresh diced vegetables.", ratings: { aggregatedRating: { rating: "4.6", ratingCount: "211 ratings" } } },
        { id: "aj-9", name: "Chapati", price: 9000, isVeg: 1, isBestseller: true, imageId: "FOOD_CATALOG/IMAGES/CMS/2026/1/23/fb11bd90-1743-4882-87d4-285539b32d0d_3e03a578-aed4-4c3e-8c9f-2515f0a3f678.JPG", description: "Soft whole wheat flatbread, great with curry.", ratings: { aggregatedRating: { rating: "4.6", ratingCount: "449 ratings" } } },
        { id: "aj-10", name: "Ghee Rava Masala Dosa", price: 14300, isVeg: 1, imageId: "61423850ae8135961320ffd943aed9c6", description: "Aromatic semolina dosa with a spiced masala filling and ghee.", ratings: { aggregatedRating: { rating: "4.9", ratingCount: "49 ratings" } } },
      ],
    ],
  ]
);

// ─── Baskin Robbins (4709823) ─────────────────────────────────────────────────
const baskinRobbins1 = makeMenu(
  {
    id: "4709823",
    name: "Baskin Robbins - Ice Cream Desserts",
    city: "Kottayam",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/bbc4fee6-b3d6-4d01-98c9-680f8f7779ac_470982.JPG",
    cuisines: ["Desserts", "Ice Cream"],
    costForTwoMessage: "₹250 for two",
    avgRating: 2.6,
    avgRatingString: "2.6",
    totalRatingsString: "775 ratings",
  },
  [
    [
      "Classic Scoops",
      [
        { id: "br1-1", name: "Chocolate Fudge Scoop", price: 18000, isVeg: 1, description: "Rich, creamy chocolate fudge ice cream topped with chocolate chips.", ratings: { aggregatedRating: { rating: "4.1", ratingCount: "310 ratings" } } },
        { id: "br1-2", name: "Strawberry Dream Scoop", price: 17000, isVeg: 1, description: "Fresh strawberry ice cream swirled with a real fruit ribbon.", ratings: { aggregatedRating: { rating: "4.0", ratingCount: "250 ratings" } } },
        { id: "br1-3", name: "Vanilla Classic Scoop", price: 16000, isVeg: 1, description: "Timeless creamy vanilla — smooth, simple, and delightful.", ratings: { aggregatedRating: { rating: "3.9", ratingCount: "190 ratings" } } },
        { id: "br1-4", name: "Pralines N' Cream Scoop", price: 20000, isVeg: 1, description: "Creamy vanilla ice cream with praline-coated pecans.", ratings: { aggregatedRating: { rating: "4.3", ratingCount: "142 ratings" } } },
      ],
    ],
    [
      "Sundaes",
      [
        { id: "br1-5", name: "Hot Fudge Sundae", price: 28000, isVeg: 1, description: "Two scoops of vanilla topped with warm fudge sauce, whipped cream and a cherry.", ratings: { aggregatedRating: { rating: "4.2", ratingCount: "200 ratings" } } },
        { id: "br1-6", name: "Brownie Fantasy Sundae", price: 35000, isVeg: 1, description: "Warm chocolate brownie topped with vanilla ice cream and hot fudge.", ratings: { aggregatedRating: { rating: "4.5", ratingCount: "88 ratings" } } },
      ],
    ],
  ]
);

// ─── Ibaco (378010) ───────────────────────────────────────────────────────────
const ibaco = makeMenu(
  {
    id: "378010",
    name: "Ibaco",
    city: "Kottayam",
    cloudinaryImageId: "kawgjvja4kmlhqsfti4o",
    cuisines: ["Ice Cream", "Cakes"],
    costForTwoMessage: "₹300 for two",
    avgRating: 4.8,
    avgRatingString: "4.8",
    totalRatingsString: "772 ratings",
  },
  [
    [
      "Signature Ice Cream Cakes",
      [
        { id: "ib-1", name: "Black Forest Ice Cream Cake (500g)", price: 75000, isVeg: 1, isBestseller: true, description: "Classic black forest reimagined as an ice cream cake — cherry vanilla ice cream on chocolate sponge.", ratings: { aggregatedRating: { rating: "4.8", ratingCount: "410 ratings" } } },
        { id: "ib-2", name: "Mango Chilli Ice Cream Cake (500g)", price: 79000, isVeg: 1, description: "An adventurous mango ice cream cake with a surprising chilli kick.", ratings: { aggregatedRating: { rating: "4.7", ratingCount: "155 ratings" } } },
        { id: "ib-3", name: "Tiramisu Ice Cream Cake (500g)", price: 85000, isVeg: 1, isBestseller: true, description: "Italian tiramisu transformed into a creamy, coffee-flavoured ice cream cake.", ratings: { aggregatedRating: { rating: "4.9", ratingCount: "98 ratings" } } },
      ],
    ],
    [
      "Premium Scoops",
      [
        { id: "ib-4", name: "Belgian Chocolate Scoop", price: 22000, isVeg: 1, isBestseller: true, description: "Indulgent dark Belgian chocolate ice cream — rich and velvety.", ratings: { aggregatedRating: { rating: "4.9", ratingCount: "321 ratings" } } },
        { id: "ib-5", name: "Salted Caramel Scoop", price: 22000, isVeg: 1, description: "Buttery caramel ice cream with a perfect hint of sea salt.", ratings: { aggregatedRating: { rating: "4.7", ratingCount: "200 ratings" } } },
        { id: "ib-6", name: "Pistachio Royale Scoop", price: 25000, isVeg: 1, description: "Premium pistachio ice cream with real nut chunks.", ratings: { aggregatedRating: { rating: "4.8", ratingCount: "145 ratings" } } },
      ],
    ],
  ]
);

// ─── Baskin Robbins variant (470982) ─────────────────────────────────────────
const baskinRobbins2 = makeMenu(
  {
    id: "470982",
    name: "Baskin Robbins - Ice Cream Desserts",
    city: "Kottayam",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/bbc4fee6-b3d6-4d01-98c9-680f8f7779ac_470982.JPG",
    cuisines: ["Desserts", "Ice Cream"],
    costForTwoMessage: "₹250 for two",
    avgRating: 2.6,
    avgRatingString: "2.6",
    totalRatingsString: "775 ratings",
  },
  [
    [
      "Classic Scoops",
      [
        { id: "br2-1", name: "Almond Fudge Scoop", price: 18000, isVeg: 1, description: "Creamy vanilla ice cream with toasted almonds and a fudge ribbon.", ratings: { aggregatedRating: { rating: "4.0", ratingCount: "180 ratings" } } },
        { id: "br2-2", name: "Cotton Candy Scoop", price: 16000, isVeg: 1, description: "Fun pink and purple cotton-candy flavoured ice cream.", ratings: { aggregatedRating: { rating: "3.8", ratingCount: "140 ratings" } } },
        { id: "br2-3", name: "Gold Medal Ribbon Scoop", price: 18000, isVeg: 1, description: "Vanilla and chocolate ice creams swirled with a caramel ribbon.", ratings: { aggregatedRating: { rating: "4.2", ratingCount: "210 ratings" } } },
      ],
    ],
    [
      "Shakes & Floats",
      [
        { id: "br2-4", name: "Chocolate Milkshake", price: 25000, isVeg: 1, description: "Thick, cold chocolate milkshake made with premium ice cream.", ratings: { aggregatedRating: { rating: "4.3", ratingCount: "95 ratings" } } },
        { id: "br2-5", name: "Mango Float", price: 22000, isVeg: 1, description: "Fresh mango soda float topped with a scoop of mango ice cream.", ratings: { aggregatedRating: { rating: "4.1", ratingCount: "75 ratings" } } },
      ],
    ],
  ]
);

// ─── Full On Cafe (678659) ────────────────────────────────────────────────────
const fullOnCafe = makeMenu(
  {
    id: "678659",
    name: "Full On Cafe",
    city: "Kochi",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/6/4/cafe_banner.jpg",
    cuisines: ["South Indian", "North Indian", "Chinese", "Fast Food"],
    costForTwoMessage: "₹350 for two",
    avgRating: 4.4,
    avgRatingString: "4.4",
    totalRatingsString: "1.2K+ ratings",
  },
  [
    [
      "Burgers & Sandwiches",
      [
        { id: "foc-1", name: "Crunchy Veg Supreme Burger", price: 14900, isVeg: 1, isBestseller: true, description: "Golden-crispy veg patty with creamy mayo, lettuce & tomatoes in a toasted sesame bun.", ratings: { aggregatedRating: { rating: "4.4", ratingCount: "320 ratings" } } },
        { id: "foc-2", name: "BBQ Chicken Club Sandwich", price: 18900, isVeg: 0, isBestseller: true, description: "Double-decker sandwich with BBQ chicken, cheese, fried egg and fresh veggies.", ratings: { aggregatedRating: { rating: "4.5", ratingCount: "415 ratings" } } },
        { id: "foc-3", name: "Paneer Tikka Burger", price: 15900, isVeg: 1, description: "Smoky grilled paneer tikka patty with mint chutney and pickled onions.", ratings: { aggregatedRating: { rating: "4.3", ratingCount: "210 ratings" } } },
      ],
    ],
    [
      "Cafe Drinks",
      [
        { id: "foc-4", name: "Cold Coffee Frappe", price: 12000, isVeg: 1, isBestseller: true, description: "Rich espresso blended with milk and ice cream, topped with cocoa powder.", ratings: { aggregatedRating: { rating: "4.6", ratingCount: "500 ratings" } } },
        { id: "foc-5", name: "Mango Smoothie", price: 11000, isVeg: 1, description: "Thick and refreshing Alphonso mango smoothie.", ratings: { aggregatedRating: { rating: "4.4", ratingCount: "220 ratings" } } },
        { id: "foc-6", name: "Masala Chai", price: 6000, isVeg: 1, description: "Classic spiced Indian tea brewed with ginger, cardamom and cinnamon.", ratings: { aggregatedRating: { rating: "4.2", ratingCount: "390 ratings" } } },
      ],
    ],
    [
      "South Indian",
      [
        { id: "foc-7", name: "Kerala Chicken Biryani", price: 24900, isVeg: 0, isBestseller: true, description: "Fragrant Malabar-style chicken biryani cooked with whole spices and crispy onions.", ratings: { aggregatedRating: { rating: "4.7", ratingCount: "680 ratings" } } },
        { id: "foc-8", name: "Prawn Moilee", price: 28900, isVeg: 0, description: "Delicate coconut milk prawn curry with turmeric and green chillies.", ratings: { aggregatedRating: { rating: "4.5", ratingCount: "310 ratings" } } },
        { id: "foc-9", name: "Veg Noodles", price: 13500, isVeg: 1, description: "Stir-fried egg noodles tossed with fresh vegetables and soy sauce.", ratings: { aggregatedRating: { rating: "4.1", ratingCount: "175 ratings" } } },
      ],
    ],
  ]
);

// ─── Exports ──────────────────────────────────────────────────────────────────
export const MENU_MOCKS = {
  "77110": ariyaJyoti,
  "4709823": baskinRobbins1,
  "378010": ibaco,
  "470982": baskinRobbins2,
  "678659": fullOnCafe,
};
