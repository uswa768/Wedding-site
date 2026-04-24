import { useState } from 'react'

// =====================================================================
// IMAGE IMPORTS — aap yahan apni images import karein
// =====================================================================
// import rsvpBg from '../assets/rsvp-bg.jpg'   // Koi bhi atmospheric photo use kar saktay hain

const rsvpBg = null

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    dietary: '',
    song: '',
    message: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Yahan apna form submission logic add karein (e.g., EmailJS, Formspree, etc.)
    console.log('RSVP submitted:', form)
    setSubmitted(true)
  }

  return (
    <main style={{ background: '#fff' }}>

      {/* ── Hero Banner ── */}
      <section
        className="hero-image-section"
        style={{
          height: '45vh',
          minHeight: '320px',
          backgroundImage: rsvpBg ? `url(${rsvpBg})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: rsvpBg ? 'transparent' : 'var(--color-charcoal)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }} />
        <div className="hero-overlay-text" style={{ flexDirection: 'column', gap: '0.75rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#fff',
          }}>
            RSVP
          </h1>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
            fontWeight: 300,
            color: '#fff',
            opacity: 0.9,
          }}>
            Please respond by August 1, 2025
          </p>
        </div>
      </section>

      {/* ── Form Section ── */}
      {!submitted ? (
        <section style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '5rem 2rem 6rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            fontWeight: 300,
            textAlign: 'center',
            color: 'var(--color-charcoal)',
            marginBottom: '3.5rem',
            lineHeight: 1.7,
          }}>
            We can't wait to celebrate with you. Please fill in the details below
            so we can make sure everything is just right.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label style={labelStyle}>Full Name</label>
            <input
              className="rsvp-input"
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <label style={labelStyle}>Email Address</label>
            <input
              className="rsvp-input"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* Attending */}
            <label style={labelStyle}>Will you be attending?</label>
            <select
              className="rsvp-select"
              name="attending"
              value={form.attending}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Please select...</option>
              <option value="yes">Joyfully accepts</option>
              <option value="no">Regretfully declines</option>
            </select>

            {/* Number of guests */}
            {form.attending === 'yes' && (
              <>
                <label style={labelStyle}>Number of Guests (including yourself)</label>
                <select
                  className="rsvp-select"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 — Just me</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                {/* Dietary */}
                <label style={labelStyle}>Dietary Requirements or Allergies</label>
                <input
                  className="rsvp-input"
                  type="text"
                  name="dietary"
                  placeholder="None, vegetarian, gluten-free, etc."
                  value={form.dietary}
                  onChange={handleChange}
                />

                {/* Song request */}
                <label style={labelStyle}>Song Request for the Dance Floor 🎵</label>
                <input
                  className="rsvp-input"
                  type="text"
                  name="song"
                  placeholder="What song will get you dancing?"
                  value={form.song}
                  onChange={handleChange}
                />
              </>
            )}

            {/* Message */}
            <label style={labelStyle}>A Note for Jenny & Jason (optional)</label>
            <textarea
              className="rsvp-input"
              name="message"
              placeholder="Share your wishes, a memory, or anything you'd like..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              style={{ resize: 'vertical' }}
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <button
                type="submit"
                className="btn-cta"
                style={{ maxWidth: '460px', width: '100%' }}
              >
                SEND MY RSVP
              </button>
            </div>
          </form>
        </section>
      ) : (
        /* ── Thank You State ── */
        <section style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '6rem 2rem',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '3rem',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            color: 'var(--color-dark)',
          }}>
            J&amp;J
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 300,
            letterSpacing: '0.1em',
            marginBottom: '1.5rem',
            color: 'var(--color-dark)',
          }}>
            {form.attending === 'yes' ? 'We\'ll see you there!' : 'We\'ll miss you!'}
          </h2>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            fontWeight: 300,
            color: 'var(--color-charcoal)',
            lineHeight: 1.7,
          }}>
            {form.attending === 'yes'
              ? `Thank you, ${form.name}. We're so happy you'll be joining us on September 20th. See you at Golden Elm Manor!`
              : `Thank you for letting us know, ${form.name}. You'll be missed — we'll celebrate with you another time!`
            }
          </p>
        </section>
      )}

    </main>
  )
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-serif)',
  fontWeight: 600,
  fontSize: '0.9rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--color-charcoal)',
  marginBottom: '0.25rem',
}
