import React from 'react';
import { Link } from "react-router-dom";
import {
  MdAccountBalanceWallet,
  MdCardGiftcard,
  MdAccountCircle,
  MdExitToApp
} from "react-icons/md";

import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

import Menu from '../../assets/images/menu.png';
import avatar from '../../assets/images/wagner.png';
import { Container } from './styles';

export default function components() {

  function logout() {
    localStorage.removeItem('user');
}

  return (
    <Container> 
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <img src={Menu} alt="menu" />
      </label>
      <nav id="sidebar-wrapper">
        <ul>
          <li>
            <div className="profile">
              <img src={avatar} alt="Avatar" />
              <div className="profile-info">
                <span className="user-name">Wagner</span>
                <span className="user-prof">Dev Jr</span>
              </div>
            </div>
          </li>
          <Link to="/desenvolvedor">
            <li>
              <MdAccountCircle />
              <strong>Desenvolvedor</strong>
              </li>
          </Link>
          <Link to="/cadastro-compra">
            <li>
              <MdCardGiftcard />
              Compra
              </li>
          </Link>
          <Link to="/cashback">
            <li>
              <MdAccountBalanceWallet />
              Cashback
              </li>
          </Link>
          <Link onClick={logout} to="/">
            <li>
              <MdExitToApp />
              Logout
              </li>
          </Link>
        </ul>
      </nav>
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
