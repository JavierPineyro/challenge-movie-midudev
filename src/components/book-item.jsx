import { useDrag } from 'react-dnd'
import { itemTypes } from '../utils/constants'
import { useBook } from '../hooks/useBook'

function BookItem({ id, cover, title }) {

  const { addToReadList } = useBook()

  const [{ opacity, blur }, dragRef] = useDrag({
    type: itemTypes.BOOK,
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        addToReadList({ id: dropResult.id })
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 'opacity-50' : 'opacity-100',
      blur: monitor.isDragging() ? 'blur-xs' : '',
    }),
  })

  return (
    <li
      ref={dragRef}
      className={`flex flex-col cursor-grab transition-colors bg-neutral-800 ${blur} ${opacity}`}>
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
