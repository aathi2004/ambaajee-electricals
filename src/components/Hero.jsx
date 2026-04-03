import { hero } from '../assets/images.js'

const Hero = () => {
  return (
    <section>
      <img
        src={hero}
        alt="One Reliable Source for Everything Your Project Demands"
        className="w-full object-cover block"
        style={{ maxHeight: 600, minHeight: 280 }}
      />
    </section>
  )
}

export default Hero
