import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Apollo
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({ uri: 'hhtp://localhost:300/graphql' })

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
