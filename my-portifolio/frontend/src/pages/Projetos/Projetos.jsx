import { useEffect, useState } from "react";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function buscarRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/LuizFagundesT/repos"
        );
        const data = await response.json();

        const filtrados = data
          .filter((repo) => !repo.fork && repo.visibility === "public")
          .sort(
            (a, b) =>
              new Date(b.created_at) - new Date(a.created_at)
          );

        setRepos(filtrados);
      } catch (error) {
        console.error(error);
      }
    }

    buscarRepos();
  }, []);

  return (
    <section className={styles.projetos}>
      <h1>Meus projetos</h1>
      <p>Veja aqui um pouco dos meus projetos!</p>

      <div className={styles.grid}>
        {repos.map((repo) => (
          <div key={repo.id} className={styles.card}>
            <div className={styles.image}>
              <img
                src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                alt={repo.name}
              />
            </div>

            <div className={styles.content}>
              <h2>{repo.name}</h2>
              <p>{repo.description || "Sem descrição disponível."}</p>

              <div className={styles.info}>
                <span className={styles.language}>
                  {repo.language || "N/A"}
                </span>
                <span>⭐ {repo.stargazers_count}</span>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Ver projeto →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}