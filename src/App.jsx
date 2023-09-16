import { Divider } from '@nextui-org/divider'
import BookList from './components/book-list'
import Filters from './components/filters'
import Footer from './components/footer'
import Title from './components/title'
import Container from './components/container'

function App() {
  return (
    <Container>
      <header className='flex justify-between items-center'>
        <Title>bookitos</Title>
        <div className='flex items-center bg-slate-600 px-4 py-2
        hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out-2'>
          + Read List
        </div>
      </header>
      <section>
        <Filters />
        <Divider className="my-4" />
        <BookList />
      </section>
      <Footer />
    </Container>
  )
}

export default App
