import Button from "../Button/Button"
import { Link } from 'react-router'

function HeaderSecundary() {
    return (
        <header className="header-container">
            <div className="header-logo">
                <Link to="/">Miragen</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li>
                        <Link to="/analise">
                            <Button variant="primary" text="Analisar Currículo" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderSecundary