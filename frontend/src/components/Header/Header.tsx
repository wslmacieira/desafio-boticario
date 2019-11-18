import React from "react";

import { Container } from './styles';

import logo from '../../assets/images/logo.png';


export default function Header() {
  return (
    <Container>
      <header>
        <nav className="header">
            <img src={logo} alt="" />
        </nav>
      </header>
    </Container>
  );
}
