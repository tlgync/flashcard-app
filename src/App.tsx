import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { checkSelector } from './slices/AuthSlice';
// import { useAppDispatch } from './store';
import { ForgotPassword } from './views/Auth/ForgotPassword';
import { Login } from './views/Auth/Login';
import { Register } from './views/Auth/Register';
import { Dashboard } from './views/Dashboard';

export const App = () => {
  // const dispatch = useAppDispatch();
  const { authData } = useSelector(checkSelector);
  return (
    <div className="App">
      {!authData
        ? (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotPassword" component={ForgotPassword} />
          </Switch>
        )
        : (
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        )}

    </div>
  );
};

export default App;
