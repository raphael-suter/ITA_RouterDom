import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DeckOfCards from "./DeckOfCards";
import Stationboard from "./Stationboard";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/deckofcards" component={DeckOfCards} />
        <Route path="/stationboard" component={Stationboard} />
        <Route
          render={() => (
            <>
              <Link to="/deckofcards">Deck Of Cards</Link>
              <br />
              <Link to="/stationboard">Stationboard</Link>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
