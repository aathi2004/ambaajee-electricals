import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import ArrowButton from './ArrowButton.jsx'
import { industries } from '../data/index.js'

const perPage = 3

const IndustriesWeServe = () => {
  const [page, setPage] = useState(0)
  const [mobileIdx, setMobileIdx] = useState(0)
  const totalPages = Math.ceil(industries.length / perPage)

  const desktopVisible = Array.from({ length: perPage }, (_, i) =>
    industries[(page * perPage + i) % industries.length]
  )

  return (
    <section className="py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Reliable Supply for Every Sector's Demands"
        />

        {/* Desktop: 3-column */}
        <div className="hidden md:flex items-start gap-4">
          <div className="flex items-center" style={{ paddingTop: 120 }}>
            <ArrowButton onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)} direction="left" />
          </div>
          <div className="grid grid-cols-3 gap-5 flex-1">
            {desktopVisible.map((ind, i) => (
              <div key={`${page}-${i}`} className="carousel-item bg-gray-50 border border-gray-100">
                <img src={ind.img} alt={ind.label} className="w-full object-cover" style={{ height: 240 }} />
                <div className="p-5">
                  <h3 className="font-bold text-[19px] text-gray-900 mb-2 leading-snug">{ind.label}</h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center" style={{ paddingTop: 120 }}>
            <ArrowButton onClick={() => setPage((p) => (p + 1) % totalPages)} direction="right" />
          </div>
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${i === page ? 'bg-brand-red w-6' : 'bg-gray-300 w-2'}`}
            />
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <div className="carousel-item mb-5 bg-gray-50 border border-gray-100">
            <img src={industries[mobileIdx].img} alt={industries[mobileIdx].label}
              className="w-full object-cover" style={{ height: 200 }} />
            <div className="p-4">
              <h3 className="font-bold text-[17px] text-gray-900 mb-2">{industries[mobileIdx].label}</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">{industries[mobileIdx].desc}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <ArrowButton onClick={() => setMobileIdx((i) => (i - 1 + industries.length) % industries.length)} direction="left" />
            <span className="text-gray-400 text-sm">{mobileIdx + 1} / {industries.length}</span>
            <ArrowButton onClick={() => setMobileIdx((i) => (i + 1) % industries.length)} direction="right" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesWeServe
