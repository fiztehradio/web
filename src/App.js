import React from "react";
import './App.css';
import Home from "./components/Home";
import {createBrowserHistory} from "history";
import {BrowserRouter} from "react-router-dom";
import Team from "./components/Team";
import Podcasts from "./components/Podcasts";
import SideNav from "./components/SideNav";
import NavIcon from "./components/NavIcon";

const history = createBrowserHistory();

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isSideOpen: false
    };
    this.toggleNavIcon = this.toggleNavIcon.bind(this);
  }

  toggleNavIcon (){
    this.setState(prevState => ({
      isSideOpen: !prevState.isSideOpen
    }));
  }

  render() {
    return (
        <div className={"App"}>
          {/*<SideNav isOpen={this.state.isSideOpen}/>*/}
          {/*<NavIcon*/}
          {/*    isOpen = {this.state.isSideOpen}*/}
          {/*    onToggleChange = {this.toggleNavIcon}*/}
          {/*/>*/}
          <BrowserRouter history={history}>
            <Home/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;