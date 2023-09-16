import { useDrag } from 'react-dnd'
import { itemTypes } from '../utils/constants'

function BookItem({ id, cover, title }) {

  const [{ isDragging }, dragRef] = useDrag({
    type: itemTypes.BOOK,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? "opacity-50" : "opacity-100"
  const blur = isDragging ? "blur-sm" : ''

  return (
    <li
      ref={dragRef}
      className={`flex flex-col transition-all bg-neutral-800 ${blur} ${opacity}}`}>
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
