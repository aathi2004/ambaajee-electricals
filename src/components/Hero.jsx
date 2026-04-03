import { hero } from '../assets/images.js'

const Hero = () => {
  return (
    <section>
      {/* Mobile: natural aspect ratio so full image visible */}
      <img
        src={hero}
        alt="One Reliable Source for Everything Your Project Demands"
        className="w-full block md:hidden"
        style={{ height: 'auto' }}
      />
      {/* Desktop: fixed height with object-cover */}
      <img
        src={hero}
        alt="One Reliable Source for Everything Your Project Demands"
        className="w-full object-cover hidden md:block"
        style={{ maxHeight: 600, minHeight: 400 }}
      />
    </section>
  )
}

export default Hero
