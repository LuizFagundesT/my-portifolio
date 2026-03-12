import React from 'react';
import styles from './TrabalhoCard.module.css'; // Vamos criar este CSS também

const TrabalhoCard = ({ vaga }) => {
  const {
    empresa,
    vaga: tituloVaga, // Alias para não conflitar com o nome da prop
    data_inicio,
    data_fim,
    e_atual,
    descricao,
    habilidades,
    icon_empresa,
  } = vaga;

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>
        {icon_empresa} {/* Fallback logo */}
      </div>
      <div className={styles.card}>
        <div className={styles.jobHeader}>
          <h3>{tituloVaga}</h3>
          {e_atual && <span className={styles.atualTag}>Atual</span>} {/* Tag "Atual" sugerida */}
        </div>
        <div className={styles.company}>
          <span className={styles.companyName}>{empresa}</span>
        </div>
        <div className={styles.cardDate}>
          {data_inicio} – {e_atual ? 'Atual' : data_fim}
        </div>
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
      </div>
    </div>
  );
};

export default TrabalhoCard;