import React from "react";
import styles from "./NavButtons.module.css";
import {
    Link
  } from "react-router-dom";

class NavButtons extends React.Component{
  render() {
    let className = styles.navButtons;
    className += (this.props.theme === "black") ? ` ${styles.black}` : ` ${styles.white}` ;
    return(
      <div className={className}>
        <Link className={styles.button} to="/team"> <span> {"О команде"} </span> </Link>
        <Link className={styles.button} to="/podcasts"> <span> {"Подкасты"} </span></Link>
        {/*<Link className={styles.button} to="/articles"> <span> {"Статьи"} </span> </Link>*/}
      </div>
    );
  }
}

export default NavButtons;