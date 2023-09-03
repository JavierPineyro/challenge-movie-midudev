import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { AppProvider } from './context/books-context.jsx'

// npm install use-dark-mode a dependecy to change the theme of the app

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider disableBaseline="true">
    <AppProvider>
      <App />
    </AppProvider>
  </NextUIProvider>,
)
