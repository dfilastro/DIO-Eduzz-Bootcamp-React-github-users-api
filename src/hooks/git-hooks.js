import { useContext } from 'react';
import { GitHubContext } from '../providers/git-provider';

const useGitHub = () => {
  const { gitHub, getUser } = useContext(GitHubContext);

  return { gitHub, getUser };
};

export default useGitHub;
