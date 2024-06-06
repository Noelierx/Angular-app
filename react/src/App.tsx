import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useRootScope from './hooks/useRootScope';

// Import all the route components
import Home from './components/Home';
import AllCountries from './components/AllCountries';
import CountryDetail from './components/CountryDetail';

const App: React.FC = () => {
  const { state, updateState } = useRootScope();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all-countries" component={AllCountries} />
        <Route path="/country-detail" component={CountryDetail} />
      </Switch>
    </Router>
  );
};

export default App;