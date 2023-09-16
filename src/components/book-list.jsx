import { useBook } from '../hooks/useBook'
import BookItem from './book-item'
import NoResults from './no-results'

function BookList() {
  const { filteredBooks: books } = useBook()

  return (
    <>
      {books.length === 0 && <NoResults />}
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
        {books.map(({ ISBN, title, cover }) => (
          <BookItem key={ISBN} id={ISBN} title={title} cover={cover} />
        ))}
      </ul>
    </>
  )
}

export default BookList
