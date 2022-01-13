import React, { createContext, useState } from 'react';

export const GitHubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

function GitProvider({ children }) {
  const [gitHub, setGitHub] = useState({
    user: {
      login: undefined,
      name: 'Diego Filastro',
      publicUrl: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      pubic_repo: 0,
    },
    repositories: [],
    starred: [],
  });

  const contextValue = { gitHub };

  return <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>;
}

export default GitProvider;
