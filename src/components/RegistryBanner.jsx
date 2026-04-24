export default function RegistryBanner({ image = null, fallbackColor = '#6b7554', onGoToRegistry }) {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        height: '62vh',
        minHeight: '420px',
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: image ? 'transparent' : fallbackColor,
      }}
    >
      <div className="absolute inset-0 bg-black/38" />

      <div className="relative z-10 flex flex-col items-center gap-7 max-w-2xl px-8 text-center">
        <h2 className="font-serif font-normal text-white uppercase tracking-[0.28em] text-sm">
          REGISTRY
        </h2>

        <p className="font-serif italic font-light text-white leading-relaxed"
           style={{ fontSize: 'clamp(1.05rem, 2vw, 1.45rem)' }}>
          Your presence is the most cherished gift. Should you wish to
          contribute, we've created a honeymoon registry to help us
          embark on a memorable adventure to the Amalfi Coast.
        </p>

        <button
          onClick={onGoToRegistry}
          className="w-full max-w-md bg-[#e8e3d8] text-[#1a1916] font-serif uppercase tracking-[0.2em] text-sm py-4 rounded-full hover:bg-[#d8d2c4] hover:-translate-y-px transition-all duration-200 cursor-pointer"
        >
          GO TO REGISTRY
        </button>
      </div>
    </section>
  )
}