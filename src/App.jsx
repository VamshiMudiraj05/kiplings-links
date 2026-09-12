import { useState, useEffect } from 'react'
import { KIPLINGS_CONFIG } from './config/kiplingsConfig'

function App() {
  const { brand, links, about } = KIPLINGS_CONFIG

  // Interactive Modals State
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  // Keyboard accessibility: Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOrderModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isOrderModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOrderModalOpen])

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

        {/* Location Tag */}
        <div>
          <div className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-[0.16em] text-gold-light bg-gold-primary/10 border border-gold-border px-3 py-1 rounded-full mt-2 uppercase">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>{brand.locationShort}</span>
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
      <main className="p-4 sm:p-5 flex flex-col gap-6 pb-10">
        
        {/* =======================================================================
            SECTION 2: PRIMARY ACTION BUTTONS (LINKTREE CTAs)
            ======================================================================= */}
        <section className="flex flex-col gap-3" aria-label="Primary Actions">
          
          {/* 01: VIEW MENU (Links directly to Menu PDF) */}
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

          {/* 02: ORDER ONLINE (Matching Deep Blue / Navy Color with Gold Accents) */}
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

          {/* 03: RESERVE TABLE */}
          <a
            href={links.reserveTableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[58px] px-4 py-3.5 bg-white border border-navy-deep text-navy-deep rounded-[2px] flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-dark hover:shadow-[0_6px_16px_rgba(19,21,44,0.09)] active:translate-y-0 text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <span className="font-caps-accent text-xs font-bold text-gold-dark pr-3 border-r border-navy-deep/15 tracking-wider min-w-[28px]">
                03
              </span>
              <div className="flex flex-col">
                <span className="font-caps-accent text-sm font-bold tracking-[0.14em] text-navy-deep leading-snug">
                  RESERVE TABLE
                </span>
                <span className="text-xs text-navy-surface-light/80 mt-0.5 font-normal">
                  Dine-In Reservations & Enquiries
                </span>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center border border-navy-deep/15 rounded-[2px] text-navy-deep transition-all duration-200 group-hover:bg-navy-deep group-hover:text-gold-light group-hover:border-navy-deep shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            SECTION 3: VISIT US (LOCATION & CONTACT CARD)
            ======================================================================= */}
        <section className="bg-white border border-navy-deep p-5 rounded-[2px] text-center shadow-[0_4px_20px_rgba(19,21,44,0.06)] relative" aria-label="Restaurant Location and Contact">
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold-primary pointer-events-none" aria-hidden="true" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold-primary pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold-primary pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold-primary pointer-events-none" aria-hidden="true" />

          <span className="font-caps-accent text-[0.72rem] font-bold tracking-[0.24em] text-gold-dark uppercase mb-1 block">
            CONTACT & VISIT
          </span>
          <h2 className="font-serif-title text-[1.28rem] text-navy-deep font-bold mb-1">
            KIPLINGS DELI & BISTRO
          </h2>
          
          <div className="text-[0.86rem] text-navy-surface-light/85 leading-relaxed mb-3 flex flex-col gap-1 items-center">
            <p className="flex items-center justify-center gap-1.5 font-medium">
              <svg className="w-3.5 h-3.5 text-gold-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{brand.locationShort}</span>
            </p>
            <p className="text-xs text-navy-surface-light/70">{brand.locationFull}</p>
            <div className="flex items-center justify-center gap-4 mt-1 text-xs text-navy-deep font-medium">
              <a href={`tel:${links.phoneNumber}`} className="hover:text-gold-dark underline-offset-2 hover:underline">
                {links.phoneDisplay}
              </a>
              <span>·</span>
              <a href={`mailto:${links.email}`} className="hover:text-gold-dark underline-offset-2 hover:underline">
                {links.email}
              </a>
            </div>
          </div>

          <div className="inline-block text-[0.76rem] font-semibold tracking-wide text-navy-deep bg-cream-soft border border-navy-deep/10 px-3 py-1 rounded-full mb-4">
            {brand.hours}
          </div>

          <a
            href={links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[50px] bg-navy-deep text-gold-light border border-gold-primary font-caps-accent text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 rounded-[2px] hover:bg-navy-surface transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            <span>GET DIRECTIONS</span>
          </a>
        </section>

        {/* =======================================================================
            SECTION 4: ABOUT KIPLINGS (EDITORIAL STORY)
            ======================================================================= */}
        <section className="pt-1" aria-labelledby="about-heading">
          <header className="text-center mb-4 relative">
            <span className="font-caps-accent text-[0.72rem] font-bold tracking-[0.24em] text-gold-dark uppercase mb-1 block">
              {about.eyebrow}
            </span>
            <h2 id="about-heading" className="font-serif-display text-[1.65rem] font-semibold text-navy-deep leading-tight tracking-tight">
              {about.headline}
            </h2>
            <div className="flex items-center justify-center gap-3 my-2.5 mx-auto w-24">
              <span className="h-[1px] flex-1 bg-gold-border" />
              <span className="w-1.5 h-1.5 bg-gold-primary rotate-45" />
              <span className="h-[1px] flex-1 bg-gold-border" />
            </div>
          </header>

          <div className="flex flex-col gap-3">
            {about.storyCards.map((card, index) => (
              <article key={index} className="bg-white border border-gold-primary/40 p-4 rounded-[2px] shadow-[0_4px_20px_rgba(19,21,44,0.06)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-caps-accent text-[0.72rem] font-bold text-gold-dark bg-gold-primary/15 px-1.5 py-0.5 rounded-[2px]">
                    {card.number}
                  </span>
                  <h3 className="font-serif-title text-[1.05rem] font-semibold text-navy-deep">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[0.85rem] leading-relaxed text-navy-surface-light/85">
                  {card.quote}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* =======================================================================
            SECTION 5: SOCIAL, WEBSITE & COMMUNITY
            ======================================================================= */}
        <section className="text-center pt-2" aria-label="Social Channels and Website">
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
          SECTION 6: EDITORIAL FOOTER
          ========================================================================= */}
      <footer className="bg-navy-dark text-cream p-7 text-center border-t border-gold-border mt-auto">
        <div className="font-serif-display text-[1.35rem] font-bold text-gold-light tracking-wide uppercase">
          {brand.name}
        </div>
        <div className="font-caps-accent text-[0.7rem] tracking-[0.22em] text-gold-primary mt-0.5">
          {brand.descriptor}
        </div>
        <div className="text-xs text-cream-dark/70 mt-2 tracking-wide">
          {brand.locationShort}
        </div>
        <p className="font-serif-display italic text-[0.86rem] text-gold-primary/90 mt-4 pt-3 border-t border-dashed border-gold-border/30">
          “Curiosity is welcome · Conversation is unhurried · A long lunch is never wasted time.”
        </p>
      </footer>

      {/* =========================================================================
          INTERACTIVE MODAL: ORDER ONLINE SELECTOR (BOTTOM SHEET)
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
    </div>
  )
}

export default App
