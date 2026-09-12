/**
 * KIPLINGS DELI & BISTRO - Configuration & Content
 * 
 * Edit this file to update links, phone numbers, addresses,
 * and brand copy without touching any UI code.
 */

export const KIPLINGS_CONFIG = {
  // Brand Basics
  brand: {
    name: "KIPLING'S",
    descriptor: "DÉLI & BISTRO",
    subDescriptor: "DELI · BISTRO · BAKERY · COFFEE",
    locationShort: "4th Floor, Inorbit Mall, Hyderabad",
    locationFull: "4th Floor, Inorbit Mall, Mindspace, Madhapur, Hyderabad, Telangana 500081",
    tagline: "Not your usual café.",
    heroDescription: "Kiplings is a deli and bistro experience crafted around slow mornings, fresh bakes, honest food, and the art of staying a little longer.",
    hours: "Open Daily · 11:00 AM – 11:00 PM",
    diningStyle: "Dine-In · Takeaway · Online Order",
    email: "hi@kiplingsdeli.com",
    website: "https://www.kiplingsdeli.com/"
  },

  // Primary Action Links
  links: {
    // Menu PDF Link (can be local public file like /menu.pdf or any hosted URL)
    menuPdfUrl: "/menu.pdf", 
    // Table Reservation Link (WhatsApp or direct booking link)
    reserveTableUrl: "https://wa.me/917075179853?text=Hi%20Kiplings!%20I%20would%20like%20to%20reserve%20a%20table.",
    // Online Ordering URLs
    orderOnline: {
      zomato: "https://www.zomato.com/hyderabad/kiplings-deli-bistro-madhapur",
      swiggy: "https://www.swiggy.com/restaurants/kiplings-deli-bistro-inorbit-mall-hyderabad",
      directOrder: "https://wa.me/917075179853?text=Hi%20Kiplings%2C%20I%20would%20like%20to%20place%20an%20order"
    },
    // Google Maps Link
    googleMaps: "https://maps.google.com/?q=Inorbit+Mall+Hyderabad+Level+4+Kiplings",
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
  }
};
