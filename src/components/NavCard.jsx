import { Link } from 'react-router-dom'

export default function NavCard({
  to = null,
  image = null,
  label = '',
  bgColor = '#555',
}) {
  const inner = (
    <>
      {image ? (
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover block"
        />
      ) : (
        <div className="w-full h-full" style={{ backgroundColor: bgColor }} />
      )}

      <span className="absolute inset-0 flex items-center justify-center font-serif uppercase tracking-[0.18em] text-white text-2xl underline underline-offset-[6px] font-light pointer-events-none">
        {label}
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="relative overflow-hidden block w-1/2 h-full">
        {inner}
      </Link>
    )
  }

  return (
    <div className="relative overflow-hidden block w-1/2 h-full cursor-default">
      {inner}
    </div>
  )
}