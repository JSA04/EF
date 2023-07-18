import styles from './Header.module.css';
import logo from './logo.svg';
import { AiOutlineDown } from 'react-icons/ai'

function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className="logo_image_header" alt="Logo EqualityFood" src={logo}/>                 
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.navigation_ul}>
                    <li>
                        <a href="#">
                            <span className={styles.txt_link}>Parceiros</span>
                            <span className={styles.icon}><AiOutlineDown/></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={styles.txt_link}>Ajuda</span>
                            <span className={styles.icon}><AiOutlineDown/></span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.entrar_cadastrar_button}>
                <a href="#">
                    <div className={styles.entrar_button}>Entrar</div>
                </a>
                <a href="#">
                    <div className={styles.cadastrar_button}>Cadastrar</div>
                </a>
            </div>
        </header>
    );  
    
}

export default Header;