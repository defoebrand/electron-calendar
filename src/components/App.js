import { HashRouter, Route } from 'react-router-dom'
import Calendar from './Calendar'
import Date from './Date'

import '../assets/App.scss';

const App = () => {
  return (
    <HashRouter >
      <div className="App">
        <Route path='/' exact component={Calendar} />
        <Route path='/date' component={Date} />
      </div>
    </HashRouter>
  );
}

export default App;



// <Router history = {browserHistory}>
//    <Route path = "/" component = {App}>
//       <IndexRoute component = {Home} />
//       <Route path = "home" component = {Home} />
//       <Route path = "about" component = {About} />
//       <Route path = "contact" component = {Contact} />
//    </Route>
// </Router>