import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/app.context'
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  //<React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
          />
          <App />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
