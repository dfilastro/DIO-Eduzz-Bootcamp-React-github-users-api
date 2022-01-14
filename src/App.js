import React from 'react';
import Layout from './components/layout/index';
import Profile from './components/profile/index';
import Repositories from './components/repositories/index';
import { GlobalStyle } from './global/resetCSS';
import GitProvider from './providers/git-provider';

function App() {
  return (
    <main>
      <GitProvider>
        <GlobalStyle />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GitProvider>
    </main>
  );
}

export default App;
