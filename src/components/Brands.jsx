import SectionHeader from './SectionHeader.jsx'
import { brands } from '../assets/images.js'

const doubled = [...brands, ...brands]

const Brands = () => {
  return (
    <section className="py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 mb-8 md:mb-12">
        <SectionHeader title="Brands" />
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-10 md:mx-14 flex-shrink-0"
              style={{ minWidth: 160, height: 100 }}
            >
              <img
                src={src}
                alt={`Brand ${(i % brands.length) + 1}`}
                className="object-contain"
                style={{ maxHeight: 85, maxWidth: 210 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
