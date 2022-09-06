import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';
import "./styles/index.scss";
import "./styles/fonts.scss";
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { BrowserRouter as Router } from 'react-router-dom';

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/cl7nvkngc2re501upa47cgf7w/master",
  cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </ApolloProvider>
);