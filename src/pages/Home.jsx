import { useNavigate } from 'react-router-dom'
import HeroSection    from '../components/HeroSection'
import NavCard        from '../components/NavCard'
import RegistryBanner from '../components/RegistryBanner'
import ourStoryImg from '../assets/handwithring.jpeg'
import detailsImg  from '../assets/Home2.jpeg'
import rsvpImg     from '../assets/Home3.jpeg'
import registryImg from '../assets/Home4.jpeg'

const heroBg     = null
const registryBg = null

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="bg-white">

    
      <section className="bg-white pt-12 pb-15 px-4 h-40 text-center">
        <h1
          className="font-serif font-light tracking-wide text-[#1a1916] leading-none"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)' }}
        >
          JENNY &amp; JASON
        </h1>
      </section>

       
      <HeroSection image={heroBg} fallbackColor="#8fa39a" />

      {/* 3. Cards Row 1 — mt-8 gap hero se */}
      <section className="bg-white mt-8 mb-5 flex justify-center">
        <div className="flex gap-5 h-[620px] w-[80%]">
          <NavCard to="/our-story" image={ourStoryImg} label="OUR STORY"   />
          <NavCard to="/details"   image={detailsImg}  label="THE DETAILS" />
        </div>
      </section>

      <section className="bg-white mb-8 flex justify-center">
        <div className="flex gap-5 h-[620px] w-[80%]">
          <NavCard to="/rsvp" image={rsvpImg}    label="RSVP"     />
          <NavCard            image={registryImg} label="REGISTRY" />
        </div>
      </section>
 
      <RegistryBanner
        image={registryBg}
        fallbackColor="#6b7554"
        onGoToRegistry={() => navigate('/rsvp')}
      />

    </main>
  )
}