import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/19173171?s=460&u=8e04835c17a1b421bd3693b19b7b57afe636e52a&v=4" alt="Bruno Bigotto"/>
                <div>
                    <strong>Bruno Bigotto</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Entusiasta em contas e formulas matemáticas.
                <br/><br/>
                Apaixonado por resolver equações e por mudar a vida das pessoas através da resolução de equações diferenciais.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article> 
    );
}

export default TeacherItem;
