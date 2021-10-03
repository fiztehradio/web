import React from "react";
import NavButtons from "./NavButtons";
import SocialButtons from "./SocialButtons";
import './Home.css';
import {
  Link, Route,
  Switch,
  withRouter
} from "react-router-dom";
import Team from "./Team";
import Podcasts from "./Podcasts";

class Home extends React.Component{
  render() {
    const history = this.props;
    document.body.className = "body home";
    return(
      <div className="main">
        <Switch>
          <Route history={history} path="/team"> <Team/> </Route>
          <Route history={history} path="/podcasts"> <Podcasts/> </Route>
          <Route history={history} path="/">
            <div className="welcome">
              <NavButtons theme="white"/>
              <SocialButtons theme="white"/>
              <Link to="./">
                <svg className="logo-text-white" viewBox="0 0 198.04 75" xmlns="http://www.w3.org/2000/svg">
                  <use href="img/logo-text.svg#logo-text"/>
                </svg>
              </Link>
              <img className="logo-image" src="img/logo-image.svg"  alt={"radio.mipt logo"}/>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Home);