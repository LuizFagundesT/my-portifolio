import React from 'react';
import styles from './Footer.module.css';
import { userData } from '../../data/userData'; // Ajuste o caminho conforme sua estrutura

// Importando os ícones do Material Design
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  // Criando uma lista para iterar sobre os links sociais,
  // combinando as informações que você já tem.
  // Você pode adicionar seus links reais de Instagram e WhatsApp aqui.
  const socialLinks = [
    { 
      name: 'Linkedin', 
      icon: <LinkedInIcon className={styles.icon} />, 
      url: userData.links.linkedin,
      handle: userData.linkedinName
    },
    { 
      name: 'Git Hub', 
      icon: <GitHubIcon className={styles.icon} />, 
      url: userData.links.github,
      handle: userData.githubName
    },
    // Adicionando placeholders para Instagram e WhatsApp com base no design
    { 
      name: 'Instagram', 
      icon: <InstagramIcon className={styles.icon} />, 
      url: '#', // Adicione seu link real aqui
      handle: '@seuhandle'
    },
    { 
      name: 'Gmail', 
      icon: <EmailIcon className={styles.icon} />, 
      url: `mailto:${userData.links.email}`,
      handle: userData.emailName
    },
    { 
      name: 'Whatsapp', 
      icon: <WhatsAppIcon className={styles.icon} />, 
      url: `https://wa.me/${userData.telefone.replace(/\+/g, '')}`, // Formata o link para o zap
      handle: userData.telefone
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.content}>
        
        {/* Lado Esquerdo - Informações do Dev */}
        <div className={styles.devInfo}>
          <h2 className={styles.devName}>{userData.name}</h2>
          
          {/* Usando o placeholder "user.desc" do seu objeto */}
          <p className={styles.description}>
            {userData.footerDev === "user.footerDev" ? (
              // Texto de exemplo baseado no seu print se o dado real não estiver lá
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters..."
            ) : (
              userData.footerDev
            )}
          </p>
          
          {/* Exemplo de uso das características (tags) */}
          <div className={styles.tags}>
            {userData.caracteristicas.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag.replace('user.', '')}</span>
            ))}
          </div>
        </div>

        {/* Lado Direito - Redes Sociais */}
        <div className={styles.connect}>
          <h3 className={styles.connectTitle}>Conect-se</h3>
          
          <ul className={styles.socialList}>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  {link.icon}
                  <div className={styles.linkText}>
                    <span className={styles.platformName}>{link.name}</span>
                    <span className={styles.handle}>{link.handle}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Linha Divisória e Copyright */}
      <div className={styles.bottomBar}>
        <hr className={styles.divider} />
        <p className={styles.copyright}>
          © {currentYear} Luiz Fagundes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;