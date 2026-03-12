import stylesHome from './Home.module.css';
import BackgroundCanvas from '../../components/BackgroundCanvas';
import Typewriter from 'typewriter-effect';
import { userData } from '../../data/userData';
import { useNavigate } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import SpotifyPlayer from '../../components/SpotifyPlayer';

export default function Home() {

  const navigate = useNavigate();

  return (
    <section className={stylesHome.homeSection}>

      <BackgroundCanvas />

      {/* SPOTIFY FIXO */}
      <SpotifyPlayer
        className={stylesHome.spotifyWrapper}
        linkMusica="https://open.spotify.com/embed/track/6eT7xZZlB2mwyzJ2sUKG6w"
      />

      <div className={stylesHome.contentWrapper}>

        <div className={stylesHome.textContent}>

          <h1 className={stylesHome.devName}>
            {userData.name}
          </h1>

          <div className={stylesHome.interactiveRow}>
            <span>Eu sou, </span>

            <span className={stylesHome.typewriterText}>
              <Typewriter
                options={{
                  strings: [
                    'Python Developer!',
                    'React Developer!',
                    'AI Enthusiast!',
                    'Mineiro! ☕🧀'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
          </div>

          <div className={stylesHome.buttonGroup}>

            <a
              className={stylesHome.a}
              href={userData.curriculo}
              download="Luiz_Gustavo_Curriculo.pdf"
            >
              <button className={stylesHome.btnPrimary}>
                <DownloadIcon fontSize="small" />
                Baixar currículo
              </button>
            </a>

            <button
              className={stylesHome.btnSecondary}
              onClick={() => navigate("/contato")}
            >
              Entrar em contato
              <SendIcon fontSize="small" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}