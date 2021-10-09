import React from "react";
import styles from "./SocialButtons.module.css";

class SocialButtons extends React.Component{
  render() {
    let className = styles.socButtons;
    className += (this.props.theme === "black") ? ` ${styles.black}`: ` ${styles.white}`;
    return(
        <div className={className}>
            <a href="https://www.instagram.com/radiomipt/" target="_blank" rel="noreferrer">
              <svg className={styles.socialIcon} viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg">
                <use href="img/instagram.svg#instagram"/>
              </svg>
            </a>
            <a href="https://vk.com/radiomipt" target="_blank" rel="noreferrer">
              <svg className={styles.socialIcon} viewBox="0 0 548.358 548.358" xmlns="http://www.w3.org/2000/svg">
                <use href="img/vk.svg#vk"/>
              </svg>
            </a>
            <a href="https://twitter.com/radiomipt" target="_blank" rel="noreferrer">
              <svg className={styles.socialIcon} viewBox=" 0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use href="img/twitter.svg#twitter"/>
              </svg>
            </a>
        </div>
    );
  }
}

export default SocialButtons;