import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signup from './components/Signup';
import Signin from './components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history }) => {
  console.log('HIS==============', history);
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/auth/signup' component={Signup} />
            <Route exact path='/auth/signin' component={Signin} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
