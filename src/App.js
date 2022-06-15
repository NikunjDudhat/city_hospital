
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Container/About/About';
import Appointment from './Container/Appointment/Appointment';
import Contact from './Container/Contact/Contact';
import Department from './Container/Departments/Department';
import Doctor from './Container/Doctors/Doctor';
import Home from './Container/Home';
import Login from './Container/Login/Login';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ListData from './Container/Appointment/ListData';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/Department" component={Department} />
        <PublicRoute exact path="/Doctors" component={Doctor} />
        <PrivateRoute exact path="/About" component={About} />
        <PublicRoute exact path="/Contact" component={Contact} />
        <PublicRoute  restricted={true} exact path="/Login" component={Login} />
        <PrivateRoute exact path="/Appointment" component={Appointment} />
        <PrivateRoute exact path="/List_data" component={ListData} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
