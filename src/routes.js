import { Switch, Route } from "react-router-dom";
import CustomerList from "./components";
const Routes = (
  <Switch>
    <Route
      path="/"
      exact
      component={CustomerList}
    />
    
  </Switch>
);
export default Routes;