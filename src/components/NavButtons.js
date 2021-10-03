import React from "react";
import "./NavButtons.css";
import {
    Link
  } from "react-router-dom";

class NavButtons extends React.Component{
  render() {
    let className = (this.props.theme === "black") ? "navButtons black" : "navButtons white";
    return(
      <div className={className}>
        <Link className="button"  to="./team"> <span> {"О команде"} </span> </Link>
        <Link className="button" to="./podcasts"> <span> {"Подкасты"} </span></Link>
        {/*<Link className="button" to="./articles"> <span> {"Статьи"} </span> </Link>*/}
      </div>
    );
  }
}

export default NavButtons;