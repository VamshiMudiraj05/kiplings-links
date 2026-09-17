/**
 * KIPLINGS DELI & BISTRO - Configuration & Content
 * 
 * Edit this file to update links, phone numbers, addresses,
 * reviews, gallery images, and locations without touching UI code.
 */

export const KIPLINGS_CONFIG = {
  // Brand Basics
  brand: {
    name: "KIPLING'S",
    descriptor: "DÉLI & BISTRO",
    subDescriptor: "DELI · BISTRO · BAKERY · COFFEE",
    tagline: "Not your usual café.",
    heroDescription: "Kiplings is a deli and bistro experience crafted around slow mornings, fresh bakes, honest food, and the art of staying a little longer.",
    hours: "Open Daily · 11:00 AM – 11:00 PM",
    diningStyle: "Dine-In · Takeaway · Online Order",
    email: "hi@kiplingsdeli.com",
    website: "https://www.kiplingsdeli.com/"
  },

  // Primary Action Links
  links: {
    // Menu PDF Link (points to the menu PDF in public/menu.pdf)
    menuPdfUrl: "/menu.pdf", 
    // Table Reservation Link (WhatsApp or direct booking)
    reserveTableUrl: "https://wa.me/917075179853?text=Hi%20Kiplings!%20I%20would%20like%20to%20reserve%20a%20table.",
    // Online Ordering URLs
    orderOnline: {
      zomato: "https://www.zomato.com/hyderabad/kiplings-deli-bistro-madhapur",
      swiggy: "https://www.swiggy.com/restaurants/kiplings-deli-bistro-inorbit-mall-hyderabad",
      directOrder: "https://wa.me/917075179853?text=Hi%20Kiplings%2C%20I%20would%20like%20to%20place%20an%20order"
    },
    // Google Maps & Reviews
    googleMaps: "https://maps.google.com/?q=Inorbit+Mall+Hyderabad+Level+4+Kiplings",
    googleReviews: "https://maps.google.com/?q=Inorbit+Mall+Hyderabad+Level+4+Kiplings",
    // WhatsApp Contact
    whatsappNumber: "917075179853",
    whatsappDisplay: "+91 70751 79853",
    whatsappDefaultMessage: "Hi Kiplings! I'd like to reserve a table / ask a question.",
    // Direct Phone Call
    phoneNumber: "+917075179853",
    phoneDisplay: "+91 70751 79853",
    // Email
    email: "hi@kiplingsdeli.com",
    // Official Website
    website: "https://www.kiplingsdeli.com/",
    // Social Links
    instagram: "https://www.instagram.com/kiplingsofficial/",
    instagramHandle: "@kiplingsofficial",
    facebook: "https://www.facebook.com/p/Kiplings-D%C3%A9li-Bistro-61569217785741/",
  },

  // Locations Structure (Matching "FIND US" section)
  locationsSection: {
    eyebrow: "OUR LOCATIONS",
    headline: "FIND US",
    subtitle: "Visit Kiplings for a European bistro experience in the heart of the city.",
    activeLocation: {
      name: "INORBIT MALL, HYDERABAD",
      badge: "NOW OPEN",
      address: "4th Floor, Inorbit Mall, Hyderabad, Telangana",
      hours: "Mon - Sun · 11:00 AM – 11:00 PM",
      phone: "+91 70751 79853",
      email: "hi@kiplingsdeli.com",
      image: "/inorbit-croissant.jpg",
      mapsUrl: "https://maps.google.com/?q=Inorbit+Mall+Hyderabad+Level+4+Kiplings"
    },
    upcomingLocations: [
      {
        city: "DELHI",
        status: "Coming soon"
      },
      {
        city: "CHENNAI",
        status: "Coming soon"
      }
    ]
  },

  // Food & Ambience Photo Gallery (Displaying Images 1-9)
  gallery: {
    eyebrow: "THE EXPERIENCE",
    headline: "Food & Ambience",
    subtitle: "Slow mornings, live baking, artisan brews, and bistro comfort plates.",
    images: [
      {
        url: "/gallery/1.jpg",
        title: "Artisan Bakes & Pastries",
        caption: "Freshly laminated daily viennoiserie"
      },
      {
        url: "/gallery/2.jpg",
        title: "Bistro Delights",
        caption: "Crafted fresh with everyday indulgence"
      },
      {
        url: "/gallery/3.jpg",
        title: "Signature Coffee",
        caption: "Specialty brews & slow mornings"
      },
      {
        url: "/gallery/4.jpg",
        title: "Warm Ambience",
        caption: "European deli bistro setting"
      },
      {
        url: "/gallery/5.jpg",
        title: "House Desserts",
        caption: "Decadent in-house bakes"
      },
      {
        url: "/gallery/6.jpg",
        title: "Comfort Plates",
        caption: "Sandwiches, pastas & savory bowls"
      },
      {
        url: "/gallery/7.jpg",
        title: "Pastry Kitchen",
        caption: "Live oven aroma & golden layers"
      },
      {
        url: "/gallery/8.jpg",
        title: "Bistro Table",
        caption: "The art of staying a little longer"
      },
      {
        url: "/gallery/9.jpg",
        title: "Kiplings Marketplace",
        caption: "Everyday luxury served fresh"
      }
    ]
  },

  // Guest Reviews & Testimonials
  reviews: {
    eyebrow: "GUEST EXPERIENCES",
    headline: "Love for Kiplings",
    overallRating: "4.9",
    totalReviewsText: "500+ Google Reviews",
    items: [
      {
        name: "Ananya R.",
        rating: 5,
        review: "Finally, a real European-style deli bistro! The almond croissant is super flaky and the Orange Americano is hands down the best in the city.",
        source: "Google Review"
      },
      {
        name: "Rohit Verma",
        rating: 5,
        review: "Such a warm, unhurried vibe. The Truffle Mushroom Bombs and live bakes make it the perfect place to linger over coffee.",
        source: "Google Review"
      },
      {
        name: "Pooja Mehta",
        rating: 5,
        review: "The aesthetic, the sourdough sandwiches, and the hospitality are top tier. Feels like stepping into a Paris bistro.",
        source: "Google Review"
      }
    ]
  }
};
