function BookItem({ cover, title }) {
  return (
    <li className="flex  flex-col bg-neutral-800">
      <img
        className="max-h-[380px] aspect-[9/14] object-cover"
        src={cover}
        alt={title}
      />
      <p className="font-medium text-sm px-1 py-2 text-white/80">{title}</p>
    </li>
  )
}

export default BookItem
