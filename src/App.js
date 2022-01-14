import React from 'react';
import Layout from './components/layout/index';
import Profile from './components/profile/index';
import Repositories from './components/repositories/index';
import useGitHub from './hooks/git-hooks';
import NoSearch from './components/no search/index';

function App() {
  const { gitHub } = useGitHub();
  return (
    <Layout>
      {gitHub.hasUser ? (
        <>
          {gitHub.loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
