import BackgroundCanvas from "../../components/BackgroundCanvas";
import { useTranslation } from "react-i18next";
import styleContato from "./Contato.module.css"; // Certifique-se que o caminho está correto
import EmailContact from "../../components/EmailContact/EmailContact";
import { userData } from "../../data/userData";
import LinkContact from "../../components/LinkContact/LinkContact";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SpotifyPlayer from '../../components/SpotifyPlayer';


export default function Contato() {
    const { t } = useTranslation();
    
    const linksContato = [
        {
            icon: <EmailIcon />,
            formaContato: "Email",
            userAtributeContact: userData.emailName,
            link: `mailto:${userData.links.email}`
        },
        {
            icon: <WhatsAppIcon />,
            formaContato: "Whatsapp",
            userAtributeContact: userData.telefone,
            link: `https://api.whatsapp.com/send/?phone=${userData.telefone.replace(/\D/g,'')}&text=Olá!`
        },
        {
            icon: <LinkedInIcon />,
            formaContato: "Linkedin",
            userAtributeContact: userData.linkedinName,
            link: userData.links.linkedin
        },
        {
            icon: <GitHubIcon />,
            formaContato: "Github",
            userAtributeContact: userData.githubName,
            link: userData.links.github
        },
        
    ];

    return (
        <section className={styleContato.contatoPage}>
            <BackgroundCanvas />
            
            <div className={styleContato.container}>
                {/* Cabeçalho da página */}
                <div className={styleContato.box_text_header}>
                    <h2 className={styleContato.h1}>{t("contato.contato-title")}</h2>
                    <h6 className={styleContato.text_description}>{t("contato.contato-text")}</h6>
                </div>

                {/* Área de conteúdo (Formulário + Links) */}
                <div className={styleContato.fomrasContato}>
                    <div className={styleContato.formWrapper}>
                        <EmailContact />
                    </div>
                    
                    <div className={styleContato.linksWrapper}>
                        <h4 className={styleContato.h4}>Conecte-se por</h4>
                        {linksContato.map((contato, index) => (
                            <LinkContact
                                key={index}
                                icon={contato.icon}
                                formaContato={contato.formaContato}
                                userAtributeContact={contato.userAtributeContact}
                                link={contato.link}
                            />
                        ))}
                        <div className={styleContato.SpotifyPlayerContainer}>
                                              <SpotifyPlayer
                                                  linkMusica="https://open.spotify.com/embed/track/43uHeQc9kdMzFAbxCTcgiI?utm_source=generator"
                                              />
                                          </div>
                    </div>
                </div>
            </div>
        </section>
    );
}