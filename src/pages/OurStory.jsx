import { Link } from 'react-router-dom'
import polaroid1 from '../assets/storyMain.jpeg'
import polaroid2 from '../assets/Our.jpeg'
import polaroid3 from '../assets/OurStory.jpeg'
 

export default function OurStory() {
  return (
    <main style={{ background: '#fff' }}>

      {/* ── SECTION 1: First Polaroid Photo ── */}
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5rem 2rem 2rem',
        background: '#fff',
      }}>
        <div
          className="polaroid"
          style={{
            transform: 'rotate(-2deg)',
            maxWidth: '520px',
            width: '100%',
          }}
        >
          {polaroid1 ? (
            <img
              src={polaroid1}
              alt="Jenny and Jason"
              style={{ width: '100%', display: 'block', aspectRatio: '1/1', objectFit: 'cover' }}
            />
          ) : (
            /* TODO: Replace with real image once imported */
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              backgroundColor: '#ccd4d8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              color: '#888',
              fontSize: '0.9rem',
            }}>
              📷 polaroid1 import karein
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 2: Story Title & Text ── */}
      <section style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '4rem 2rem',
        background: '#fff',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          fontWeight: 400,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--color-dark)',
        }}>
          WHERE THE WILD THINGS WED
        </h2>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
          fontWeight: 300,
          lineHeight: 1.75,
          color: 'var(--color-dark)',
        }}>
          We met at an art walk in Seattle, literally bumping into each
          other. We started hiking together, a lot. We both love the PNW,
          the mountains, the coast, everything. We'd be out on trails, just
          hanging out, talking around a fire. It clicked. We were on the
          same wavelength. One time, we were hiking and I complained
          about my boots and Jenny just stopped and started tying my
          laces for me. That's when I knew. It wasn't some grand gesture. It
          was just…us.
        </p>
      </section>

      {/* ── SECTION 3: Two Polaroids Scattered ── */}
      <section style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '2rem 2rem 1rem',
        minHeight: '420px',
        background: '#fff',
        gap: '0',
      }}>
        {/* Back polaroid (dark one) */}
        <div
          className="polaroid"
          style={{
            transform: 'rotate(-5deg) translateX(80px) translateY(20px)',
            maxWidth: '320px',
            width: '38%',
            zIndex: 1,
          }}
        >
          {polaroid2 ? (
            <img
              src={polaroid2}
              alt="Memory"
              style={{ width: '100%', display: 'block', aspectRatio: '1/1', objectFit: 'cover' }}
            />
          ) : (
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              backgroundColor: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              color: '#666',
              fontSize: '0.8rem',
            }}>
              📷 polaroid2 import karein
            </div>
          )}
        </div>

        {/* Front polaroid (balloons) */}
        <div
          className="polaroid"
          style={{
            transform: 'rotate(3deg) translateY(-10px)',
            maxWidth: '360px',
            width: '42%',
            zIndex: 2,
          }}
        >
          {polaroid3 ? (
            <img
              src={polaroid3}
              alt="Memory"
              style={{ width: '100%', display: 'block', aspectRatio: '1/1', objectFit: 'cover' }}
            />
          ) : (
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              backgroundColor: '#d4a853',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              color: '#fff',
              fontSize: '0.8rem',
            }}>
              📷 polaroid3 import karein
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 4: Closing Text + RSVP ── */}
      <section style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '4rem 2rem 5rem',
        background: '#fff',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
          fontWeight: 300,
          lineHeight: 1.75,
          color: 'var(--color-dark)',
          marginBottom: '0.75rem',
        }}>
          It feels right to celebrate surrounded by the people who get us.
          We're stoked to start this next chapter with you.
        </p>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
          fontWeight: 300,
          lineHeight: 1.75,
          color: 'var(--color-dark)',
          marginBottom: '3rem',
        }}>
          Onward and upward to the next adventure!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/rsvp" className="btn-cta" style={{ maxWidth: '460px', width: '100%' }}>
            RSVP
          </Link>
        </div>
      </section>

    </main>
  )
}
