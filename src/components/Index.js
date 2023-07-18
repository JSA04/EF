import styles from './Index.module.css';

function Index() {
    return (
        <>
            <div className={styles.menu_form}>
                <form className={styles.form_cadastro}>
                    <div className={styles.titulo_form}>
                        Cadastre-se
                    </div>
                    <div className={styles.info}>

                        <div className={styles.field}>
                            <label for="name_field">Nome completo: </label><br/>
                            <input name="name_field" class={styles.input} placeholder="Nome da Silva"/>
                        </div>
                        <div className={styles.field}>
                            <label for="cpf_field">CPF: </label><br/>
                            <input name="cpf_field" class={styles.input} placeholder="123.456.789-10"/>
                        </div>
                        <div className={styles.field}>
                            <label for="tel_field">Telefone: </label><br/>
                            <input type="tel" name="tel_field" class={styles.input} placeholder="(00) 912345-6789"/>
                        </div>
                        <div className={styles.field}>
                            <label for="email_field">E-mail: </label><br/>
                            <input type="email" name="email_field" class={styles.input} placeholder="email@dominio.com.br"/>
                        </div>
                    </div>
                    <div className={styles.termo_condicoes}>
                        <input type="checkbox" name="termo_condicoes"/> 
                        <p className={styles.termo_condicoes_texto}>Li e concordo com os Termos e Condições de Uso.
                        Os termos estão disponíveis para consulta no app.</p>
                    </div>
                    <div className={styles.submit}>
                        <button type="submit" className={styles.submit_button}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Index;