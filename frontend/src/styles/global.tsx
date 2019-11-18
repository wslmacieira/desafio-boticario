import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    background-color: #f2f2f2;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, a, span {
    color: #222;
    font: 16px Cabin, sans-serif;
  }

  a:hover {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

/* Estilo Global do Formulário  */

  h1 {
      text-transform: uppercase;
      font-size: 34px;
      font-weight: bold;
      color: #198ccf;
      margin-bottom: 30px;
    }

  input {
      margin-bottom: 20px;
      width: 100%;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 4px;
      ::placeholder {
        font-weight: bold;
        padding-left: 10px;
        text-transform: uppercase;
        color: #ccc;
      }
    }

    label {
      color: #198ccf;
      font-weight: bold;
      font-size: 20px;
    }

    button {
    background: #198ccf;
    border: 0;
    border-radius: 4px;
    height: 35px;
    color: #fff;
    padding: 0 20px;
    margin-right: 20px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    }
`;