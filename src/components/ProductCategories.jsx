import SectionHeader from './SectionHeader.jsx'
import { categories } from '../data/index.js'

const ProductCategories = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <SectionHeader
          title="Product Categories"
          subtitle="Explore Our Full Range of Certified Electrical Supplies"
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 p-5 md:p-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 md:w-[76px] md:h-[76px] rounded-full border-2 border-brand-red bg-white flex items-center justify-center flex-shrink-0">
                <img src={cat.img} alt={cat.name} className="w-9 h-9 md:w-11 md:h-11 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-[14px] md:text-[16px] text-gray-900 mb-2 leading-snug">{cat.name}</h3>
                <p className="text-gray-600 text-[12px] md:text-[14px] leading-relaxed hidden sm:block">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
