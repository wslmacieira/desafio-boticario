import React from "react";

import { Container } from './styles';

import MenuLateral from '../../components/MenuLateral/MenuLateral';

export default function Desenvolvedor() {

  return (
    <>
    <MenuLateral />
      <Container>
        <div className="card">
          <h1>Dados do Desenvolvedor </h1>

          <ul>
            <li>Desenvolvedor: <span>Wagner dos santos Lima</span></li>
            <li>E-mail: <span>wslmacieira@outlook.com</span></li>
            <li>LinkedIn: <span>linkedin.com/in/wagner-santos-lima-60691a192/</span></li>
            <li>Github: <span>github.com/wslmacieira</span></li>
            <li>Tecnologias: <span>['Node.Js', 'ReactJS', 'Typescript']</span></li>
          </ul>
        </div>
      </Container>
    </>
  );
}
