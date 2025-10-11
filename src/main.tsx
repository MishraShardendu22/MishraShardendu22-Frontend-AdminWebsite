import './index.css'
import App from './app'
import { render } from 'preact'
import { Toaster } from 'react-hot-toast'

render(
  <>
    <App />
    <Toaster position="top-right" />
  </>,
  document.getElementById('app')!
)

