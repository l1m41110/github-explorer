import { useEffect, useState } from 'react';
import '../styles/repository.scss';
import { RepositoryItem } from './RepositoryItem';

const repo = 'https://api.github.com/orgs/atlassian/repos';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // don't call useEffect without the second parameter to avoid loop
  useEffect(() => {
    fetch(repo).then((res) => res.json().then((data) => setRepositories(data)));
  }, []);

  // we can verify first call empty when useState is set and second call when the github api is fetched
  console.log(repositories);

  return (
    <section className='repository-list'>
      <h1>Atlassian Repository List</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
