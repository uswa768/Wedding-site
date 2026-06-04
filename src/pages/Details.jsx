import { Link } from 'react-router-dom'
import detailsHeroBg from '../assets/about.jpeg' 
import venueImage from '../assets/travelandstay.jpeg' 
import transportImg from '../assets/detail2.png'
 
export default function Details() {
  return (
    <main style={{ background: '#fff' }}>
 
      <section
        className="hero-image-section"
        style={{
          height: '60vh',
          minHeight: '420px',
          backgroundImage: detailsHeroBg ? `url(${detailsHeroBg})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: detailsHeroBg ? 'transparent' : '#7a8a6a',
          
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
        <div className="hero-overlay-text">
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#fff',
          }}>
            THE DETAILS
          </h1>
        </div>
      </section>
 
      <section style={{
        margin: '3rem 2rem',
        background: 'var(--color-olive)',
        borderRadius: '4px',
        padding: '4rem 3rem',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontWeight: 300,
          textAlign: 'center',
          color: '#fff',
          lineHeight: 1.7,
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
        }}>
          We invite you to our wedding at Golden Elm Manor, an enchanting
          place where towering elms meet candlelit pathways. And where our
          next adventure begins.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/rsvp" className="btn-cta btn-cta-light" style={{ maxWidth: '460px', width: '100%' }}>
            RSVP
          </Link>
        </div>
      </section>

    
      {venueImage && (
        <section style={{ width: '100%', maxHeight: '400px', overflow: 'hidden' }}>
          <img
            src={venueImage}
            alt="Venue"
            style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'top' }}
          />
        </section>
      )}
 
      <section style={{
        display: 'flex',
        gap: '0',
        margin: '0 2rem',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexWrap: 'wrap',
      }}>
        {/* Left Card */}
        <div className="details-card" style={{ textAlign: 'center' }}>
          <DetailRow label="Date:" value="Saturday, September 20, 2025" />
          <DetailRow label="Venue:" value="The Golden Elm Manor, St. Augustine, NY" />
          <DetailRow label="Ceremony Begins:" value="4:30 PM" />
          <DetailRow label="Reception:" value="6:00 PM – Midnight" />
        </div>

        {/* Right Card */}
        <div className="details-card" style={{ textAlign: 'center' }}>
          <DetailRow
            label="Musical Guest:"
            value="The Starlight Quartet, followed by a surprise jazz ensemble."
          />
          <DetailRow
            label="Dinner:"
            value="A seasonal farm-to-table menu featuring dishes inspired by our favorite travels."
          />
        </div>
      </section>
 
      <section style={{
        display: 'flex',
        marginTop: '0',
        minHeight: '440px',
        flexWrap: 'wrap',
      }}>
        {/* Text side */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          background: '#f0ede8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 4rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
            fontWeight: 300,
            textAlign: 'center',
            color: 'var(--color-dark)',
            lineHeight: 1.75,
            maxWidth: '420px',
          }}>
            Golden Elm Manor is a 90-minute train ride
            from Grand Central Station, with direct routes
            to St. Augustine. Complimentary shuttles will
            be available from the station to the venue.
          </p>
        </div>

        {/* Image side */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          minHeight: '440px',
          backgroundColor: transportImg ? 'transparent' : '#c8c0b0',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {transportImg ? (
            <img
              src={transportImg}
              alt="Dried flowers"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              color: '#888',
              fontSize: '0.9rem',
            }}>
              📷 transportImg import karein
            </div>
          )}
        </div>
      </section>

    </main>
  )
}

 
function DetailRow({ label, value }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: '1rem',
        letterSpacing: '0.05em',
        color: 'var(--color-dark)',
        marginBottom: '0.3rem',
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 300,
        fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
        color: 'var(--color-dark)',
        lineHeight: 1.5,
      }}>
        {value}
      </p>
    </div>
  )
}
