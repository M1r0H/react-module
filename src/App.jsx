import React from 'react';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage.jsx';
import { SignInModule } from './components/Forms/SingIn/SingIn.jsx';
import { SignUpModule } from './components/Forms/SingUp/SingUp.jsx';
import { ApolloProvider } from './core/AppoloProvidor.js';
import { PrivateRoute } from './components/PrivateRout.jsx';
import { Categories } from './components/Categories/Categories.jsx';
import ButtonAppBar from './components/Header/Header.jsx';
import { Busket } from './components/Busket/Busket.jsx';
import './App.css'


function App() {
  return (
      <BrowserRouter>
        <ApolloProvider>
          <Provider store={store}>
            <Route component={ButtonAppBar} />
            <Switch>
              <Route exact path="/" component={SignInModule} />
              <Route path="/signup" component={SignUpModule} />
              <PrivateRoute exact path="/main" component={MainPage} />
              <PrivateRoute exact path="/main/category/:id" component={Categories} />
              <PrivateRoute path="/main/busket" component={Busket} />
            </Switch>
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
  );
}

export default App;
