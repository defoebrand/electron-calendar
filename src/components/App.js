import { HashRouter, Route } from 'react-router-dom'
import Calendar from './Calendar'
import DateView from './DateView'

import '../assets/App.scss';

const App = () => {
  return (
    <HashRouter >
      <div className="App">
        <Route path='/' exact component={Calendar} />
        <Route path='/date' component={DateView} />
      </div>
    </HashRouter>
  );
}

export default App;