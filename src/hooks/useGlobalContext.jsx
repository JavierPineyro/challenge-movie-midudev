import { useContext } from 'react'
import { BooksContext } from '../context/books-context'

export const useGlobalContext = () => useContext(BooksContext)
