import './App.css';
import './styles/style.css'
import { BrowserRouter, Switch, Route, Redirect, Component } from 'react-router-dom';
import firebase, { FirebaseContext } from './firebase'
import useAuth from './authentication/useAuth'
import Home from './components/Home'

function App() {

  const user = useAuth()

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="">
          <div className="">
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
