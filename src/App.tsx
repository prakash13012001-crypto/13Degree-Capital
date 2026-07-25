import './index.css'

const trustStats = [
  { label: 'Years of disciplined investing', value: '12+' },
  { label: 'Clients guided', value: '180+' },
  { label: 'Goals planned', value: '420+' },
  { label: 'Research hours each year', value: '1,000+' },
]

const stayReasons = [
  'No commissions. Only advice.',
  'Evidence-based investing framework.',
  'Personalised planning and goal tracking.',
  'Tax-efficient and direct mutual fund approach.',
  'Behaviour coaching through market cycles.',
  'Quarterly reviews with life-event planning.',
]

const journeySteps = [
  'Discovery Call',
  'Financial Health Check',
  'Goal Mapping',
  'Risk Profiling',
  'Investment Strategy',
  'Portfolio Implementation',
  'Quarterly Review',
  'Annual Review',
  'Legacy Planning',
]

const services = [
  'Investment Advisory',
  'Financial Planning',
  'Retirement Planning',
  'Goal-Based Planning',
  'Tax-Efficient Investing',
  'NRI Advisory',
  'Family Wealth Planning',
  'Insurance Need Analysis',
]

function App() {
  return (
    <main>
      <section className="hero" id="top">
        <p className="eyebrow">13Degree Capital · Fee-only Financial Advisory</p>
        <h1>Helping You Build Wealth, One Decision At A Time.</h1>
        <p className="lead">
          Hand Holding Your Financial Journey with fiduciary, evidence-based advice for
          individuals, families, founders, and business owners.
        </p>
        <div className="actions">
          <a className="button button-primary" href="#book">
            Book Discovery Call
          </a>
          <a className="button button-secondary" href="#philosophy">
            Explore Our Philosophy
          </a>
        </div>
      </section>

      <section className="stats" aria-label="Trust indicators">
        {trustStats.map((stat) => (
          <article key={stat.label} className="card stat-card">
            <p className="stat-value">{stat.value}</p>
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <section id="philosophy" className="section">
        <h2>Protect. Grow. Preserve.</h2>
        <p>
          We believe long-term wealth is built through better behaviour, better decisions,
          discipline, patience, and compounding — not predictions.
        </p>
      </section>

      <section className="section">
        <h2>Why Clients Stay With Us</h2>
        <div className="grid">
          {stayReasons.map((reason) => (
            <article key={reason} className="card">
              {reason}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>We Don&apos;t Just Manage Investments</h2>
        <p>We help you make better financial decisions across every life milestone.</p>
        <ol className="timeline">
          {journeySteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Services</h2>
        <div className="grid">
          {services.map((service) => (
            <article key={service} className="card">
              {service}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Why I Started 13Degree Capital</h2>
        <p>
          I am Prakash G. Sontakke. I started 13Degree Capital to offer transparent,
          commission-free guidance in a market often driven by product sales. Backed by an
          MBA in Finance and NISM qualifications, my mission is to stay beside clients with a
          calm, scientific, and human approach to long-term wealth creation.
        </p>
      </section>

      <section className="section">
        <h2>13Degree Guide</h2>
        <p>
          Our AI learning assistant explains investing, mutual funds, taxation, and planning in
          plain language. It never gives stock tips and always encourages a consultation for
          personalised advice.
        </p>
      </section>

      <section id="book" className="section book">
        <h2>Book a 30-Minute Discovery Call</h2>
        <p>
          Connect with us on Calendly, WhatsApp, or Google Meet and take your next financial
          decision with clarity.
        </p>
        <a className="button button-primary" href="#top">
          Schedule Consultation
        </a>
      </section>

      <footer className="footer">
        <p>
          13Degree Capital · Fee-only fiduciary advisory · Transparent pricing · No hidden
          commissions.
        </p>
        <p>
          Disclaimer: Investments are subject to market risks. Please read all related
          documents carefully before investing.
        </p>
      </footer>
    </main>
  )
}

export default App
