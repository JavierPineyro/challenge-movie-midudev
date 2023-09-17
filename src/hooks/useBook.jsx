import { useMemo } from 'react'
import { useGlobalContext } from './useGlobalContext'
import { saveInStorage } from '../utils'

export function useBook() {
  const {
    ListOfGenres,
    genre,
    pages,
    maxPages,
    books,
    readList,
    updateBooks,
    updateReadList,
    onSelectChange,
    onRangeChange
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

  const addToReadList = ({ id }) => {
    const draft = structuredClone(books)

    // Find book in books list
    const bookIndex = draft.findIndex(book => book.ISBN === id)
    const bookToAdd = draft[bookIndex]

    // Add book to read list
    updateReadList(prev => {
      const state = prev.concat(bookToAdd)
      saveInStorage('readList', state)
      return state
    })

    // Remove book from books list
    draft.splice(bookIndex, 1)
    updateBooks(draft)
    saveInStorage('books', draft)

  }

  const removeFromReadList = ({ id }) => {
    const draft = structuredClone(readList)

    // Find book in read list
    const bookIndex = draft.findIndex(book => book.ISBN === id)

    //add book to books list
    const bookToAdd = draft[bookIndex]
    updateBooks(prev => prev.concat(bookToAdd))

    // remove book from read list
    draft.splice(bookIndex, 1)
    updateReadList(() => {
      window.localStorage.setItem('readList', JSON.stringify(draft))
      return draft
    })
  }

  return {
    filteredBooks,
    ListOfGenres,
    genre,
    pages,
    maxPages,
    readList,
    onSelectChange,
    onRangeChange,
    addToReadList,
    removeFromReadList
  }
}
