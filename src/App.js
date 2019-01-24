import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

// pages
import { Home, AboutPage, WherePage, ContactPage, ClientPage } from './pages';
import {Header, Footer} from './containers';



class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
         <div className="app">
         <div>
            <Header/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/quem-somos' component={AboutPage}/>
              <Route exact path='/onde-estamos' component={WherePage}/>
              <Route exact path='/fale-conosco' component={ContactPage}/>
              <Route exact path='/area-do-cliente' component={ClientPage}/>
         </div>
          <Footer/>
         </div>
     </HashRouter>
    );
  }
}

export default App;