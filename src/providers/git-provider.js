import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GitHubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

function GitProvider({ children }) {
  const [gitHub, setGitHub] = useState({
    hasUser: false,
    loading: false,
    user: {
      login: undefined,
      name: undefined,
      avatar_url: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      bio: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  function getUser(userName) {
    setGitHub((prevState) => ({ ...prevState, loading: !prevState.loading }));

    api
      .get(`users/${userName}`)
      .then(
        ({
          data: {
            login,
            name,
            avatar_url,
            html_url,
            blog,
            company,
            location,
            bio,
            followers,
            following,
            public_gists,
            public_repos,
          },
        }) => {
          setGitHub((prevState) => ({
            ...prevState,
            hasUser: true,
            user: {
              login: login,
              name: name,
              avatar_url: avatar_url,
              html_url: html_url,
              blog: blog,
              company: company,
              location: location,
              bio: bio,
              followers: followers,
              following: following,
              public_gists: public_gists,
              public_repos: public_repos,
            },
          }));
        }
      )
      .finally(() => {
        setGitHub((prevState) => ({ ...prevState, loading: !prevState.loading }));
      });
  }

  const contextValue = {
    gitHub,
    getUser: useCallback((userName) => getUser(userName), []),
  };

  return <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>;
}

export default GitProvider;
