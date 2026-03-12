// Sobre.jsx - ATUALIZADO (Sem Typewriter)
import style from "./Sobre.module.css";
import { useTranslation } from "react-i18next";
import BackgroundCanvas from "../../components/BackgroundCanvas";
import minhaFoto from "../../assets/minhaFoto.png";
import React, { useState, useEffect, useRef } from 'react';

import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrabalhoCard from "../../components/TrabalhoCard/TrabalhoCard";
import EstudanteCard from "../../components/EstudanteCard/EstudanteCard";
import SpotifyPlayer from '../../components/SpotifyPlayer';

const CountUp = ({ end, duration = 2000, suffix = "", startAnimating }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // 1. Só começa a animação se a prop 'startAnimating' for true
    // e se ainda não tiver animado.
    if (startAnimating && !hasAnimated) {
      let start = 0;
      // Se o número final for menor que 10, contar mais devagar
      const stepTime = end < 9 ? 100 : Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      setHasAnimated(true); // Garante que a animação só ocorra uma vez
    }
  }, [end, duration, startAnimating, hasAnimated]);

  return <h3>{count.toLocaleString()}{suffix}</h3>;
};


export default function Sobre() {
  const { t } = useTranslation();

  const listaExperienciaProfissional = t("about.experienciaProfissional", { returnObjects: true }) || [];
  const listaExperienciaAcademica = t("about.experienciaAcademica", { returnObjects: true }) || [];

  const progressMock = [
    { name: t("about.academic.software"), value: 60, percentText: "60%" },
    { name: t("about.academic.js"), value: 40, percentText: "40%" },
    { name: t("about.academic.python"), value: 100, percentText: "100%" },
  ];

  const [animateStat, setAnimateStat] = useState({
    projects: false,
    years: false,
    clients: false,
    commits: false,
    coffee: false,
  });

  // Referência para a caixa pai das estatísticas (o que vamos observar)
  const statsBoxRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // 1. Configurar o Intersection Observer (MANTIDO para as estatísticas)
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // 2. Quando a caixa pai ficar visível
        if (entry.isIntersecting) {
          // Define os atrasos progressivos (em milissegundos)
          const delays = {
            projects: 0,
            years: 250,   // +250ms
            clients: 500,  // +250ms
            commits: 750,  // +250ms
            coffee: 1000,  // +250ms
          };

          // Ativa cada animação com o atraso definido
          setTimeout(() => setAnimateStat(prev => ({ ...prev, projects: true })), delays.projects);
          setTimeout(() => setAnimateStat(prev => ({ ...prev, years: true })), delays.years);
          setTimeout(() => setAnimateStat(prev => ({ ...prev, clients: true })), delays.clients);
          setTimeout(() => setAnimateStat(prev => ({ ...prev, commits: true })), delays.commits);
          setTimeout(() => setAnimateStat(prev => ({ ...prev, coffee: true })), delays.coffee);

          observerRef.current.disconnect(); // Para de observar após ativar as animações
        }
      },
      { threshold: 0.3 } // Só anima quando 30% da caixa estiver visível
    );

    // 3. Iniciar a observação na caixa pai
    if (statsBoxRef.current) {
      observerRef.current.observe(statsBoxRef.current);
    }

    // 4. Cleanup function
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section className={style.sobrePage}>
      <BackgroundCanvas />

      <div className={style.container}>
        {/* FOTO, DESCRIÇÃO E PLAYER SPOTIFY (Agrupados e centralizados) */}
        <div className={style.photoDescriptionSection}>
          {/* FOTO E TÍTULO (Mantido o CSS do disco) */}
          <div className={style.photoSection}>
            <div className={style.photoWrapper}>
              <div className={style.photoCircle}>
                <img src={minhaFoto} alt="Foto do dev" />
              </div>
            </div>
            <h1 className={style.mainTitle}>{t("about.mainTitle")}</h1>
            
            {/* VOLTADO PARA TEXTO ESTÁTICO (Sem Typewriter) */}
            <p className={style.description}>
                {t("about.description")}
            </p>
          </div>

          {/* PLAYER DO SPOTIFY (Mantido centralizado) */}
          <div className={style.SpotifyPlayerContainer}>
              <SpotifyPlayer
                  linkMusica="https://open.spotify.com/embed/track/5TRPicyLGbAF2LGBFbHGvO?utm_source=generator"
              />
          </div>
        </div>

        {/* EXPERIÊNCIA E TIMELINES (Mantido) */}
        <div className={style.section}>
          <h2 className={style.sectionTitle}>{t("about.expTitle")}</h2>
          <div className={style.timeline}>
            {listaExperienciaProfissional.map((vaga) => (
              <TrabalhoCard key={vaga.id} vaga={vaga} />
            ))}
          </div>

          <div style={{ margin: "60px 0" }} />
          
          <h2 className={style.sectionTitle}>{t("about.acadTitle")}</h2>
          <div className={style.timeline}>
            {listaExperienciaAcademica.map((experiencia) => (
              <EstudanteCard key={experiencia.id} experiencia={experiencia} />
            ))}
          </div>
        </div>

        {/* INDICADORES (Seção Atualizada com Cascata) */}
        <div className={`${style.section} ${style.indicatorsSection}`}>
          <h2 className={style.sectionTitle}>{t("about.indicatorsTitle")}</h2>

          {/* CAIXA DE ESTATÍSTICAS (Pai que observamos) */}
          <div className={style.statsBox} ref={statsBoxRef}>
            <div className={style.statsHeader}>
              <TrendingUpIcon />
              <span>{t("about.statsTitle")}</span>
            </div>

            <div className={style.stats}>
              <div className={`${style.statItem} ${animateStat.projects ? style.active : ''}`}>
                <CountUp end={5} duration={1500} startAnimating={animateStat.projects} />
                <span>{t("about.stats.projects")}</span>
              </div>
              <div className={`${style.statItem} ${animateStat.years ? style.active : ''}`}>
                <CountUp end={3} duration={1500} startAnimating={animateStat.years} />
                <span>{t("about.stats.years")}</span>
              </div>
              <div className={`${style.statItem} ${animateStat.clients ? style.active : ''}`}>
                <CountUp end={1} duration={1000} startAnimating={animateStat.clients} />
                <span>{t("about.stats.clients")}</span>
              </div>
              <div className={`${style.statItem} ${animateStat.commits ? style.active : ''}`}>
                <CountUp end={23} duration={2000} startAnimating={animateStat.commits} />
                <span>{t("about.stats.commits")}</span>
              </div>
              <div className={`${style.statItem} ${animateStat.coffee ? style.active : ''}`}>
                <CountUp end={100} duration={2500} suffix="+" startAnimating={animateStat.coffee} />
                <span>{t("about.stats.coffee")}</span>
              </div>
            </div>
          </div>

          {/* CAIXA ACADÊMICA (Mantido do passo anterior, já funciona no scroll) */}
          <div className={style.academicBox}>
            <h3 className={style.academicTitle}>
              <SchoolIcon /> {t("about.academicTitle")}
            </h3>

            {progressMock.map((item, index) => (
              <div key={index} className={style.progressItem}>
                <div className={style.progressLabel}>
                  <span>{item.name}</span>
                  <span className={style.progressPercent}>{item.percentText}</span>
                </div>
                <div className={style.progressBar}>
                  <div style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}