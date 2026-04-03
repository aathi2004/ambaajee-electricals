import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import { contactInfo } from '../data/index.js'

const LocationIcon = () => (
  <svg className="w-6 h-6 mt-0.5 flex-shrink-0 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
  </svg>
)
const PhoneIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/>
  </svg>
)
const LandlineIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"/>
    <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd"/>
  </svg>
)

const FIELDS = [
  { name: 'name',    placeholder: 'Name*',         type: 'text'  },
  { name: 'phone',   placeholder: 'Phone Number*', type: 'tel'   },
  { name: 'email',   placeholder: 'Email',         type: 'email' },
  { name: 'service', placeholder: 'Service',       type: 'text'  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = () => {
    if (!form.name || !form.phone) return
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', service: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-12 md:py-16 border-t border-gray-100 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <SectionHeader title="Tell Us What You Need" />
            <p className="text-gray-700 text-[15px] md:text-[16px] mb-8 leading-relaxed -mt-4 md:-mt-6">
              We're just one call or form away. Let's get your materials moving.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <LocationIcon />
                <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon />
                <p className="text-gray-700 text-[14px] md:text-[15px]">{contactInfo.phones.join(' / ')}</p>
              </div>
              <div className="flex items-center gap-4">
                <LandlineIcon />
                <p className="text-gray-700 text-[14px] md:text-[15px]">{contactInfo.landline}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {FIELDS.map(({ name, placeholder, type }) => (
              <input key={name} name={name} type={type} value={form[name]}
                onChange={handleChange} placeholder={placeholder}
                className="w-full border border-gray-200 bg-white px-5 py-4 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors rounded-md"
              />
            ))}
            <button onClick={handleSubmit}
              className={`w-full py-4 font-bold text-[15px] md:text-[16px] text-white transition-colors rounded-md mt-1 ${
                submitted ? 'bg-green-600 cursor-default' : 'bg-brand-red hover:bg-brand-red-dark'
              }`}
            >
              {submitted ? '✓ Details Submitted Successfully!' : 'Submit your details'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
