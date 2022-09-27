import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {

  const [page, setPage] = useState("/")
  return <div>
    
    {/*{code here}*/}
    <NavBar onChangePage={setPage} />
            <Switch >
            <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/directors">
                    <Directors />
                </Route>
                <Route path="/actors">
                    <Actors />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>


    </div>;
}

export default App;
