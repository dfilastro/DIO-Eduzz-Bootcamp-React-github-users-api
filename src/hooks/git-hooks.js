import { useContext } from 'react';
import { GitHubContext } from '../providers/git-provider';

const useGitHub = () => {
  const { gitHub, getUser, getUserRepos, getUserStarred } = useContext(GitHubContext);

  return { gitHub, getUser, getUserRepos, getUserStarred };
};

export default useGitHub;
