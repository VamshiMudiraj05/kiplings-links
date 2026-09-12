/**
 * KIPLINGS DELI & BISTRO - Configuration & Content
 * 
 * Edit this file to update links, phone numbers, addresses,
 * monthly specials, and brand copy without touching any UI code.
 */

export const KIPLINGS_CONFIG = {
  // Brand Basics
  brand: {
    name: "KIPLING'S",
    descriptor: "DÉLI & BISTRO",
    subDescriptor: "DELI · BISTRO · BAKERY · COFFEE",
    locationShort: "Inorbit Mall, Level 4, Hyderabad",
    locationFull: "Level 4, Inorbit Mall, Mindspace, Madhapur, Hyderabad, Telangana 500081",
    tagline: "Not your usual café.",
    heroDescription: "Kiplings is a deli and bistro experience crafted around slow mornings, fresh bakes, honest food, and the art of staying a little longer.",
    hours: "Open Daily · 11:00 AM – 11:00 PM",
    diningStyle: "Dine-In · Takeaway · Online Order",
  },

  // Primary Action Links
  links: {
    // Menu Link (can be PDF or digital menu URL)
    menuUrl: "#menu-modal", 
    // Online Ordering URLs
    orderOnline: {
      zomato: "https://www.zomato.com/hyderabad/kiplings-deli-bistro-madhapur",
      swiggy: "https://www.swiggy.com/restaurants/kiplings-deli-bistro-inorbit-mall-hyderabad",
      directOrder: "https://wa.me/919876543210?text=Hi%20Kiplings%2C%20I%20would%20like%20to%20place%20an%20order"
    },
    // Google Maps Link
    googleMaps: "https://maps.google.com/?q=Inorbit+Mall+Hyderabad+Level+4+Kiplings",
    // WhatsApp Contact (format: international number with country code, no + or spaces for api link)
    whatsappNumber: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsappDefaultMessage: "Hi Kiplings! I'd like to reserve a table / ask a question.",
    // Direct Phone Call
    phoneNumber: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    // Social Links
    instagram: "https://instagram.com/kiplingsbistro",
    instagramHandle: "@kiplingsbistro",
    facebook: "https://facebook.com/kiplingsbistro",
  },

  // Editorial Story ("About Kiplings")
  about: {
    eyebrow: "ABOUT KIPLINGS",
    headline: "A deli. A bistro. A place to linger.",
    storyCards: [
      {
        number: "01",
        title: "The Delicatessen Philosophy",
        quote: "A deli as in delicatessen is where freshness comes first. At Kiplings, it’s our way of bringing everyday indulgence to the table."
      },
      {
        number: "02",
        title: "Everything Begins In-House",
        quote: "From our sauces and spreads to our desserts, doughs, and bakes, everything at Kiplings is made in-house with intention and care."
      },
      {
        number: "03",
        title: "The Ovens Are Always Busy",
        quote: "Live baking is at the heart of the Kiplings experience. The smell of fresh bread, buttery layers, and warm desserts is part of what makes every visit memorable."
      },
      {
        number: "04",
        title: "Fresh Food, Always",
        quote: "Thoughtfully prepared sandwiches, pizzas, coffees, desserts, and comfort plates designed to feel indulgent without trying too hard."
      }
    ]
  },

  // Viennoiserie & Fresh Bakes Showcase
  viennoiserie: {
    eyebrow: "BAKERY & LIVE KITCHEN",
    headline: "Meet our viennoiserie.",
    description: "Croissants, pain au chocolat, danishes, and delicate laminated pastries baked fresh through the day. Light, flaky, buttery perfection.",
    badges: [
      "FRESHLY BAKED",
      "LIVE KITCHEN",
      "MADE IN-HOUSE"
    ],
    items: [
      { name: "Classic Butter Croissant", note: "Multi-layered flaky French butter" },
      { name: "Pain au Chocolat", note: "Dark chocolate batons & laminated pastry" },
      { name: "Almond Frangipane Croissant", note: "Toasted sliced almonds & velvety cream" },
      { name: "Chocolate Crème Roll", note: "Rich cocoa ganache filling" },
      { name: "Brûlée Croissant", note: "Caramelized crisp sugar crust & custard" },
      { name: "Savoury Viennoiserie", note: "Herb-infused and cheese burst selections" }
    ],
    pastryChefNote: "Our pastry chef creates limited-batch desserts, cookies, and viennoiserie daily.",
    dessertOfTheDayPrompt: "Visit the marketplace in-store to explore today's Dessert of the Day."
  },

  // Current Monthly Specials (Easily updateable CMS-like structure)
  specials: {
    active: true,
    monthTitle: "WHAT'S FRESH",
    edition: "AUGUST SPECIALS",
    tagline: "Here for a good time, not a long time. Crafted exclusively for August.",
    categories: [
      {
        name: "PLATES OF AUGUST",
        badge: "KITCHEN SPECIALS",
        items: [
          {
            name: "Jerk-Style Paneer",
            description: "With curried coconut sauce and fragrant herb garnish",
            diet: "veg"
          },
          {
            name: "Pan-Seared Fish with Flat Noodles",
            description: "Delicate fish fillet, citrus butter glaze & wok noodles",
            diet: "non-veg"
          },
          {
            name: "Chicken Mosaic with Cream Jus",
            description: "Tender chicken roulade with slow-simmered velouté",
            diet: "non-veg"
          }
        ]
      },
      {
        name: "BAKES OF AUGUST",
        badge: "FRESH FROM OVEN",
        items: [
          {
            name: "Savoury Chicken & Cheese Burst Croissant",
            description: "Golden flaky pastry with molten spiced cheese",
            diet: "non-veg"
          }
        ]
      },
      {
        name: "SIPS OF AUGUST",
        badge: "SIGNATURE BAR",
        items: [
          {
            name: "Crème Brûlée Filter Coffee",
            description: "South Indian filter roast with crisp caramelized sugar top",
            diet: "veg"
          },
          {
            name: "Blueberry Granola Shake",
            description: "Hand-blended wild blueberries, toasted oats, and cream",
            diet: "veg"
          }
        ]
      }
    ]
  },

  // Curated Menu Categories for Quick Overview & Modal
  menuCategories: [
    { name: "Beverages & Coffee", items: "Espresso, Orange Americano, Pistachio Latte, Shakes" },
    { name: "All Day Breakfast", items: "Artisan toasts, eggs benedict, fluffy pancakes" },
    { name: "Appetizers & Fries", items: "Truffle Mushroom Bombs, Kiplings Chicken Tenders, Truffle Fries" },
    { name: "Viennoiserie & Bakes", items: "Croissants, Pain au Chocolat, Crème Rolls, Buns" },
    { name: "Sandwiches & Burgers", items: "House sourdoughs, brioche buns, pressed melts" },
    { name: "Pasta & Pizza", items: "Hand-rolled pasta, slow-fermented crust pizzas" },
    { name: "Mains & Rice Bowls", items: "Comfort bowls, grilled specialties, savory platters" },
    { name: "Casa Loco", items: "Mexican-inspired deli tacos, quesadillas & bowls" },
    { name: "Desserts & Pastries", items: "Daily marketplace specials, cheesecakes, brownies" }
  ]
};
