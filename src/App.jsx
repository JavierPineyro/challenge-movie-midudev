import { Divider } from '@nextui-org/divider'
import BookList from './components/book-list'
import Filters from './components/filters'
import Footer from './components/footer'
import Title from './components/title'
import Container from './components/container'
import { useDrop } from 'react-dnd'
import { itemTypes } from './utils/constants'

function App() {

  const [{ droppable, canDrop, border }, dropRef] = useDrop({
    accept: itemTypes.BOOK,
    drop: (item) => item,
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      droppable: monitor.canDrop() ? 'border-white-600/10' : '',
      border: monitor.isOver() ? 'border-green-600' : '',
    }),
  })

  return (
    <Container>
      <header className='flex items-center mb-2'>
        <Title>bookitos</Title>
        <div
          ref={dropRef}
          className={`flex justify-center items-center  text-xl font-extrabold leading-none tracking-tight w-56 px-8 py-2 border-dashed border-2 ${droppable} ${border}`}>
          {canDrop ? 'add to read list' : 'drag a book'}
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
