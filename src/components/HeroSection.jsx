export default function HeroSection({ image = null, fallbackColor = '#8fa39a' }) {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        height: '70vh',
        minHeight: '480px',
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: image ? 'transparent' : fallbackColor,
      }}
    >
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex flex-col items-center gap-7 px-8 text-center">
        <p className="font-serif italic text-white font-light leading-relaxed max-w-xl"
           style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
          With love and gratitude, we invite you to<br />
          share in the joy of our wedding day.
        </p>

        <div className="font-serif font-light text-white leading-loose"
             style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)' }}>
          Saturday, September 20, 2025<br />
          The Golden Elm Manor,<br />
          St. Augustine, New York
        </div>
      </div>
    </section>
  )
}