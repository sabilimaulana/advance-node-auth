import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import LoginScreen from "./components/screens/LoginScreen";
import PrivateScreen from "./components/screens/PrivateScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgot-password"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/reset-password/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
