import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { QueryClientProvider, QueryClient } from 'react-query'

const queyClient = new QueryClient()
ReactDOM.render(
  <QueryClientProvider client={queyClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
)
