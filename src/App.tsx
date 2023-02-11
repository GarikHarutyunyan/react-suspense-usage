import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Suspense } from "react";
import Third from "./Third";

const First = React.lazy(()=> import('./First'));
const Second = React.lazy(()=> import('./Second'));

function App() {
  return (
    <Router>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <ul>
          <li>
            <Link to="/">First</Link>
          </li>
          <li>
            <Link to="/second">Second</Link>
          </li>
          <li>
            <Link to="/third">Third</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={"Loaaaadding..."}>
              <First />
            </Suspense>
          </Route>
          <Route exact path="/second">
            <Suspense fallback={"Loaaaadding...2"}>
              <Second />
            </Suspense>
          </Route>
          <Route path="/third">
            <Third />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
