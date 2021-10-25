import React from "react";
import styles from './SideNav.module.css';
import {Link} from "react-router-dom";

class SideNav extends React.Component{
  render() {
    return (
        <div className={styles.sideNav}>
          <Link className={styles.button} to="/team">
            <svg  viewBox="-44.795 -30.214 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <use href="img/team.svg#team"/>
            </svg>
          </Link>

          <Link className={styles.button} to="/podcasts">
            <svg  viewBox="-379 381 40 40" xmlns="http://www.w3.org/2000/svg">
              <use href="img/podcast.svg#podcast"/>
            </svg>
          </Link>

          <Link className={styles.button} to="/">
            <svg  viewBox="0 0 69.28 80" xmlns="http://www.w3.org/2000/svg">
              <use href="img/logo-image.svg#logo-image"/>
            </svg>
          </Link>

          <a className={styles.button} href="https://vk.com/radiomipt" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 548.358 548.358" xmlns="http://www.w3.org/2000/svg">
              <use href="img/vk.svg#vk"/>
            </svg>
          </a>

          <a className={styles.button} href="https://www.instagram.com/radiomipt/" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg">
              <use href="img/instagram.svg#instagram"/>
            </svg>
          </a>

        </div>
    );
  }
}

export default SideNav;