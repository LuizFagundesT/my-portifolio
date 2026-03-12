import React from 'react';
import styles from './LinkContact.module.css';

export default function LinkContact({ icon, formaContato, userAtributeContact, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
            <div className={styles.containerLinkContato}>
                <div className={styles.iconWrapper}>
                    {icon}
                </div>
                <div className={styles.linkInfo}>
                    <h6 className={styles.title}>{formaContato}</h6>
                    <span className={styles.attribute}>{userAtributeContact}</span>
                </div>
            </div>
        </a>
    );
}