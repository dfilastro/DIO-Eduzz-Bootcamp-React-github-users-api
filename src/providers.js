import React from 'react';
import GitProvider from './providers/git-provider';
import { GlobalStyle } from './global/resetCSS';
import App from './App';

function Providers() {
  return (
    <main>
      <GitProvider>
        <GlobalStyle />
        <App />
      </GitProvider>
    </main>
  );
}

export default Providers;
