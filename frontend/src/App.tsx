import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobaStyle from './styles/global';
import Routes from './routes/routes';

import Header from './components/Header/Header';
// import MenuLateral from './components/MenuLateral/MenuLateral';
// import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <GlobaStyle />
      <Header />
        {/* <MenuLateral />   */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
