import { useEffect, useState } from 'react';
import '../styles/repository.scss';
import { RepositoryItem } from './RepositoryItem';

const repo = 'https://api.github.com/orgs/atlassian/repos';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/l1m41110/github-explorer',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  // don't call useEffect without the second parameter to avoid loop
  useEffect(() => {
    fetch(repo).then((res) => res.json().then((data) => setRepositories(data)));
  }, []);

  // we can verify first call empty when useState is set and second call when the github api is fetched
  console.log(repositories);

  return (
    <section className='repository-list'>
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
