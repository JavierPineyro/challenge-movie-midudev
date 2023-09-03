import { useMemo } from 'react'
import { useGlobalContext } from './useGlobalContext'

export function useBook() {
  const {
    ListOfGenres,
    genre,
    pages,
    maxPages,
    books,
    onSelectChange,
    onRangeChange,
  } = useGlobalContext()

  // Filter books depending on genre and pages
  const filteredBooks = useMemo(() => {
    let draft

    if (!genre) {
      draft = books
    } else {
      draft = books.filter(book => book.genre === genre)
    }

    if (pages !== 0) {
      draft = draft.filter(book => book.pages <= pages)
    }

    return draft
  }, [genre, pages, books])

  return {
    filteredBooks,
    ListOfGenres,
    genre,
    pages,
    maxPages,
    onSelectChange,
    onRangeChange,
  }
}
