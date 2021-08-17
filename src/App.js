import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PortfolioHeader from './components/PortfolioHeader';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <PortfolioHeader />
        <Switch>
          <Route path="/" children={<Home />} exact/>
          <Route path="/about" children={() => <div>About me</div>}/>
          <Route path="/projects" children={() => <div>My Projects</div>}/>
          <Route path="/contact" children={() => <div>Contact</div>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
