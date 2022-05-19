
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Department from './Container/Departments/Department';
import Doctor from './Container/Doctors/Doctor';
import Home from './Container/Home';
import Login from './Container/Login/Login';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Department" component={Department} />
        <Route exact path="/Doctors" component={Doctor} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
