
import './App.css';
import Navbar from './components/layout/Navbar';
import PageOne from './components/pages/Page_One';
import PageTwo from './components/pages/Page_Two';
import PageThree from './components/pages/Page_Three';
import PageFour from './components/pages/Page_Four';
import Footer from './components/layout/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />


        <Switch>
          <Route path='/' exact component={PageOne} />
          <Route path='/rates' exact component={PageTwo} />
          <Route path='/exchange' exact component={PageThree} />
          <Route path='/budget' exact component={PageFour} />


        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
