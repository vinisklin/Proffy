import React from "react";

import whastappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/43184791?s=460&u=01ec492bf3af7f937123e2ded23d21dd14e71f3d&v=4" alt=""/>
        <div>
          <strong>Vinicius Klingenfus</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e produzir a famosa metanfetamina azul. 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;