import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#5a5650] h-20">
      <div className="max-w-6xl mx-auto px-12 h-full flex items-center justify-between">
        
        <Link to="/" className="flex items-center pl-2 gap-3 no-underline">
          <span className="font-serif text-2xl italic text-white tracking-tight">J&J</span>
          <span className="font-serif text-sm italic text-white/85 tracking-wide">June 23rd, 2025</span>
        </Link>

        <div className="flex items-center gap-12 pr-4">
          <NavLink to="/" className="font-serif text-xs uppercase tracking-widest text-white underline underline-offset-4 hover:opacity-70 transition-opacity">Home</NavLink>
          <NavLink to="/our-story" className="font-serif text-xs uppercase tracking-widest text-white underline underline-offset-4 hover:opacity-70 transition-opacity">Our Story</NavLink>
          <NavLink to="/details" className="font-serif text-xs uppercase tracking-widest text-white underline underline-offset-4 hover:opacity-70 transition-opacity">Details</NavLink>
          <NavLink to="/rsvp" className="font-serif text-xs uppercase tracking-widest text-white underline underline-offset-4 hover:opacity-70 transition-opacity">RSVP</NavLink>
        </div>

      </div>
    </nav>
  )
}