import { useBook } from '../hooks/useBook'
import BookItem from './book-item'

function BookList() {
  const { filteredBooks: books } = useBook()

  return (
    <>
      {books.length === 0 && (
        <h3 className="mx-auto text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
          <span className="text-blue-600 dark:text-blue-500">0 </span>Results.
        </h3>
      )}
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
        {books.map(book => (
          <BookItem key={book.ISBN} title={book.title} cover={book.cover} />
        ))}
      </ul>
    </>
  )
}

export default BookList
