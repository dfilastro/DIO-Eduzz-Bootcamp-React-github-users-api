import React from 'react';
import Layout from './components/layout/index';
import Profile from './components/profile/index';
import Repositories from './components/repositories/index';
import useGitHub from './hooks/git-hooks';

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
        <div>Non user searched</div>
      )}
    </Layout>
  );
}

export default App;
