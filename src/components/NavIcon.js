import React from "react";
import styles from './NavIcon.module.css'

class NavIcon extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.props.onToggleChange();
  }

  render() {
    let className = styles.navIcon;
    className += (this.props.isOpen) ? ` ${styles.open}` : "";
    return (
      <div className={className} onClick={this.toggleNav}>
        <span/>
        <span/>
        <span/>
        <span/>
      </div>
    );
  }
}

export default NavIcon;