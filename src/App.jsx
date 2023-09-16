import { Divider } from '@nextui-org/divider'
import BookList from './components/book-list'
import Filters from './components/filters'
import Footer from './components/footer'
import Title from './components/title'
import Container from './components/container'

function App() {
  return (
    <Container>
      <Title>bookitos</Title>
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
    </Container>
  )
}

export default App
