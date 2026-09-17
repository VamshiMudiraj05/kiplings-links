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
    // Table Reservation Link
    reserveTableUrl: "https://www.district.in/dining/hyderabad/kiplings-d%C3%A9li-bistro-hitech-city/book",
    // Online Ordering URLs
    orderOnline: {
      zomato: "https://www.swiggy.com/menu/1431945?source=sharing",
      swiggy: "https://www.swiggy.com/menu/1431945?source=sharing"
    },
    // Google Maps & Reviews
    googleMaps: "https://maps.google.com/?q=Inorbit+Mall+Hyderabad+Level+4+Kiplings",
    googleReviews: "https://www.google.com/search?sca_esv=8f55d1c39308862b&rlz=1C5CHFA_enIN1027IN1027&sxsrf=APpeQnsdCfyEP3hbCpcswt_nh3EYPX1fMg:1789663569407&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_wrgP6B8xj7kHM91oMWHMSFPc5ZATsgFDdYEPuzTjOMlBB5Bp1lhWEhiQyiGxFC3av1UN15FpDcDtO-726ZIVmvdANa8KvLveow8IOTWA1-2lExSKg%3D%3D&q=Kiplings+D%C3%A9li+%26+Bistro+Reviews&sa=X&ved=2ahUKEwizl8mqiPaWAxXqleEIHZu5AyIQ0bkNegQIORAH&biw=1440&bih=812&dpr=1",
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
      image: "/hyderabad.jpg",
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
        title: "A Place for Stories"
      },
      {
        url: "/gallery/2.jpg",
        title: "The Art of Staying Longer"
      },
      {
        url: "/gallery/3.jpg",
        title: "Signature Interiors"
      },
      {
        url: "/gallery/4.jpg",
        title: "All-Day Comfort"
      },
      {
        url: "/gallery/5.jpg",
        title: "House Desserts"
      },
      {
        url: "/gallery/6.jpg",
        title: "Comfort Plates"
      },
      {
        url: "/gallery/7.jpg",
        title: "Pastry Kitchen"
      },
      {
        url: "/gallery/8.jpg",
        title: "Bistro Table"
      },
      {
        url: "/gallery/9.jpg",
        title: "Kiplings Marketplace"
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
