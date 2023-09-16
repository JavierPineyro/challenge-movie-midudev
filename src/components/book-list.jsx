import { useBook } from '../hooks/useBook'
import BookItem from './book-item'
import NoResults from './no-results'

function BookList() {
  const { filteredBooks: books } = useBook()

  return (
    <>
      {books.length === 0 && <NoResults />}
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
        {books.map(book => (
          <BookItem key={book.ISBN} title={book.title} cover={book.cover} />
        ))}
      </ul>
    </>
  )
}

export default BookList
