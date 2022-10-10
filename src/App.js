import "./App.css";
import "./Appx.css";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import ArtistForm from "./components/ArtistForm";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            exact
            component={Main}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/bookartist"}
            exact
            component={SearchPage}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/forartist"}
            exact
            component={ArtistForm}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/contactus"}
            exact
            component={ContactUs}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
