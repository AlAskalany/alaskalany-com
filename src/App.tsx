/** App */

import * as React from "react";
import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppHeader />
        <p className="App-intro">
          Welcome!
        </p>
      </div>
    );
  }
}

export default App;
