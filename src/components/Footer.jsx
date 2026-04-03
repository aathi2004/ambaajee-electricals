const Footer = () => {
  return (
    <footer className="py-6 md:py-8 bg-white border-t border-gray-100 text-center px-5">
      <p className="text-gray-600 text-[12px] md:text-[13px] mb-1.5">
        © 2026 Sri Ambaajee Electricals - All rights reserved
      </p>
      <p className="text-gray-500 text-[12px] md:text-[13px]">
        Marketed By{' '}
        <a
          href="https://www.profitcast.com/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-red font-medium hover:underline"
        >
          Profitcast
        </a>{' '}
        — Efficient growth. delivered.
      </p>
    </footer>
  )
}

export default Footer
