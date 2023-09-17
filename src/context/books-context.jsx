import { createContext, useEffect, useState } from 'react'
import { api } from '../mocks/books'
import { onReadListChange, saveInStorage } from '../utils'
import { useMemo } from 'react'

export const BooksContext = createContext({
  books: [],
  readList: [],
  genre: '',
  pages: 0,
  maxPages: 0,
  ListOfGenres: [],
  updateBooks: () => [],
  updateGenre: () => '',
  updatePages: () => 0,
  updateReadList: () => [],
  onSelectChange: () => '',
  onRangeChange: () => 0,
})

export const AppProvider = ({ children }) => {
  const [books, updateBooks] = useState([])
  const [genre, updateGenre] = useState('')
  const [pages, updatePages] = useState(0)
  const [readList, updateReadList] = useState([])

  const onSelectChange = ({ genre }) => updateGenre(genre)
  const onRangeChange = ({ value }) => updatePages(value)

  useEffect(() => {
    const booksList = JSON.parse(window.localStorage.getItem('books') ?? '[]')

    if (!booksList || booksList.length === 0) {
      api.books.getAll().then(data => {
        saveInStorage('books', data)
        updateBooks(data)
      })
    } else {
      updateBooks(booksList)
    }
  }, [])

  useEffect(() => {
    const unsubscribeFn = onReadListChange(updateReadList)
    return () => unsubscribeFn()
  }, [])

  const maxPages = useMemo(() => {
    return Math.max(...books.map(item => item.pages))
  }, [books])

  const ListOfGenres = useMemo(() => {
    return Array.from(new Set(books.map(book => book.genre)))
  }, [books])

  return (
    <BooksContext.Provider
      value={{
        books,
        genre,
        pages,
        readList,
        maxPages,
        ListOfGenres,
        updateGenre,
        updatePages,
        updateReadList,
        updateBooks,
        onSelectChange,
        onRangeChange,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
