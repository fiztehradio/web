import React from "react";
import NavButtons from "./NavButtons";
import SocialButtons from "./SocialButtons";
import styles from './Home.module.css';
import {
  Link, Route,
  Switch,
  withRouter
} from "react-router-dom";
import Team from "./Team";
import Podcasts from "./Podcasts";
import SideNav from "./SideNav";
import NavIcon from "./NavIcon";

console.log(styles);

class Home extends React.Component{
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
    const history = this.props;
    document.body.className = "body home";
    return(
      <div className={styles.main}>
        <Switch>
          <Route history={history} path="/team"> <Team/> </Route>
          <Route history={history} path="/podcasts"> <Podcasts/> </Route>
          <Route history={history} path="/">
            <div className={styles.welcome}>
              <NavButtons theme="white"/>
              <SocialButtons theme="white"/>
              <SideNav  isOpen={this.state.isSideOpen}/>
              <NavIcon
                  isOpen = {this.state.isSideOpen}
                  onToggleChange = {this.toggleNavIcon}
              />
              <Link to="/">
                <svg className={styles.logoTextWhite} viewBox="0 0 198.04 75" xmlns="http://www.w3.org/2000/svg">
                  <use href="img/logo-text.svg#logo-text"/>
                </svg>
              </Link>
              <img className={styles.logoImage} src="img/logo-image.svg"  alt={"radio.mipt logo"}/>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Home);