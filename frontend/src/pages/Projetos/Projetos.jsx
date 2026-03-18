import { useEffect, useState, useCallback } from "react";
import styles from "./Projetos.module.css";
import { userData } from "../../data/userData.js";
import BackgroundCanvas from "../../components/BackgroundCanvas.jsx";
import SpotifyPlayer from "../../components/SpotifyPlayer.jsx";

import portfolioImg from "../../assets/gitPortifolio.gif";
import readmeGit from "../../assets/readmeGit.gif";
import emailEstoque from "../../assets/emailEstoque.gif";
import sensorfix from "../../assets/sensor-fix.gif";

const repoImages = {
  Portifolio: portfolioImg,
  LuizFagundesT: readmeGit,
  "alerta-deposito-incorreto": emailEstoque,
  "Sensor-fix-Ti2": sensorfix,
};

// ✏️ REPOS EM DESTAQUE
const featuredRepos = [
  "Portifolio",
  "LuizFagundesT",
  "alerta-deposito-incorreto",
];

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function buscarRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userData.githubName}/repos`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
              Accept: "application/vnd.github+json",
            },
          },
        );

        const data = await response.json();

        const filtrados = data
          .filter((repo) => !repo.fork && repo.visibility === "public")
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setRepos(filtrados);

        const destaque = featuredRepos
          .map((name) => filtrados.find((r) => r.name === name))
          .filter(Boolean);

        setFeatured(destaque);
      } catch (error) {
        console.error(error);
      }
    }

    buscarRepos();
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? featured.length - 1 : c - 1));
  }, [featured.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === featured.length - 1 ? 0 : c + 1));
  }, [featured.length]);

  function hasCustomImage(repo) {
    return !!repoImages[repo.name];
  }

  function RepoTemplate({ repo }) {
    return (
      <div className={styles.repoTemplate}>
        <span className={styles.repoTemplateBadge}>Projeto GitHub</span>
        <h3 className={styles.repoTemplateTitle}>{repo.name}</h3>
        <p className={styles.repoTemplateDesc}>
          {repo.description || "Projeto sem descrição disponível."}
        </p>

        <div className={styles.repoTemplateMeta}>
          <span>{repo.language || "N/A"}</span>
          <span>⭐ {repo.stargazers_count}</span>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.projetos}>
      <BackgroundCanvas />

      <h1 className={styles.h1}>Meus projetos</h1>
      <p>Veja aqui um pouco dos meus projetos!</p>

      <div className={styles.SpotifyPlayerContainer}>
        <SpotifyPlayer linkMusica="https://open.spotify.com/embed/track/2wtnWkmyE2ivwmDyVfJ8N5?utm_source=generator&theme=0" />
      </div>

      {/* ── CARROSSEL ── */}
      {featured.length > 0 && (
        <div className={styles.carrosselWrapper}>
          <h2 className={styles.carrosselTitle}>
            <span className={styles.destaqueBadge}>✦ Destaque</span>
          </h2>

          <div className={styles.carrossel}>
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={prev}
              aria-label="Anterior"
            >
              ‹
            </button>

            {featured.map((repo, i) => (
              <div
                key={repo.id}
                className={`${styles.featuredCard} ${
                  i === current ? styles.featuredActive : styles.featuredHidden
                }`}
              >
                <div className={styles.featuredImage}>
                  {hasCustomImage(repo) ? (
                    <img src={repoImages[repo.name]} alt={repo.name} />
                  ) : (
                    <RepoTemplate repo={repo} />
                  )}
                  <div className={styles.featuredOverlay} />
                </div>

                <div className={styles.featuredContent}>
                  <h3 className={styles.featuredName}>{repo.name}</h3>
                  <p className={styles.featuredDesc}>
                    {repo.description || "Sem descrição disponível."}
                  </p>

                  <div className={styles.featuredMeta}>
                    {repo.language && (
                      <span className={styles.language}>{repo.language}</span>
                    )}
                    <span className={styles.stars}>
                      ⭐ {repo.stargazers_count}
                    </span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.featuredButton}
                  >
                    Ver projeto →
                  </a>
                </div>
              </div>
            ))}

            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={next}
              aria-label="Próximo"
            >
              ›
            </button>
          </div>

          <div className={styles.dots}>
            {featured.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── GRID DE CARDS ── */}
      <div className={styles.grid}>
        {repos.map((repo) => (
          <div key={repo.id} className={styles.card}>
            <div className={styles.image}>
              {hasCustomImage(repo) ? (
                <img src={repoImages[repo.name]} alt={repo.name} />
              ) : (
                <RepoTemplate repo={repo} />
              )}
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