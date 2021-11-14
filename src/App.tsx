import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { checkSelector, fetchAuth } from './slices/AuthSlice';
import { loginSelector } from './slices/LoginSlice';
import { useAppDispatch } from './store';
import { ForgotPassword } from './views/Auth/ForgotPassword';
import { Login } from './views/Auth/Login';
import { Register } from './views/Auth/Register';
import { ResetPassword } from './views/Auth/ResetPassword';
import { Dashboard } from './views/Dashboard';

export const App = () => {
  const dispatch = useAppDispatch();
  const { loading } = useSelector(loginSelector);
  const { authData } = useSelector(checkSelector);
  useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch, loading]);
  return (
    <div className="App">
      {!authData
        ? (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/resetPassword/:id" component={ResetPassword} />
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
