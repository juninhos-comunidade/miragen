import "./Footer.css"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (
        
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="brand-logo">
                        <div className="logo-icon">M</div>
                        <span>MIRAGEN</span>
                    </div>
                    <p>Inteligência para impulsionar sua carreira</p>

                </div>
                <div className="footer-column">
                    <h3>Navegação</h3>
                    <a href="#">Início</a>
                    <a href="#">Como funciona</a>
                    <a href="#">Recursos</a>
                    <a href="#">Sobre o projeto</a>
                </div>
                <div className="footer-column">
                    <h3>Suporte</h3>
                    <a href="#">Ajuda</a>
                    <a href="#">Contato</a>
                    <a href="#">Perguntas frequentes</a>
                </div>
                <div className="footer-column">
                    <h3>Legal</h3>
                    <a href="#">Privacidade</a>
                    <a href="#">Termos de uso</a>
                    <a href="#">Política de cookies</a>
                </div>
                <div className="footer-column">
                    <h3>Siga-nos</h3>
                    <div className="social-icons">
                        <a href="#">
                            <FaLinkedin/>
                        </a>
                        <a href="#">
                            <FaGithub/>
                        </a>
                        <a href="#">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer