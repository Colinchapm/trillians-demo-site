import './App.css'

const logo = '/images/trillians-logo.jpg'

const navItems = [
  ['Home', '#home'],
  ["What's On", '#whats-on'],
  ['Tickets', '#tickets'],
  ['Drinks', '#drinks'],
  ['Merch', '#merch'],
  ['Cheer Up Goth', '#cheer-up-goth'],
  ['Wrong Channel', '#wrong-channel'],
  ['Apply To Perform', '#apply'],
  ['Contact', '#contact'],
]

const events = [
  { day: 'Fri', date: '13', month: 'Jun', title: 'Stone Broken', note: '+ Special Guests', time: '8:00PM - 11:30PM' },
  { day: 'Sat', date: '14', month: 'Jun', title: 'Hells Addiction', note: '+ Special Guests', time: '8:00PM - 11:30PM' },
  { day: 'Fri', date: '20', month: 'Jun', title: 'The Kut', note: '+ Special Guests', time: '8:00PM - 11:30PM' },
]

const heroFeatures = ['Live Music', 'Comedy Nights', 'Drinks To Your Table', 'Exclusive Merch']

function Button({ children, href = '#contact', variant = 'red' }) {
  return <a className={`button button-${variant}`} href={href}>{children}</a>
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>
}

function Header() {
  return (
    <header className="site-header">
      <a className="logo-link" href="#home" aria-label="Trillians home">
        <img src={logo} alt="Trillians Rockbar" />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href], index) => (
          <a className={index === 0 ? 'active' : ''} key={href} href={href}>{label}</a>
        ))}
      </nav>
      <Button href="#drinks">Order Now Cart</Button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>
            <span>Rock. Comedy.</span>
            <span>Good Times.</span>
            <span>That&apos;s Trillians.</span>
          </h1>
          <p>
            More than a rock bar. We&apos;re a hub for live music, comedy, alternative culture
            and good people. Now with a digital experience that makes your night even better.
          </p>
          <div className="hero-actions">
            <Button href="#whats-on">See What&apos;s On</Button>
            <Button href="#drinks" variant="outline">Order Drinks</Button>
          </div>
        </div>
        <aside className="brush-panel" aria-label="Trillians features">
          {heroFeatures.map((feature) => <div key={feature}><span aria-hidden="true">+</span>{feature}</div>)}
        </aside>
      </div>
    </section>
  )
}

function WhatsOnCard() {
  return (
    <article className="dashboard-card event-card" id="whats-on">
      <SectionTitle>What&apos;s On</SectionTitle>
      <div className="event-list">
        {events.map((event) => (
          <div className="event-row" key={event.title}>
            <div className="date-box">
              <span>{event.day}</span>
              <strong>{event.date}</strong>
              <small>{event.month}</small>
            </div>
            <div className="event-image" aria-hidden="true" />
            <div className="event-copy">
              <h3>{event.title}</h3>
              <p>{event.note}</p>
              <small>{event.time}</small>
            </div>
            <Button href="#tickets" variant="ghost">Tickets</Button>
          </div>
        ))}
      </div>
      <Button href="#contact" variant="wide">View Full Gig Guide</Button>
    </article>
  )
}

function PromoCard({ id, title, imageClass, children, button }) {
  return (
    <article className="dashboard-card promo-card" id={id}>
      <SectionTitle>{title}</SectionTitle>
      <div className={`promo-image ${imageClass}`} />
      <p>{children}</p>
      {button}
    </article>
  )
}

function Dashboard() {
  return (
    <section className="dashboard" aria-label="Commercial actions">
      <WhatsOnCard />
      <PromoCard
        id="tickets"
        title="Get Your Tickets"
        imageClass="tickets-image"
        button={<Button href="#contact">Buy Tickets</Button>}
      >
        Secure your spot for the best live music and events.
      </PromoCard>
      <PromoCard
        id="drinks"
        title="Order To Your Table"
        imageClass="drinks-image"
        button={<Button href="#contact">Order Now</Button>}
      >
        Skip the queue. Order drinks straight to your table.
      </PromoCard>
      <PromoCard
        id="merch"
        title="Merch"
        imageClass="merch-image"
        button={<Button href="#contact">Shop Merch</Button>}
      >
        Rep your scene. Exclusive Trillians merch.
      </PromoCard>
    </section>
  )
}

function BottomFeatures() {
  return (
    <section className="feature-row">
      <article className="feature-card goth" id="cheer-up-goth">
        <div>
          <h2>Cheer Up Goth</h2>
          <h3>Comedy Night</h3>
          <p>Dark humour. Bright future.</p>
        </div>
      </article>
      <article className="feature-card wrong" id="wrong-channel">
        <div>
          <h2>The Wrong Channel</h2>
          <p>Comedy &amp; news. Sort of.</p>
        </div>
      </article>
      <article className="feature-card apply" id="apply">
        <div>
          <h2>Apply To Perform</h2>
          <p>Musicians, comedians, performers. We want to hear from you.</p>
          <Button href="#contact">Apply Now</Button>
        </div>
      </article>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="kicker">Contact Form Mockup</p>
        <h2>Book it, pitch it, ask it.</h2>
      </div>
      <form className="contact-form">
        <input aria-label="Name" placeholder="Name" />
        <input aria-label="Email" type="email" placeholder="Email" />
        <select aria-label="Enquiry type" defaultValue="tickets">
          <option value="tickets">Tickets and tables</option>
          <option value="perform">Apply to perform</option>
          <option value="merch">Merch</option>
          <option value="general">General enquiry</option>
        </select>
        <textarea aria-label="Message" placeholder="Message" rows="4" />
        <button type="button">Send Mock Enquiry</button>
      </form>
    </section>
  )
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <BottomFeatures />
        <Contact />
      </main>
    </div>
  )
}
