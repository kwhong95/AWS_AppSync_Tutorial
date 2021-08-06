import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AWSAppSyncClient, AUTH_TYPE } from "aws-appsync"
import awsmobile from './aws-exports'
import { ApolloProvider } from "react-apollo"
import { Rehydrated } from "aws-appsync-react"
import 'antd/dist/antd.css'

const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: awsmobile.aws_appsync_authenticationType as AUTH_TYPE | any,
    apiKey: awsmobile.aws_appsync_apiKey
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Rehydrated>
        <App />
      </Rehydrated>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
