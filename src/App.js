import { Route, BrowserRouter as Router } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Browse from "./pages/browse";
import Home from "./pages/home";
export default function App() {
  const user = null;
  // const user = { name: "ahmed" };
  return (
    <Router>
      <Route path="/signin">
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
      </Route>

      <Route path="/signin">
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
      </Route>

      {/* <Route  path="/signin">
        <Signin />
      </Route> */}
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
