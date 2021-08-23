import './App.css';

import {Switch, Route, withRouter} from 'react-router-dom';

import PortfolioHeader from './components/PortfolioHeader';
import Home from './pages/Home';

function App(props) {
  console.log(props);

  return (
    <div>
      <PortfolioHeader />
      <Switch>
        <Route path="/" children={<Home />} exact/>
        <Route path="/about" children={() => <div>About me</div>}/>
        <Route path="/projects" children={() => <div>My Projects</div>}/>
        <Route path="/contact" children={() => <div>Contact</div>}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
