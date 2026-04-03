const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-10 md:mb-12">
      <div className="flex items-center gap-4">
        {/* Bold solid red bar — matches Figma design */}
        <span className="inline-block w-10 h-[5px] bg-brand-red rounded-sm flex-shrink-0" />
        <h2 className="text-[24px] md:text-[32px] font-extrabold text-gray-900 leading-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-gray-600 text-[14px] md:text-[16px] font-semibold sm:text-right max-w-md leading-relaxed pl-14 sm:pl-0">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
