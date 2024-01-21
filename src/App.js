import { Route, BrowserRouter as Router } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Browse from "./pages/browse";
import Home from "./pages/home";

import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <Signin />
          </IsUserRedirect>
        </Route>

        <Route path="/signup">
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <Signup />
          </IsUserRedirect>
        </Route>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
