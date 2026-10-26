import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const whatsappNumber = '919999999999'
const whatsappMessage = encodeURIComponent('Hi F2F Fitness, I want to start my fitness journey.')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const programs = [
  {
    number: '01',
    title: 'Fat Loss',
    description: 'Burn fat, boost energy, and feel amazing with a plan designed around you.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85',
  },
  {
    number: '02',
    title: 'Muscle Building',
    description: 'Build muscle, improve your physique, and get stronger every week.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85',
  },
  {
    number: '03',
    title: 'Strength Training',
    description: 'Increase strength, improve performance, and stay injury-free.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',
  },
]

const benefits = [
  ['01', 'Personalized Plans', 'Training that fits your goals, lifestyle, and starting point.'],
  ['02', 'Expert Guidance', 'Clear coaching and practical support at every step.'],
  ['03', 'Real Results', 'A sustainable approach focused on progress that lasts.'],
  ['04', 'Support Always', 'A coach in your corner when motivation gets tested.'],
]

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-brand-mark">F2F</div>
      <p className="loading-wordmark">FITNESS</p>
      <div className="loading-line"><span></span></div>
      <p className="loading-caption">FROM FAT TO FIT</p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const minimumDisplay = new Promise((resolve) => setTimeout(resolve, 900))
    const fontsReady = document.fonts?.ready ?? Promise.resolve()
    Promise.all([minimumDisplay, fontsReady]).then(() => setIsLoading(false))
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      {isLoading && <LoadingScreen />}
      <header className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="F2F Fitness home">
          <span className="brand-mark">F2F</span>
          <span className="brand-copy"><strong>FITNESS</strong><small>FROM FAT TO FIT</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#top" onClick={closeMenu}>Home</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Chat on WhatsApp <span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> START STRONG. STAY CONSISTENT.</p>
            <h1>Your fitness<br /><em>journey</em> starts<br />here.</h1>
            <p className="hero-text">Personalized training. Real results.<br />A healthier, stronger you.</p>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start your transformation <span>↗</span></a>
          </div>
          <div className="hero-art" role="img" aria-label="Athlete training in a gym">
            <div className="hero-glow"></div>
            <div className="hero-overlay"></div>
            <div className="hero-stamp">F2F<br /><small>FITNESS</small></div>
          </div>
          <div className="hero-side-note"><span className="vertical-rule"></span><span>BUILD YOUR<br />BETTER SELF</span></div>
        </section>

        <section className="intro section-grid" id="about">
          <div className="section-label"><span>01</span><span className="label-line"></span><span>OUR APPROACH</span></div>
          <div className="intro-copy"><p className="eyebrow orange">MORE THAN A WORKOUT</p><h2>Small steps.<br /><em>Big change.</em></h2></div>
          <div className="intro-text"><p>We believe fitness should feel empowering, not overwhelming. Wherever you are starting from, we meet you there and help you move forward.</p><p>Simple plans. Expert guidance. A stronger version of you.</p></div>
        </section>

        <section className="programs section-grid" id="programs">
          <div className="section-label"><span>02</span><span className="label-line"></span><span>WHAT WE DO</span></div>
          <div className="section-heading"><p className="eyebrow orange">TRAIN WITH PURPOSE</p><h2>Find your<br /><em>focus.</em></h2></div>
          <div className="program-grid">
            {programs.map((program) => <article className="program-card" key={program.number}>
              <div className="program-image" style={{ backgroundImage: `url(${program.image})` }}><span className="card-number">{program.number}</span></div>
              <div className="program-body"><h3>{program.title}</h3><p>{program.description}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Learn more <span>↗</span></a></div>
            </article>)}
          </div>
        </section>

        <section className="benefits" id="why-us">
          <div className="benefits-inner section-grid"><div className="section-label light"><span>03</span><span className="label-line"></span><span>WHY F2F</span></div><div className="benefit-title"><p className="eyebrow orange">THE DIFFERENCE IS YOU</p><h2>Progress<br /><em>with purpose.</em></h2></div><div className="benefit-list">{benefits.map(([number, title, text]) => <div className="benefit" key={number}><span className="benefit-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="benefit-arrow">↗</span></div>)}</div></div>
        </section>

        <section className="cta" id="contact"><div className="cta-inner"><p className="eyebrow dark">YOUR NEXT CHAPTER STARTS NOW</p><h2>Ready to<br /><em>transform?</em></h2><p>Let’s build your better tomorrow — together.</p><a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Chat with us on WhatsApp <span>↗</span></a></div><div className="cta-circle">F2F<br /><small>FITNESS</small></div></section>
      </main>
      <footer><span>© {new Date().getFullYear()} F2F Fitness</span><span>From fat to fit.</span><span>Made by <strong>AIVA Freelancia</strong></span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us ↗</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
