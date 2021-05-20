import { RepositoryItem } from './RepositoryItem';

import '../styles/repository.scss';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/l1m41110/github-explorer',
};

export function RepositoryList() {
  return (
    <section className='repository-list'>
      <h1>Reposiroty List</h1>
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
