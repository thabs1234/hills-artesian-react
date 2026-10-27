import { useState } from 'react'

const navLinks = [
  { href: '#story', label: 'Story' },
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

const products = [
  {
    id: 'still',
    name: 'Hills Still',
    tag: 'Still',
    description: 'A clean, balanced still water with pH 7.0, designed for everyday premium hydration.',
    image: '/assets/img4.jpg',
  },
  {
    id: 'sparkling',
    name: 'Hills Sparkling',
    tag: 'Sparkling',
    description: 'Crisp and refreshing with pH 4.9, distinguished by its carbonation and volcanic-origin character.',
    image: '/assets/img5.jpg',
  },
  {
    id: 'trade',
    name: 'For Trade Partners',
    tag: 'Trade',
    description: 'Premium on-premise and retail solutions in formats suited to every occasion.',
    image: '/assets/img1.jpg',
  },
]

const features = [
  {
    title: 'Natural Source',
    description: 'Sourced from a natural aquifer beneath the volcanic rock formations of Malelane, Mpumalanga.',
    icon: 'M12 2.5l7 7-7 13-7-13 7-7z',
  },
  {
    title: 'Volcanic Origin',
    description: 'Naturally occurring water moves through ancient volcanic rock formations before reaching its underground aquifer.',
    icon: 'M12 2.5l7 7-7 13-7-13 7-7z',
  },
  {
    title: 'South African',
    description: 'A locally sourced premium water with a distinctive sense of place you can bring directly to the table.',
    icon: 'M12 2.5l7 7-7 13-7-13 7-7z',
  },
  {
    title: 'Premium Presentation',
    description: 'Designed to complement modern hospitality and retail environments.',
    icon: 'M12 2.5l7 7-7 13-7-13 7-7z',
  },
]

const testimonials = [
  {
    quote: 'Hills Artesian has become our exclusive pour. Guests immediately notice the difference.',
    author: 'Top Restaurant Group',
    role: 'F&B Director',
  },
  {
    quote: 'Clean, crisp, and on-brand. Hills fits our premium positioning perfectly.',
    author: 'Luxury Hotel',
    role: 'General Manager',
  },
  {
    quote: 'Reliable supply and exceptional quality. A true partner for our retail locations.',
    author: 'Retail Chain',
    role: 'Category Manager',
  },
]

const occasions = [
  'At home day-to-day consumption',
  'Restaurants',
  'Cafés',
  'Hotels',
  'Corporate meetings',
  'Events',
  'Retail',
]

const pricingPlans = [
  {
    name: 'Still',
    price: 'pH 7.0',
    unit: 'balanced, clean, refreshing',
    features: ['Natural aquifer source', 'Volcanic origin', 'Premium presentation'],
    cta: 'Order still',
    href: '#contact',
  },
  {
    name: 'Sparkling',
    price: 'pH 4.9',
    unit: 'crisp, effervescent, distinctive',
    features: ['Carbonation character', 'Volcanic origin', 'Premium presentation'],
    cta: 'Order sparkling',
    href: '#contact',
    featured: true,
  },
  {
    name: 'Trade',
    price: 'Formats to suit',
    unit: 'hospitality, retail, events',
    features: ['Format flexibility', 'Consistent supply', 'Branded options'],
    cta: 'Enquire',
    href: '#contact',
  },
]

const faqs = [
  {
    question: 'Where does Hills Artesian Spring Water come from?',
    answer: 'Hills is sourced from a natural aquifer beneath the volcanic rock formations of Malelane, Mpumalanga, South Africa. The water moves through ancient volcanic rock before reaching its natural underground aquifer.',
  },
  {
    question: 'What is the difference between Still and Sparkling?',
    answer: 'Hills Still has a balanced pH of 7.0 for a clean, refreshing taste. Hills Sparkling has pH 4.9, with its crisp character coming from the carbonation process.',
  },
  {
    question: 'Is Hills suitable for trade and hospitality?',
    answer: 'Yes. Hills is designed for restaurants, cafés, hotels, corporate meetings, events, and retail. Trade partners can enquire directly for formats and pricing.',
  },
  {
    question: 'How can I place an order?',
    answer: 'Call 066 572 9783 or WhatsApp 077 373 9991. For trade enquiries, use the contact form below.',
  },
]

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border" style={{ backgroundColor: 'rgba(250,250,249,0.72)', backdropFilter: 'blur(16px) saturate(180%)' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-display font-bold text-xl tracking-wide" style={{ color: 'var(--color-primary)' }}>
          Hills <span style={{ color: 'var(--color-accent)' }}>Artesian</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--color-muted-foreground)' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-muted-foreground)')}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/img1.jpg')",
          opacity: 0.55,
          transform: 'scale(1.05)',
          animation: 'hero-zoom 20s ease-in-out infinite alternate',
        }}
        role="img"
        aria-label="Hills Artesian Spring Water hero scene"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-3xl px-6 py-32">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            borderColor: 'rgba(255,255,255,0.25)',
            color: 'var(--color-on-primary)',
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest">Premium South African Artesian Water</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6" style={{ color: 'var(--color-on-primary)', fontWeight: 600 }}>
          Naturally rare.<br />Simply pure.
        </h1>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
          Hills Artesian Spring Water is sourced from a natural aquifer beneath the volcanic rock formations of Malelane, Mpumalanga — delivering a taste that’s as distinctive as its origin.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#products" className="btn-primary">Explore products</a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
      </div>

      <style>{`
        @keyframes hero-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.12); }
        }
      `}</style>
    </section>
  )
}

function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-accent)' }}>
          Why Hills
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--color-card)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'var(--color-muted)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
                  <path d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3" style={{ fontWeight: 600 }}>{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-card)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: 'var(--color-accent)' }}>
          Trusted by
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: 'var(--color-background)',
                borderColor: 'var(--color-border)',
              }}
            >
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-foreground)' }}>“{item.quote}”</p>
              <div>
                <div className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{item.author}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--color-muted-foreground)' }}>{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-accent)' }}>
          Services
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="p-8 rounded-2xl border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--color-card)',
                borderColor: plan.featured ? 'var(--color-accent)' : 'var(--color-border)',
                boxShadow: plan.featured ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
              }}
            >
              <h3 className="font-display text-2xl mb-2" style={{ fontWeight: 600 }}>{plan.name}</h3>
              <div className="text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{plan.price}</div>
              <div className="text-xs mb-6" style={{ color: 'var(--color-muted-foreground)' }}>{plan.unit}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-muted-foreground)' }}>
                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className="btn-primary justify-center"
                style={plan.featured ? {} : { backgroundColor: 'transparent', color: 'var(--color-primary)', border: '1px solid var(--color-border)' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          <div className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--color-accent)' }}>
            Ideal occasions
          </div>
          <div className="flex flex-wrap gap-3">
            {occasions.map((occasion) => (
              <span
                key={occasion}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-primary)' }}
              >
                {occasion}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-card)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: 'var(--color-accent)' }}>
          FAQ
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border rounded-xl overflow-hidden transition-all duration-300"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <span className="font-medium text-sm sm:text-base" style={{ color: 'var(--color-primary)' }}>{faq.question}</span>
                <span className="text-xl leading-none transition-transform duration-300" style={{ color: 'var(--color-accent)', transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="p-6 pt-0 text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display font-bold text-xl tracking-wide" style={{ color: 'var(--color-primary)' }}>
          Hills <span style={{ color: 'var(--color-accent)' }}>Artesian</span>
        </div>
        <div className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
          © Hills Artesian Spring Water. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,25,23,0.92), rgba(28,25,23,0.85)), url('/assets/img2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          <div className="absolute inset-0 bg-black/55" style={{ backdropFilter: 'blur(2px)' }} />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: '#fff', fontWeight: 600 }}>Contact us</h2>
            <p className="max-w-2xl mx-auto mb-10 text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>
              For orders and trade enquiries, reach us directly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+66665729783" className="btn-primary">Call 066 572 9783</a>
              <a href="https://wa.me/27773739991" className="btn-secondary">WhatsApp 077 373 9991</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <section id="products" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: 'var(--color-accent)' }}>
              The product range
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="h-56 overflow-hidden" style={{ backgroundColor: 'var(--color-muted)' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-primary)' }}
                    >
                      {product.tag}
                    </span>
                    <h3 className="font-display text-2xl mb-2" style={{ fontWeight: 600 }}>{product.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 px-6" style={{ backgroundColor: 'var(--color-card)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: 'var(--color-accent)' }}>
              Gallery
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:row-span-2 rounded-2xl overflow-hidden aspect-auto md:aspect-auto" style={{ boxShadow: 'var(--shadow-md)' }}>
                <img src="/assets/img3.jpg" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video" style={{ boxShadow: 'var(--shadow-md)' }}>
                <img src="/assets/img4.jpg" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video" style={{ boxShadow: 'var(--shadow-md)' }}>
                <img src="/assets/img5.jpg" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
