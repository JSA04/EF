import { AiOutlineDown } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'; 
import { useState } from 'react';

import styles from './static/css/Header.module.css';
import logo from './static/media/logo.svg';

function Header(){

    const [isHamActive, setHamActive] = useState(false);

    const togleMenuHam = () => {
        setHamActive(!isHamActive);
    }

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
                                <span className={styles.arrow_icon}><AiOutlineDown/></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ajuda">
                                <span className={styles.txt_link}>Ajuda</span>
                                <span className={styles.arrow_icon}><AiOutlineDown/></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.funcoes_laterais}>
                    <Link to="/entrar">
                        <div className={styles.entrar_button}>Entrar</div>
                    </Link>
                    <Link to="/cadastrar">
                        <div className={styles.cadastrar_button}>Cadastrar</div>
                    </Link>
                    <div className={styles.hamburguer}
                         onClick={togleMenuHam}>
                        <span className={styles.hamburger_icon}><GiHamburgerMenu/></span>
                    </div>
                    <div className={`${isHamActive ? styles.menu_open : styles.menu_close}`}>
                        <ul className={styles.menu_nav}>
                            <li>Ajuda</li>
                            <li>Parceiros</li>
                        </ul>
                        <div className={styles.menu_funcoes}>
                            <Link to="/entrar">
                                <div className={styles.menu_entrar_button}>Entrar</div>
                            </Link>
                            <Link to="/cadastrar">
                                <div className={styles.menu_cadastrar_button}>Cadastrar</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );  
    
}

export default Header;