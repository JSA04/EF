import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'; 

import styles from './static/css/Header.module.css';
import logo from './static/media/logo.svg';

function Header(){
    return (
        <header className={styles.header}>
            <div className="content">
                <div className={styles.logo}>
                    <Link to="/"><img className="logo_image_header" alt="Logo EqualityFood" src={logo}/></Link>
                </div>
                <nav className={styles.navigation}>
                    <ul className={styles.navigation_ul}>
                        <li>
                            <Link to="/parceiros">
                                <span className={styles.txt_link}>Parceiros</span>
                                <span className={styles.icon}><AiOutlineDown/></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ajuda">
                                <span className={styles.txt_link}>Ajuda</span>
                                <span className={styles.icon}><AiOutlineDown/></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.entrar_cadastrar_button}>
                    <Link to="/entrar">
                        <div className={styles.entrar_button}>Entrar</div>
                    </Link>
                    <Link to="/cadastrar">
                        <div className={styles.cadastrar_button}>Cadastrar</div>
                    </Link>
                </div>
            </div>
        </header>
    );  
    
}

export default Header;