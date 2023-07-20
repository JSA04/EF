import { useState } from 'react';

import styles from "./FormParceiro.module.css"

function FormParceiro() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Nome: ", name)
        console.log("CPF: ", cpf)
        console.log("Telefone: ", tel)
        console.log("Email: ", email)
        console.log("Concorda: ", conc)
    }

    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [tel, setTel] = useState();
    const [email, setEmail] = useState();
    const [conc, setConc] = useState();

    return (
        <div className={styles.menu_form}>
                <form className={styles.form_cadastro} onSubmit={cadastrarUsuario}>
                    <div className={styles.titulo_form}>
                        Cadastre-se
                    </div>
                    <div className={styles.info}>

                        <div className={styles.field}>
                            <label htmlFor="name_field">Nome completo: </label><br/>
                            <input name="name_field" className={styles.input} placeholder="Nome da Silva"
                            onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="cpf_field">CPF: </label><br/>
                            <input name="cpf_field" className={styles.input} placeholder="123.456.789-10"
                            onChange={(e => setCpf(e.target.value))}/>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="tel_field">Telefone: </label><br/>
                            <input type="tel" name="tel_field" className={styles.input} placeholder="(00) 912345-6789"
                            onChange={(e => setTel(e.target.value))}/>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email_field">E-mail: </label><br/>
                            <input type="email" name="email_field" className={styles.input} placeholder="email@dominio.com.br"
                            onChange={(e => setEmail(e.target.value))}/>
                        </div>
                    </div>
                    <div className={styles.termo_condicoes}>
                        <input type="checkbox" name="termo_condicoes" onChange={(e) => setConc(e.target.checked)}/> 
                        <p className={styles.termo_condicoes_texto}>Li e concordo com os Termos e Condições de Uso.
                        Os termos estão disponíveis para consulta no app.</p>
                    </div>
                    <div className={styles.submit}>
                        <input type="submit" className={styles.submit_button} value="Cadastrar"/>
                    </div>
                </form>
            </div>
    )
}

export default FormParceiro;