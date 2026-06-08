import './App.css'

const gigs = [
  {
    day: 'Fri',
    date: '14 Jun',
    title: 'Electric Chapel',
    detail: 'Hard rock, classic metal, late-room DJs',
    tag: 'Main stage',
  },
  {
    day: 'Sat',
    date: '15 Jun',
    title: 'Cheer Up Goth Comedy',
    detail: 'Alt comedy downstairs before the bands',
    tag: 'Comedy',
  },
  {
    day: 'Thu',
    date: '20 Jun',
    title: 'The Wrong Channel',
    detail: 'Cult clips, oddball hosts, live reactions',
    tag: 'Screening',
  },
]

const drinks = ['Snakebite', 'House lager', 'Black cherry sour', 'Zero-proof spritz']
const merch = ['Venue tees', 'Patch sets', 'Gig posters', 'Limited drops']

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Trillians home">
          <span className="brand-mark">T</span>
          <span>
            <strong>Trillians</strong>
            <small>Digital demo</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#gig-guide">Gig Guide</a>
          <a href="#drinks">Drinks</a>
          <a href="#shows">Shows</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Newcastle rock bar, reimagined online</p>
            <h1>Live music, late nights, quick tickets and venue culture in one place.</h1>
            <p className="hero-text">
              A deployable concept site for Trillians with gig discovery, ticket prompts,
              at-table ordering ideas, merch, comedy, cult video nights and performer enquiries.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#tickets">Book tickets</a>
              <a className="button button-secondary" href="#apply">Play here</a>
            </div>
          </div>
          <div className="hero-media" role="img" aria-label="Illustrated Trillians stage atmosphere">
            <div className="stage-card">
              <span className="live-pill">Live tonight</span>
              <h2>Doors 7:30</h2>
              <p>Rock, metal, alternative and comedy nights under one roof.</p>
            </div>
          </div>
        </section>

        <section className="section" id="gig-guide">
          <div className="section-heading">
            <p className="eyebrow">What’s On / Gig Guide</p>
            <h2>Fast scanning for upcoming nights</h2>
          </div>
          <div className="gig-list">
            {gigs.map((gig) => (
              <article className="gig-card" key={gig.title}>
                <div className="gig-date">
                  <span>{gig.day}</span>
                  <strong>{gig.date}</strong>
                </div>
                <div>
                  <span className="tag">{gig.tag}</span>
                  <h3>{gig.title}</h3>
                  <p>{gig.detail}</p>
                </div>
                <a href="#tickets" aria-label={`Tickets for ${gig.title}`}>Tickets</a>
              </article>
            ))}
          </div>
        </section>

        <section className="ticket-cta" id="tickets">
          <div>
            <p className="eyebrow">Ticket CTA</p>
            <h2>Turn interest into a booking before the scroll goes cold.</h2>
          </div>
          <a className="button button-primary" href="#contact">Reserve a spot</a>
        </section>

        <section className="feature-grid" id="drinks">
          <article className="feature-panel drinks-panel">
            <p className="eyebrow">Drinks ordering concept</p>
            <h2>Order from the table, collect when ready.</h2>
            <p>
              A mock mobile-first flow for scanning a table QR, choosing venue favourites,
              and getting a clear pickup status.
            </p>
            <div className="menu-chips">
              {drinks.map((drink) => <span key={drink}>{drink}</span>)}
            </div>
          </article>
          <article className="feature-panel merch-panel">
            <p className="eyebrow">Merch concept</p>
            <h2>Keep the night alive after last orders.</h2>
            <p>
              A simple merch shelf for shirts, patches and posters, designed to connect
              directly from event pages.
            </p>
            <div className="merch-row">
              {merch.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        </section>

        <section className="section split-section" id="shows">
          <article>
            <p className="eyebrow">Cheer Up Goth Comedy</p>
            <h2>Comedy for the beautifully gloomy.</h2>
            <p>
              A dedicated show block gives the night its own identity, highlights the next date
              and makes it easy to cross-promote with gig listings.
            </p>
          </article>
          <article>
            <p className="eyebrow">The Wrong Channel</p>
            <h2>Cult screens, strange hosts, stranger clips.</h2>
            <p>
              A flexible format section for video nights, themed events and offbeat programming
              that sits naturally beside live music.
            </p>
          </article>
        </section>

        <section className="apply-band" id="apply">
          <div>
            <p className="eyebrow">Performer application CTA</p>
            <h2>Bands, comics and odd formats can pitch the room.</h2>
            <p>Capture essentials first: act name, links, preferred dates and production notes.</p>
          </div>
          <a className="button button-secondary" href="#contact">Apply to perform</a>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact form mockup</p>
            <h2>One form for bookings, table questions and performer enquiries.</h2>
          </div>
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Enquiry type
              <select name="type" defaultValue="tickets">
                <option value="tickets">Tickets and tables</option>
                <option value="performer">Performer application</option>
                <option value="merch">Merch</option>
                <option value="general">General</option>
              </select>
            </label>
            <label className="full-span">
              Message
              <textarea name="message" rows="5" placeholder="Tell us what you need" />
            </label>
            <button className="button button-primary full-span" type="button">Send mock enquiry</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
