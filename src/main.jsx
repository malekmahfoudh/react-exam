import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.scss'
import quoteReducer from './reducers/quotesReducer'
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore(
  quoteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
