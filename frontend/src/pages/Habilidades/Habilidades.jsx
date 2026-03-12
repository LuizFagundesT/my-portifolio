import styles from './Habilidades.module.css';
import BackgroundCanvas from '../../components/BackgroundCanvas';
import { useTranslation } from "react-i18next";
import SpotifyPlayer from '../../components/SpotifyPlayer';

export default function Habilidades() {

  const { t } = useTranslation();
  const skills = [
  { nome: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
  { nome: "NodeJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
  { nome: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
  { nome: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
  { nome: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},
  { nome: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
  { nome: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
  { nome: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
  { nome: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"},
  { nome: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"},
  { nome: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
  { nome: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
  { nome: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
  { nome: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},
  { nome: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"}
];

  return (
    <section className={styles.habilidadesSection}>
      <BackgroundCanvas />

      <div className={styles.container}>
        <h1 className={styles.title}>{t("skills.title")}</h1>
        <p className={styles.subtitle}>
            {t("skills.text")}
        </p>
        <div className={styles.SpotifyPlayerContainer}>
                      <SpotifyPlayer
                          linkMusica="https://open.spotify.com/embed/track/2Z8WuEywRWYTKe1NybPQEW?utm_source=generator&theme=0"
                      />
                  </div>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <img src={skill.icon} alt={skill.nome} />
              </div>
              <span>{skill.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}