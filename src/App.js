
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Container/Banner/About/About';
import Contact from './Container/Banner/Contact/Contact';
import Department from './Container/Banner/Departments/Department';
import Doctor from './Container/Banner/Doctors/Doctor';
import Home from './Container/Banner/Home';

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
      </Switch>
      <Footer />
    </>
  );
}

export default App;
