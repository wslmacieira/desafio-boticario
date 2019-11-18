import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  PrivateRoute  from './Route';

import Login from '../pages/Login/Login';
import Cadastro from '../pages/Revendedor/Revendedor';
import CadastroCompra from '../pages/Compra/Compra';
import AtualizaCompra from '../pages/Compra/Compra';
import Cashback from '../pages/Cashback/Cashback';
import Desenvolvedor from '../pages/Desenvolvedor/Desenvolvedor';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro-usuario" component={Cadastro} />
      <PrivateRoute path="/cadastro-compra" component={CadastroCompra} />
      <PrivateRoute path="/compras/:id" component={AtualizaCompra} />
      <PrivateRoute path="/cashback" component={Cashback} />
      <PrivateRoute path="/desenvolvedor" component={Desenvolvedor} />

      <Route path="/" component={() => <h1>404</h1>}/>
    </Switch>
  );
}