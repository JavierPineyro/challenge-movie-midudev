import { Divider } from '@nextui-org/divider'
import BookList from './components/book-list'
import Filters from './components/filters'
import Footer from './components/footer'

function App() {
  return (
    <main className="grid grid-rows-[70px,1fr,60px] min-h-screen max-w-screen-lg m-auto">
      <h1 className="text-2xl py-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
        bookitos 📚
      </h1>
      <section>
        <Filters />
        <div className="flex gap-4 mt-4 h-10 w-[50%] [&>button]:bg-red-400 [&>button]:w-full">
          <button>Books</button>
          <button>Read List</button>
        </div>
        <Divider className="my-4" />
        <BookList />
      </section>
      <Footer />
    </main>
  )
}

export default App
