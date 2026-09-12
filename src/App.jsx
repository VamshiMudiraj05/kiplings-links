import { useState, useEffect } from 'react'
import { KIPLINGS_CONFIG } from './config/kiplingsConfig'

function App() {
  const { brand, links, locationsSection, gallery, reviews } = KIPLINGS_CONFIG

  // Interactive Modals State
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null)

  // Keyboard accessibility: Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOrderModalOpen(false)
        setSelectedGalleryImg(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isOrderModalOpen || selectedGalleryImg) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOrderModalOpen, selectedGalleryImg])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full max-w-[480px] min-h-screen mx-auto bg-cream relative flex flex-col sm:my-6 sm:rounded-md sm:border sm:border-gold-border sm:min-h-[calc(100vh-48px)] shadow-[0_0_40px_rgba(19,21,44,0.08)]">
      
      {/* =========================================================================
          SECTION 1: BRAND HERO & STATEMENT
          ========================================================================= */}
      <header className="bg-navy-deep text-cream px-6 pt-9 pb-8 text-center relative border-b-2 border-gold-primary overflow-hidden">
        {/* Subtle Antique Gold Corner Accents (Matching Kiplings Menu) */}
        <div className="absolute top-3.5 left-3.5 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-gold-primary pointer-events-none" aria-hidden="true" />
        <div className="absolute top-3.5 right-3.5 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-gold-primary pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-gold-primary pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-gold-primary pointer-events-none" aria-hidden="true" />

        {/* Brand Logotype */}
        <div className="inline-block mb-3.5">
          <h1 className="font-serif-display text-[2.6rem] font-bold tracking-wider text-gold-light uppercase leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            {brand.name}
          </h1>
          <div className="font-caps-accent text-xs font-semibold tracking-[0.28em] text-gold-primary flex items-center justify-center gap-2.5 mt-2">
            <span className="inline-block w-6 h-[1px] bg-gold-primary" />
            <span>{brand.descriptor}</span>
            <span className="inline-block w-6 h-[1px] bg-gold-primary" />
          </div>
        </div>

        {/* Sub-Descriptor Pill (Brand-wide) */}
        <div>
          <div className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-light bg-gold-primary/10 border border-gold-border px-3.5 py-1 rounded-full mt-2 uppercase">
            <span>{brand.subDescriptor}</span>
          </div>
        </div>

        {/* Brand Statement Box */}
        <div className="mt-5 pt-4 relative">
          <div className="w-12 h-[1px] bg-gold-primary mx-auto mb-4" />
          <p className="font-serif-display italic text-[1.45rem] font-medium text-cream mb-2 tracking-wide">
            “{brand.tagline}”
          </p>
          <p className="text-[0.88rem] leading-relaxed text-cream-dark max-w-[380px] mx-auto font-light">
            {brand.heroDescription}
          </p>
        </div>
      </header>

      {/* =========================================================================
          MAIN CONTENT AREA
          ========================================================================= */}
      <main className="p-4 sm:p-5 flex flex-col gap-8 pb-10">
        
        {/* =======================================================================
            SECTION 2: PRIMARY ACTION BUTTONS (LINKTREE CTAs - ALL IN DEEP NAVY)
            ======================================================================= */}
        <section className="flex flex-col gap-3" aria-label="Primary Actions">
          
          {/* 01: VIEW MENU */}
          <a
            href={links.menuPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[66px] px-4 py-3.5 bg-navy-deep border-[1.5px] border-gold-primary text-cream rounded-[2px] flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-surface hover:border-gold-light shadow-[0_6px_20px_rgba(19,21,44,0.2)] active:translate-y-0 text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <span className="font-caps-accent text-sm font-bold text-gold-primary pr-3 border-r border-gold-border tracking-wider min-w-[28px]">
                01
              </span>
              <div className="flex flex-col">
                <span className="font-caps-accent text-base font-bold tracking-[0.14em] text-gold-light leading-snug">
                  VIEW MENU
                </span>
                <span className="text-xs text-cream-dark/90 mt-0.5 font-normal">
                  Beverages · Bakes · Breakfast · Mains · Casa Loco
                </span>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gold-primary/15 border border-gold-primary/50 rounded-[2px] text-gold-light transition-all duration-200 group-hover:bg-gold-primary group-hover:text-navy-deep shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
          </a>

          {/* 02: ORDER ONLINE */}
          <button
            type="button"
            className="w-full min-h-[66px] px-4 py-3.5 bg-navy-deep border-[1.5px] border-gold-primary text-cream rounded-[2px] flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-surface hover:border-gold-light shadow-[0_6px_20px_rgba(19,21,44,0.2)] active:translate-y-0 text-left group cursor-pointer"
            onClick={() => setIsOrderModalOpen(true)}
            aria-haspopup="dialog"
          >
            <div className="flex items-center gap-3.5">
              <span className="font-caps-accent text-sm font-bold text-gold-primary pr-3 border-r border-gold-border tracking-wider min-w-[28px]">
                02
              </span>
              <div className="flex flex-col">
                <span className="font-caps-accent text-base font-bold tracking-[0.14em] text-gold-light leading-snug">
                  ORDER ONLINE
                </span>
                <span className="text-xs text-cream-dark/90 mt-0.5 font-normal">
                  Zomato · Swiggy · Direct Order
                </span>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gold-primary/15 border border-gold-primary/50 rounded-[2px] text-gold-light transition-all duration-200 group-hover:bg-gold-primary group-hover:text-navy-deep shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>

          {/* 03: RESERVE TABLE (Matching Navy Deep Color & Gold Accents) */}
          <a
            href={links.reserveTableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[66px] px-4 py-3.5 bg-navy-deep border-[1.5px] border-gold-primary text-cream rounded-[2px] flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-surface hover:border-gold-light shadow-[0_6px_20px_rgba(19,21,44,0.2)] active:translate-y-0 text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <span className="font-caps-accent text-sm font-bold text-gold-primary pr-3 border-r border-gold-border tracking-wider min-w-[28px]">
                03
              </span>
              <div className="flex flex-col">
                <span className="font-caps-accent text-base font-bold tracking-[0.14em] text-gold-light leading-snug">
                  RESERVE TABLE
                </span>
                <span className="text-xs text-cream-dark/90 mt-0.5 font-normal">
                  Dine-In Reservations & Enquiries
                </span>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gold-primary/15 border border-gold-primary/50 rounded-[2px] text-gold-light transition-all duration-200 group-hover:bg-gold-primary group-hover:text-navy-deep shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
          </a>

          {/* QUICK CONTACT ACTIONS (WhatsApp & Call) */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* WHATSAPP US */}
            <a
              href={`https://wa.me/${links.whatsappNumber}?text=${encodeURIComponent(links.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 min-h-[50px] bg-white border border-navy-deep/15 rounded-[2px] font-caps-accent text-xs font-bold tracking-[0.12em] text-navy-deep transition-all duration-200 hover:bg-navy-deep hover:text-gold-light hover:border-navy-deep group"
            >
              <svg className="w-4 h-4 text-gold-dark group-hover:text-gold-light transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WHATSAPP US</span>
            </a>

            {/* CALL US */}
            <a
              href={`tel:${links.phoneNumber}`}
              className="flex items-center justify-center gap-2 p-3 min-h-[50px] bg-white border border-navy-deep/15 rounded-[2px] font-caps-accent text-xs font-bold tracking-[0.12em] text-navy-deep transition-all duration-200 hover:bg-navy-deep hover:text-gold-light hover:border-navy-deep group"
            >
              <svg className="w-4 h-4 text-gold-dark group-hover:text-gold-light transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>CALL US</span>
            </a>
          </div>

        </section>

        {/* =======================================================================
            SECTION 3: PHOTO GALLERY (FOOD & AMBIENCE)
            ======================================================================= */}
        <section className="pt-1" aria-labelledby="gallery-heading">
          <header className="text-center mb-4 relative">
            <span className="font-caps-accent text-[0.72rem] font-bold tracking-[0.24em] text-gold-dark uppercase mb-1 block">
              {gallery.eyebrow}
            </span>
            <h2 id="gallery-heading" className="font-serif-display text-[1.75rem] font-semibold text-navy-deep leading-tight">
              {gallery.headline}
            </h2>
            <p className="text-[0.84rem] text-navy-surface-light/80 mt-1 max-w-[340px] mx-auto leading-relaxed">
              {gallery.subtitle}
            </p>
            <div className="flex items-center justify-center gap-3 my-2.5 mx-auto w-24">
              <span className="h-[1px] flex-1 bg-gold-border" />
              <span className="w-1.5 h-1.5 bg-gold-primary rotate-45" />
              <span className="h-[1px] flex-1 bg-gold-border" />
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {gallery.images.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[2px] border border-gold-primary/30 bg-navy-deep shadow-md cursor-pointer"
                onClick={() => setSelectedGalleryImg(item)}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-navy-deep text-cream">
                  <h3 className="font-serif-title text-sm font-semibold text-gold-light leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[0.72rem] text-cream-dark/75 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================================
            SECTION 4: GUEST EXPERIENCES & GOOGLE REVIEWS
            ======================================================================= */}
        <section className="bg-white border border-gold-primary/35 p-5 rounded-[2px] shadow-[0_4px_20px_rgba(19,21,44,0.06)] relative" aria-labelledby="reviews-heading">
          <header className="text-center mb-4">
            <span className="font-caps-accent text-[0.72rem] font-bold tracking-[0.24em] text-gold-dark uppercase mb-1 block">
              {reviews.eyebrow}
            </span>
            <h2 id="reviews-heading" className="font-serif-display text-[1.65rem] font-semibold text-navy-deep leading-tight">
              {reviews.headline}
            </h2>
            
            {/* Google Rating Star Badge */}
            <div className="inline-flex items-center gap-1.5 bg-cream-soft border border-navy-deep/10 px-3 py-1 rounded-full mt-2">
              <span className="text-gold-dark text-sm">★★★★★</span>
              <span className="font-semibold text-xs text-navy-deep">{reviews.overallRating}</span>
              <span className="text-[0.72rem] text-navy-surface-light/70">· {reviews.totalReviewsText}</span>
            </div>
          </header>

          <div className="flex flex-col gap-3 my-4">
            {reviews.items.map((rev, idx) => (
              <div key={idx} className="p-3.5 bg-cream/60 border border-gold-border/40 rounded-[2px]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-serif-title text-sm font-bold text-navy-deep">{rev.name}</span>
                  <span className="text-gold-dark text-xs">★★★★★</span>
                </div>
                <p className="font-serif-display italic text-xs leading-relaxed text-navy-surface-light/90">
                  “{rev.review}”
                </p>
                <div className="text-[0.68rem] text-gold-dark font-medium mt-1 uppercase tracking-wider">
                  Verified {rev.source}
                </div>
              </div>
            ))}
          </div>

          <a
            href={links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[46px] bg-navy-deep text-gold-light border border-gold-primary font-caps-accent text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2 rounded-[2px] hover:bg-navy-surface transition-colors"
          >
            <span>VIEW ALL GOOGLE REVIEWS</span>
            <span>→</span>
          </a>
        </section>

        {/* =======================================================================
            SECTION 5: FIND US / OUR LOCATIONS (MATCHING REFERENCE DESIGN EXACTLY)
            ======================================================================= */}
        <section className="bg-navy-deep text-cream p-5 sm:p-6 border border-gold-border rounded-[2px] relative shadow-[0_8px_30px_rgba(13,14,32,0.3)]" aria-labelledby="locations-heading">
          {/* Menu-inspired Gold Corner Accents */}
          <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-gold-primary pointer-events-none" aria-hidden="true" />
          <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-gold-primary pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-gold-primary pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-gold-primary pointer-events-none" aria-hidden="true" />

          {/* Section Heading */}
          <header className="text-center mb-5">
            <span className="font-caps-accent text-[0.72rem] font-bold tracking-[0.24em] text-gold-primary uppercase block mb-1">
              {locationsSection.eyebrow}
            </span>
            <h2 id="locations-heading" className="font-serif-display text-[2rem] font-bold text-gold-light tracking-wide leading-tight uppercase">
              {locationsSection.headline}
            </h2>
            <p className="text-[0.84rem] text-cream-dark/90 mt-1 max-w-[340px] mx-auto font-light leading-relaxed">
              {locationsSection.subtitle}
            </p>
          </header>

          {/* Active Location Card (Inorbit Mall, Hyderabad) */}
          <div className="bg-navy-surface border border-gold-primary/30 rounded-[2px] overflow-hidden mb-4 shadow-lg">
            {/* Croissant Installation Image with NOW OPEN Badge */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-dark">
              <img
                src={locationsSection.activeLocation.image}
                alt={locationsSection.activeLocation.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-[#DFB76C] text-navy-dark font-caps-accent text-[0.68rem] font-extrabold tracking-[0.16em] px-2.5 py-1 rounded-[2px] uppercase shadow-md">
                {locationsSection.activeLocation.badge}
              </span>
            </div>

            {/* Location Details Body */}
            <div className="p-4 flex flex-col gap-3">
              <h3 className="font-serif-title text-[1.18rem] font-bold text-gold-light tracking-wide uppercase">
                {locationsSection.activeLocation.name}
              </h3>

              <div className="flex flex-col gap-2.5 text-xs text-cream-dark/90">
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-medium text-cream">{locationsSection.activeLocation.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-gold-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <p>{locationsSection.activeLocation.hours}</p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-gold-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href={`tel:${locationsSection.activeLocation.phone}`} className="hover:text-gold-light hover:underline">
                    {locationsSection.activeLocation.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-gold-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${locationsSection.activeLocation.email}`} className="hover:text-gold-light hover:underline">
                    {locationsSection.activeLocation.email}
                  </a>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={locationsSection.activeLocation.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full min-h-[46px] bg-navy-deep text-gold-light border border-gold-primary font-caps-accent text-xs font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 rounded-[2px] hover:bg-gold-primary hover:text-navy-deep transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Upcoming Locations (Delhi & Chennai Coming Soon Cards) */}
          <div className="grid grid-cols-2 gap-3">
            {locationsSection.upcomingLocations.map((loc, idx) => (
              <div key={idx} className="p-3.5 bg-navy-surface/80 border border-dashed border-gold-primary/30 rounded-[2px] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[2px] bg-navy-deep border border-gold-primary/30 flex items-center justify-center text-gold-primary shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-caps-accent text-xs font-bold tracking-wider text-gold-light">
                    {loc.city}
                  </h4>
                  <p className="text-[0.68rem] text-cream-dark/60 mt-0.5">
                    {loc.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================================
            SECTION 6: SOCIAL, WEBSITE & COMMUNITY
            ======================================================================= */}
        <section className="text-center pt-1" aria-label="Social Channels and Website">
          <span className="font-caps-accent text-[0.72rem] font-bold tracking-[0.24em] text-gold-dark uppercase block mb-3">
            CONNECT WITH KIPLINGS
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {/* Official Website */}
            <a
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-navy-deep/20 rounded-full font-caps-accent text-xs font-bold tracking-wider text-navy-deep hover:bg-navy-deep hover:text-gold-light hover:border-navy-deep transition-all group"
              aria-label="Official Website"
            >
              <svg className="w-3.5 h-3.5 text-gold-dark group-hover:text-gold-light transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Website</span>
            </a>

            {/* Instagram */}
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-navy-deep/20 rounded-full font-caps-accent text-xs font-bold tracking-wider text-navy-deep hover:bg-navy-deep hover:text-gold-light hover:border-navy-deep transition-all group"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 text-gold-dark group-hover:text-gold-light transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>{links.instagramHandle}</span>
            </a>

            {/* Facebook */}
            {links.facebook && (
              <a
                href={links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-navy-deep/20 rounded-full font-caps-accent text-xs font-bold tracking-wider text-navy-deep hover:bg-navy-deep hover:text-gold-light hover:border-navy-deep transition-all group"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 text-gold-dark group-hover:text-gold-light transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
            )}
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-1.5 mt-5 font-caps-accent text-[0.7rem] font-bold tracking-[0.16em] text-gold-dark uppercase px-4 py-2 border border-gold-border rounded-full bg-white hover:bg-navy-deep hover:text-gold-light hover:border-navy-deep transition-all cursor-pointer"
            onClick={scrollToTop}
          >
            ↑ Back to Top
          </button>
        </section>

      </main>

      {/* =========================================================================
          SECTION 7: BRAND FOOTER
          ========================================================================= */}
      <footer className="bg-navy-dark text-cream p-7 text-center border-t border-gold-border mt-auto">
        <div className="font-serif-display text-[1.35rem] font-bold text-gold-light tracking-wide uppercase">
          {brand.name}
        </div>
        <div className="font-caps-accent text-[0.7rem] tracking-[0.22em] text-gold-primary mt-0.5">
          {brand.descriptor}
        </div>
        <p className="font-serif-display italic text-[0.86rem] text-gold-primary/90 mt-4 pt-3 border-t border-dashed border-gold-border/30">
          “Curiosity is welcome · Conversation is unhurried · A long lunch is never wasted time.”
        </p>
      </footer>

      {/* =========================================================================
          INTERACTIVE MODAL 1: ORDER ONLINE SELECTOR (BOTTOM SHEET)
          ========================================================================= */}
      {isOrderModalOpen && (
        <div
          className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm z-50 flex items-end justify-center transition-opacity"
          onClick={() => setIsOrderModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-sheet-title"
        >
          <div
            className="bg-cream w-full max-w-[480px] max-h-[85vh] rounded-t-2xl border-t-2 border-gold-primary p-6 overflow-y-auto shadow-2xl relative animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-navy-deep/20 rounded-full mx-auto mb-4" />
            
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 id="order-sheet-title" className="font-serif-title text-[1.35rem] text-navy-deep leading-tight">
                  Order Online
                </h3>
                <p className="text-xs text-navy-surface-light/80 mt-1">
                  Select your preferred delivery platform or order direct
                </p>
              </div>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center bg-cream-soft border border-navy-deep/12 rounded-full text-navy-deep text-lg hover:bg-navy-deep hover:text-gold-light transition-colors cursor-pointer"
                onClick={() => setIsOrderModalOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {/* Zomato */}
              <a
                href={links.orderOnline.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border border-navy-deep/15 rounded-[2px] transition-all hover:border-gold-dark hover:-translate-y-0.5 hover:shadow-md group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[2px] flex items-center justify-center bg-navy-deep text-gold-light font-caps-accent font-extrabold text-sm">
                    Z
                  </div>
                  <div>
                    <h4 className="font-serif-title text-[1.05rem] font-semibold text-navy-deep">
                      Zomato
                    </h4>
                    <p className="text-xs text-navy-surface-light/80 mt-0.5">
                      Doorstep Delivery · Live Tracking
                    </p>
                  </div>
                </div>
                <span className="font-caps-accent text-xs font-bold tracking-wider text-gold-dark group-hover:translate-x-0.5 transition-transform">
                  Order →
                </span>
              </a>

              {/* Swiggy */}
              <a
                href={links.orderOnline.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border border-navy-deep/15 rounded-[2px] transition-all hover:border-gold-dark hover:-translate-y-0.5 hover:shadow-md group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[2px] flex items-center justify-center bg-navy-deep text-gold-light font-caps-accent font-extrabold text-sm">
                    S
                  </div>
                  <div>
                    <h4 className="font-serif-title text-[1.05rem] font-semibold text-navy-deep">
                      Swiggy
                    </h4>
                    <p className="text-xs text-navy-surface-light/80 mt-0.5">
                      Fast Delivery · Takeaway
                    </p>
                  </div>
                </div>
                <span className="font-caps-accent text-xs font-bold tracking-wider text-gold-dark group-hover:translate-x-0.5 transition-transform">
                  Order →
                </span>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={links.orderOnline.directOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border border-navy-deep/15 rounded-[2px] transition-all hover:border-gold-dark hover:-translate-y-0.5 hover:shadow-md group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[2px] flex items-center justify-center bg-navy-deep text-gold-light font-caps-accent font-extrabold text-xs">
                    WA
                  </div>
                  <div>
                    <h4 className="font-serif-title text-[1.05rem] font-semibold text-navy-deep">
                      Direct Order
                    </h4>
                    <p className="text-xs text-navy-surface-light/80 mt-0.5">
                      WhatsApp Table Pickup / Pre-Order
                    </p>
                  </div>
                </div>
                <span className="font-caps-accent text-xs font-bold tracking-wider text-gold-dark group-hover:translate-x-0.5 transition-transform">
                  Chat →
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE MODAL 2: GALLERY LIGHTBOX PREVIEW
          ========================================================================= */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 bg-navy-dark/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-navy-deep border border-gold-primary/40 rounded-[2px] max-w-[420px] w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <img
                src={selectedGalleryImg.url}
                alt={selectedGalleryImg.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-navy-dark/80 text-gold-light border border-gold-border rounded-full hover:bg-gold-primary hover:text-navy-deep transition-colors"
                onClick={() => setSelectedGalleryImg(null)}
                aria-label="Close image"
              >
                ×
              </button>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-serif-title text-base font-semibold text-gold-light">
                {selectedGalleryImg.title}
              </h3>
              <p className="text-xs text-cream-dark/80 mt-1">
                {selectedGalleryImg.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
