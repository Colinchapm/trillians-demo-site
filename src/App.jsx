import { useMemo, useState } from 'react'
import './App.css'

const TRILLIANS_LOGO = '/images/logo/trillians-logo-placeholder.svg'

const gigs = [
  { date: 'Wed 13 May', title: 'Slackrr / Ochisia / Reset Repeat', type: 'Gig', price: 'TBC', local: true },
  { date: 'Thu 14 May', title: 'HEAT 6 M2TM', type: 'Battle', price: 'TBC', local: false },
  { date: 'Fri 15 May', title: 'Beer Pong + Open as Normal', type: 'Bar Night', price: 'Free', local: false },
  { date: 'Sat 16 May', title: 'Heaven Helvis - Elvis Fronted Sabbath Tribute', type: 'Tribute', price: 'TBC', local: false },
  { date: 'Wed 20 May', title: 'Edge Of Paradise', type: 'Touring Gig', price: '£18 / £20', local: false },
  { date: 'Sun 31 May', title: 'TYTAN / SLANDER - Afternoon Gig', type: 'All Ages', price: 'Free', local: false },
  { date: 'Tue 21 Jul', title: 'Tragedy - All Metal Tribute to the Bee Gees', type: 'Ticketed Gig', price: 'Ticketed', local: false },
  { date: 'Tuesday Pilot', title: 'Cheer Up Goth - Comedy Night', type: 'Comedy', price: '£3-£5', local: false },
]

const drinks = [
  { name: 'The Joker', desc: 'Dark fruit, cola, rum or vodka. 50p from each sale goes into the performer pot.', price: '£7.00', tag: 'Cheer Up Goth Special' },
  { name: 'The Punchline', desc: 'Non-alcoholic dark berry mocktail for drivers, goths and responsible demons.', price: '£4.50', tag: 'Mocktail' },
  { name: 'House Lager', desc: 'Simple, cold and dependable.', price: 'From £4.20', tag: 'Draught' },
  { name: 'Bottle Deals', desc: 'Quick order for busy gig nights.', price: 'Venue pricing', tag: 'Fast Serve' },
]

const merch = [
  {
    name: 'Cheer Up Goth Comedy Tee',
    price: '£20',
    desc: 'Pilot event merch using the Trillians Proudly Presents Cheer Up Goth Comedy artwork.',
    image: '/images/merch/cheer-up-goth-tee-placeholder.svg',
  },
  {
    name: 'Trillians Logo Tee',
    price: '£18',
    desc: 'Classic black venue tee with the Trillians Rockbar logo across the chest.',
    image: '/images/merch/trillians-logo-tee-placeholder.svg',
  },
  {
    name: 'I Performed at Trillians Tee',
    price: '£22',
    desc: 'Performer-only or limited-run merch for bands, comics and guest acts.',
    image: '/images/merch/performed-at-trillians-tee-placeholder.svg',
  },
  {
    name: 'No Trills, No Frills Tee',
    price: '£20',
    desc: 'A slogan shirt with a distressed rock/goth print for the venue merch range.',
    image: '/images/merch/no-trills-no-frills-tee-placeholder.svg',
  },
]

const bookingSteps = [
  'Comedians apply through a Microsoft Form',
  'Promoter reviews clips, bio and Tuesday availability',
  'Acts agree set length, fee/travel and filming permissions',
  'Event page, performer cards and social clips are created',
]

function Badge({ children }) {
  return <span className="badge">{children}</span>
}

function Button({ children, href = '#contact', variant = 'primary', type = 'button' }) {
  const className = variant === 'secondary' ? 'button button-secondary' : 'button button-primary'

  if (href) {
    return <a className={className} href={href}>{children}</a>
  }

  return <button className={className} type={type}>{children}</button>
}

function Card({ className = '', children }) {
  return <article className={`card ${className}`}>{children}</article>
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: "What's On", href: '#whats-on' },
    { label: 'Tickets', href: '#tickets' },
    { label: 'Drinks', href: '#drinks' },
    { label: 'Merch', href: '#merch' },
    { label: 'Cheer Up Goth', href: '#cheer-up-goth' },
    { label: 'The Wrong Channel', href: '#wrong-channel' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a href="#home" className="logo-link" aria-label="Trillians Rock Bar home">
          <img src={TRILLIANS_LOGO} alt="Trillians Rock Bar" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <Button href="#drinks" variant="secondary">Order Drinks</Button>
          <Button href="#tickets">Buy Tickets</Button>
        </div>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="mobile-nav" id="mobile-nav">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <div className="mobile-actions">
            <Button href="#drinks" variant="secondary">Order Drinks</Button>
            <Button href="#tickets">Buy Tickets</Button>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <Badge>Website modernisation demo</Badge>
          <h1>Newcastle&apos;s rock bar, rebuilt for tickets, drinks, merch and events.</h1>
          <p>
            A cleaner Trillians website concept that keeps the black-and-red rock identity,
            fixes broken journeys, and turns the site into a working revenue tool instead
            of a static noticeboard.
          </p>
          <div className="hero-buttons">
            <Button href="#tickets">Buy Tickets</Button>
            <Button href="#drinks" variant="secondary">Order to Table</Button>
          </div>
          <div className="stat-grid">
            <div><strong>3pm</strong><span>Open Mon-Wed</span></div>
            <div><strong>Tue</strong><span>Comedy pilot</span></div>
            <div><strong>50p</strong><span>Joker pot</span></div>
          </div>
        </div>
        <Card className="featured-card">
          <div className="featured-head">
            <div>
              <p className="eyebrow">Featured Tuesday</p>
              <h2>Cheer Up Goth</h2>
            </div>
            <span className="feature-icon">MIC</span>
          </div>
          <div className="featured-body">
            <p className="featured-lead">Because weekends are for the living.</p>
            <p>
              A comedy night hosted at Trillians with 2-3 acts, dark humour, short social
              clips, a performer pot and the official house drink: <strong>The Joker</strong>.
            </p>
            <div className="action-list">
              {['Apply to perform', 'Reserve a ticket', 'Order The Joker', 'Buy event merch'].map((item) => (
                <a href="#contact" key={item}>{item}<span>Open</span></a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

function WhatsOn() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => gigs.filter((gig) => `${gig.date} ${gig.title} ${gig.type}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <section id="whats-on" className="section section-dark">
      <div className="section-inner">
        <SectionTitle eyebrow="Live calendar" title="What&apos;s On At Trillians">
          A structured gig guide that can link each event to tickets, local support enquiries,
          social posts and mailing list reminders.
        </SectionTitle>
        <div className="search-panel">
          <label className="search-field">
            <span>Search events</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search gigs, comedy, tribute nights..." />
          </label>
          <Button href="#apply">Submit Local Support</Button>
        </div>
        <div className="gig-grid">
          {filtered.map((gig) => (
            <Card key={`${gig.date}-${gig.title}`} className="gig-card">
              <div className="gig-card-top">
                <Badge>{gig.type}</Badge>
                {gig.local && <span className="local-pill">+LOCAL</span>}
              </div>
              <p className="event-date">{gig.date}</p>
              <h3>{gig.title}</h3>
              <div className="card-footer">
                <strong>{gig.price}</strong>
                <Button href="#tickets" variant="secondary">Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Utility() {
  const tools = [
    { title: 'Ticket sales', text: 'Each gig gets a proper event page, ticket button, age guidance, support slots and social share image.', icon: 'TICKET' },
    { title: 'Order drinks to table', text: 'QR/table order flow for selected nights, starting with simple specials before full POS integration.', icon: 'DRINKS' },
    { title: 'Merch store', text: 'Venue tees, patches, event merch and limited-run Cheer Up Goth products.', icon: 'MERCH' },
    { title: 'Performer funnel', text: 'A clear application journey for bands, comedians and odd formats that suit the room.', icon: 'APPLY' },
  ]

  return (
    <section id="tickets" className="section">
      <div className="section-inner">
        <SectionTitle eyebrow="Revenue tools" title="Make the website useful">
          The site should not just show information. It should sell, capture interest and reduce admin.
        </SectionTitle>
        <div className="tool-grid">
          {tools.map((tool) => (
            <Card key={tool.title} className="tool-card">
              <span className="tool-icon">{tool.icon}</span>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
            </Card>
          ))}
        </div>
        <div className="ticket-cta">
          <div>
            <p className="eyebrow">Ticket CTA</p>
            <h3>Make every listing one click from a booking decision.</h3>
          </div>
          <Button href="#contact">Reserve a spot</Button>
        </div>
      </div>
    </section>
  )
}

function Drinks() {
  return (
    <section id="drinks" className="section section-dark">
      <div className="section-inner">
        <SectionTitle eyebrow="Bar sales" title="Drinks menu with a purpose">
          Start with featured specials and table order enquiry. Add full POS later if the pilot proves useful.
        </SectionTitle>
        <div className="drink-grid">
          {drinks.map((drink) => (
            <Card key={drink.name} className="drink-card">
              <Badge>{drink.tag}</Badge>
              <h3>{drink.name}</h3>
              <p>{drink.desc}</p>
              <div className="card-footer">
                <strong>{drink.price}</strong>
                <Button href="#contact">Add</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Merch() {
  return (
    <section id="merch" className="section">
      <div className="section-inner">
        <SectionTitle eyebrow="Merchandise" title="Small store, real margin">
          A basic shop page can start with enquiry/pre-order buttons, then move to proper checkout later.
        </SectionTitle>
        <div className="merch-grid">
          {merch.map((item) => (
            <Card key={item.name} className="merch-card">
              <div className="merch-image">
                <img src={item.image} alt={`${item.name} placeholder mockup`} />
              </div>
              <div className="merch-copy">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="card-footer">
                  <strong>{item.price}</strong>
                  <Button href="#contact" variant="secondary">Pre-order</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheerUpGoth() {
  return (
    <section id="cheer-up-goth" className="section section-dark spotlight-section">
      <div className="section-inner">
        <SectionTitle eyebrow="Tuesday pilot event" title="Cheer Up Goth">
          A hosted comedy night that uses Trillians as the natural home for dark humour,
          alt culture and social-first clips.
        </SectionTitle>
        <div className="split-grid">
          <Card className="application-card">
            <Badge>Performer funnel</Badge>
            <h3>Comedians apply here</h3>
            <p>
              This button would link to a Microsoft Form collecting set length, clips, Tuesday
              availability, fee/travel needs and filming permissions.
            </p>
            <ol className="step-list">
              {bookingSteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <Button href="#apply">Apply to Perform</Button>
          </Card>
          <div className="mini-card-grid">
            {[
              { title: 'Host-led, low risk', text: 'Colin opens, links acts, runs short audience bits and keeps the night moving without needing to carry a full show.' },
              { title: '2-3 comedy acts', text: 'Short sets keep the night fast, varied and friendly for new audiences on a Tuesday.' },
              { title: 'Social content capture', text: 'Clips, performer cards, outfit shots, audience confessions and recap reels build the brand.' },
              { title: 'The Joker', text: '50p from each special drink goes into the performer pot, making the recurring joke financially useful.' },
            ].map((item) => (
              <Card key={item.title} className="mini-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WrongChannel() {
  return (
    <section id="wrong-channel" className="section">
      <div className="section-inner wrong-channel">
        <div>
          <p className="eyebrow">The Wrong Channel</p>
          <h2>Cult screens, strange hosts, stranger clips.</h2>
          <p>
            A flexible programming page for offbeat video nights, themed screenings, live reactions
            and audience-led oddities that can sit beside the gig calendar without confusing the
            core music offering.
          </p>
          <div className="wrong-channel-tags">
            <span>Cult clips</span>
            <span>Live hosts</span>
            <span>Theme nights</span>
            <span>Social edits</span>
          </div>
        </div>
        <div className="screen-mockup" aria-label="The Wrong Channel placeholder artwork">
          <img src="/images/shows/show-placeholder.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

function PerformerCta() {
  return (
    <section id="apply" className="performer-cta">
      <div>
        <p className="eyebrow">Performer application CTA</p>
        <h2>Bands, comics and odd formats can pitch the room.</h2>
        <p>Capture act name, links, preferred dates, set length, production notes and availability before the inbox thread starts.</p>
      </div>
      <Button href="#contact" variant="secondary">Start an application</Button>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="section-inner contact-grid">
        <div>
          <p className="eyebrow">Contact and location</p>
          <h2>Find us, book us, message us.</h2>
          <div className="contact-details">
            <p><strong>Address</strong> Princess Square, Newcastle upon Tyne, NE1 8ER</p>
            <p><strong>Hours</strong> Mon-Wed 15:00-23:00, Thu 12:00-23:00, Fri/Sat late</p>
            <p><strong>Email</strong> info@trilliansnewcastle.co.uk</p>
          </div>
          <div className="social-row">
            <Button href="#contact" variant="secondary">Facebook</Button>
            <Button href="#contact" variant="secondary">Instagram</Button>
          </div>
        </div>
        <Card className="contact-card">
          <h3>Quick enquiry</h3>
          <form className="contact-form">
            <label>Name<input placeholder="Name" /></label>
            <label>Email<input type="email" placeholder="Email" /></label>
            <label>
              Enquiry type
              <select defaultValue="gig">
                <option value="gig">Gig enquiry</option>
                <option value="comedy">Comedy performer enquiry</option>
                <option value="private">Private booking</option>
                <option value="digital">Website / digital enquiry</option>
              </select>
            </label>
            <label>Message<textarea placeholder="Message" rows="5" /></label>
            <Button href="" type="button">Send enquiry</Button>
          </form>
        </Card>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Trillians Rock Bar</strong>
        <span>Demo concept: modern website, ticketing, drink ordering, merch and Cheer Up Goth event funnel.</span>
      </div>
      <span>Music / Community / Stage</span>
    </footer>
  )
}

export default function TrilliansModernWebsiteDemo() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <WhatsOn />
        <Utility />
        <Drinks />
        <Merch />
        <CheerUpGoth />
        <WrongChannel />
        <PerformerCta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
