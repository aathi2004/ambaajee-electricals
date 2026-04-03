import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import ArrowButton from './ArrowButton.jsx'
import { reviews } from '../data/index.js'

const StarRating = () => (
  <div className="flex justify-center gap-1 mb-5">
    {[1,2,3,4,5].map((s) => (
      <svg key={s} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

const ReviewCard = ({ review }) => (
  <div className="carousel-item text-center px-2 md:px-8">
    <StarRating />
    <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed mb-7">{review.text}</p>
    <p className="font-bold text-gray-900 text-[17px] md:text-[18px]">{review.name}</p>
    <p className="text-gray-500 text-[13px] md:text-[14px] mt-1">{review.role}</p>
  </div>
)

const ClientTestimonials = () => {
  const [start, setStart] = useState(0)
  const n = reviews.length
  const prev = () => setStart((s) => (s - 1 + n) % n)
  const next = () => setStart((s) => (s + 1) % n)
  const desktopVisible = [0, 1].map((i) => reviews[(start + i) % n])

  return (
    <section className="py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <SectionHeader title="Client Testimonials" subtitle="What Our Customers Say" />

        {/* Desktop: 2 visible */}
        <div className="hidden md:flex items-center gap-4">
          <ArrowButton onClick={prev} direction="left" />
          <div className="grid grid-cols-2 gap-16 flex-1">
            {desktopVisible.map((review, i) => (
              <ReviewCard key={`${start}-${i}`} review={review} />
            ))}
          </div>
          <ArrowButton onClick={next} direction="right" />
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setStart(i)}
              className={`h-2 rounded-full transition-all ${i === start ? 'bg-brand-red w-6' : 'bg-gray-300 w-2'}`}
            />
          ))}
        </div>

        {/* Mobile: single */}
        <div className="md:hidden">
          <ReviewCard review={reviews[start]} />
          <div className="flex items-center justify-between mt-6">
            <ArrowButton onClick={prev} direction="left" />
            <span className="text-gray-400 text-sm">{start + 1} / {n}</span>
            <ArrowButton onClick={next} direction="right" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonials
