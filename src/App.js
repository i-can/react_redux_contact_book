
import './Styles/App.scss'
import Navbar from './Components/Elements/Navbar'
import Contact from "./Container/ContactContainer/ContactContainer";
import AddContact from './Container/AddToContactContainer/AddToContainer'
import EditContact from './Components/Contacts/EditContact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path='/' component={Contact} />
              <Route exact path='/contact/add' component={AddContact} />
              <Route exact path = '/contact/edit/:id' component={EditContact}/>
            </Switch>
          </div>
        </div>
      </div>
      </Router>
  );
}

export default App;
