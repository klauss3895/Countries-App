import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import TouristActivityCreated from './components/TouristActivity';
import Detail from './components/Detail';
import styles from "./estilos/LandingPage.module.css"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route className={styles} exact path="/" component= {LandingPage} />
      <Route exact path="/home" component= {Home} />
      <Route path="/TouristActivity" component={TouristActivityCreated}/>
      <Route exact path="/detail/:id" component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
