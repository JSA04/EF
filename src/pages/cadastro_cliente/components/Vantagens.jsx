import styles from './Vantagens.module.css';

import ebup from './media/ebup.svg';
import eoup from './media/eoup.svg';
import ebdw from './media/ebdw.svg';
import eodw from './media/eodw.svg';

import topico1 from './media/topico1.svg';
import topico2 from './media/topico2.svg';
import topico3 from './media/topico3.svg';
import topico4 from './media/topico4.svg';

function Vantagens () {
    return (
        <div className={styles.vantagens}>
            <div className="content">
                <img id={styles.ebup} src={ebup} alt='Efeito Bolinha'/>
                <img id={styles.eoup} src={eoup} alt='Efeito Onda'/>
                <img id={styles.eodw} src={eodw} alt='Efeito Onda'/>
                <img id={styles.ebdw} src={ebdw} alt='Efeito Bolinha'/>
                
                <div className={styles.vantagens_content}>  
                    <div className={styles.vantagens_tit}>
                        Vantagens de ser nosso cliente
                    </div>

                    <ul className={styles.topicos}>

                        <li className={styles.topico}>
                            <div className={styles.topico_img}><img src={topico1} alt="" /></div>
                            <p>Preço acessível</p>
                        </li>
                        <li className={styles.topico}>
                            <div className={styles.topico_img}><img src={topico2} alt="" /></div>
                            <p>Próximo a sua residência</p>
                        </li>
                        <li className={styles.topico}>
                            <div className={styles.topico_img}><img src={topico3} alt="" /></div>
                            <p>Máxima preocupação</p>
                        </li>
                        <li className={styles.topico}>
                            <div className={styles.topico_img}><img src={topico4} alt="" /></div>
                            <p>Direto na sua residência</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Vantagens;