import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { AppProvider } from './context/books-context.jsx'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"

import './index.css'


// npm install use-dark-mode a dependecy to change the theme of the app

ReactDOM.createRoot(document.getElementById('root')).render(
  <DndProvider backend={HTML5Backend}>
    <NextUIProvider disableBaseline="true">
      <AppProvider>
        <App />
      </AppProvider>
    </NextUIProvider>
  </DndProvider>,
)
