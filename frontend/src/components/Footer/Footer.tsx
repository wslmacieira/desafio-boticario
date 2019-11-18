import React from "react";

import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <footer >
        <strong>2019 Boticario</strong>
        <div>
          <FaInstagram />
          <FaFacebookSquare />
          <FaLinkedin />
        </div>
      </footer>
    </Container>
  );
}
