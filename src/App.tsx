import * as React from "react";
import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";
import Hello from "./components/Hello/Hello";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppHeader />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello name="Askalany" />
      </div>
    );
  }
}

export default App;
