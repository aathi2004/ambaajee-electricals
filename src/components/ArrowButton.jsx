const ArrowButton = ({ onClick, direction }) => {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
      className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 text-2xl font-light transition-colors shadow-sm"
    >
      {direction === 'left' ? '‹' : '›'}
    </button>
  )
}

export default ArrowButton
