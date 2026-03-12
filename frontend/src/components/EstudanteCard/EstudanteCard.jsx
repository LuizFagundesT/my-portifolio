// EstudanteCard.jsx

import React from 'react';
import styles from './EstudanteCard.module.css'; 

const EstudanteCard = ({ experiencia }) => {
  // 1. Desestruturar as novas propriedades link_url e link_texto
  const {
    instituicao,
    curso,
    tipo,
    titulo,
    data_inicio,
    data_fim,
    e_atual,
    descricao,
    habilidades,
    icon,
    link_url,   // <-- Nova prop
    link_texto // <-- Nova prop (opcional)
  } = experiencia;

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>
        {icon || '🎓'}
      </div>
      <div className={styles.card}>
        <div className={styles.academicTitle}>
          <h3>{titulo}</h3>
          <span className={styles.subtitle}>{tipo}</span>
        </div>
        <div className={styles.company}>
          <span>{instituicao}</span> - <span className={styles.subtitle}>{curso}</span>
        </div>
        <div className={styles.cardDate}>
          {data_inicio} – {e_atual ? 'Atual' : data_fim}
        </div>
        
        {/* Removido o parágrafo duplicado de descrição que estava no seu código original */}
        <p className={styles.descriptionText}>{descricao}</p>
        
        {/* Sugestão: Tags de Habilidades (opcional, mas recomendado) */}
        {habilidades && habilidades.length > 0 && (
          <div className={styles.habilidadesTags}>
            {habilidades.map((habilidade, index) => (
              <span key={index} className={styles.habilidadeTag}>
                {habilidade}
              </span>
            ))}
          </div>
        )}

        {/* ============================================================
           NOVA SEÇÃO: LINK REDIRECIONÁVEL (Renderização Condicional)
           ============================================================ */}
        {link_url && (
          <div className={styles.linkContainer}>
            <a 
              href={link_url} 
              className={styles.cardLink} 
              target="_blank"        // Abre em uma nova aba
              rel="noopener noreferrer" // Boa prática de segurança
            >
              {/* Usa o texto definido ou um padrão ("Ver Mais") */}
              {link_texto || "Ver Mais"} 
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstudanteCard;