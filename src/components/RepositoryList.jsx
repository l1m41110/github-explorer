const repositoryName = 'unform2';

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Reposiroty List</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Go to Repo</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="">Go to Repo</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="">Go to Repo</a>
        </li>
      </ul>
    </section>
  )
}
