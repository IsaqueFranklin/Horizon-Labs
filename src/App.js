import './App.css';
import './styles/style.css'
import { BrowserRouter, Switch, Route, Redirect, Component } from 'react-router-dom';
import firebase, { FirebaseContext } from './firebase'
import useAuth from './authentication/useAuth'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Packages from './components/Packages'
import Contato from './components/Contato'


function App() {

  const user = useAuth()

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="">
          <Header />
          <div className="">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/trabalhos' component={Packages} />
              <Route exact path='/contato' component={Contato} />
            </Switch>
          </div>
          <Footer />
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
