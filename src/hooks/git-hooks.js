import { useContext } from 'react';
import { GitHubContext } from '../providers/git-provider';

const useGitHub = () => {
  const { gitHub } = useContext(GitHubContext);

  return { gitHub };
};

export default useGitHub;
