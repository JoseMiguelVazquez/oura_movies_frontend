import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
