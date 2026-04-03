import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import ArrowButton from './ArrowButton.jsx'
import { whyBanners } from '../data/index.js'

const WhyChooseUs = () => {
  const [start, setStart] = useState(0)
  const n = whyBanners.length
  const prev = () => setStart((s) => (s - 1 + n) % n)
  const next = () => setStart((s) => (s + 1) % n)
  const desktopVisible = [0, 1, 2].map((i) => whyBanners[(start + i) % n])

  return (
    <section className="py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Genuine Brands. Bulk Stock. Site-Ready Delivery."
        />

        {/* Desktop: 3 visible — fixed height, object-top so title text shows */}
        <div className="hidden md:flex items-center gap-4">
          <ArrowButton onClick={prev} direction="left" />
          <div className="grid grid-cols-3 gap-6 flex-1">
            {desktopVisible.map((banner, i) => (
              <div key={i} className="rounded overflow-hidden">
                <img
                  src={banner.img}
                  alt={banner.title}
                  className="w-full object-cover object-top block"
                  style={{ height: 380 }}
                />
              </div>
            ))}
          </div>
          <ArrowButton onClick={next} direction="right" />
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-6">
          {whyBanners.map((_, i) => (
            <button key={i} onClick={() => setStart(i)}
              className={`h-2 rounded-full transition-all ${i === start ? 'bg-brand-red w-6' : 'bg-gray-300 w-2'}`}
            />
          ))}
        </div>

        {/* Mobile: natural aspect ratio — no crop, full image visible */}
        <div className="md:hidden">
          <div className="rounded overflow-hidden mb-5">
            <img
              src={whyBanners[start].img}
              alt={whyBanners[start].title}
              className="w-full block"
              style={{ height: 'auto' }}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <ArrowButton onClick={prev} direction="left" />
            <span className="text-gray-400 text-sm">{start + 1} / {n}</span>
            <ArrowButton onClick={next} direction="right" />
          </div>
        </div>

        <div className="flex justify-center mt-4 md:mt-10">
          <a href="#"
            className="bg-brand-red text-white font-semibold text-[14px] md:text-[15px] px-10 py-3.5 hover:bg-brand-red-dark transition-colors rounded-sm">
            Download Our Brochure
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
