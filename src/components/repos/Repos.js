import React, { useContext} from 'react';
import RepoItem from './RepoItem';
import GitHubContext from '../../context/github/GitHubContext';

const Repos = () => {
  const githubContext = useContext(GitHubContext);
  return githubContext.repos.map(repo => <RepoItem repo={ repo } key={ repo.id } />)
};

export default Repos;