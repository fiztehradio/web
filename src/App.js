import React from "react";
import './App.css';
import Home from "./components/Home";
// import {createBrowserHistory} from "history";
import {BrowserRouter} from "react-router-dom";

// const history = createBrowserHistory();

class App extends React.Component{
  render() {

    return (
        <div className={"App"}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Home/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;