import React from "react";
import './NavIcon.css'

class NavIcon extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.props.onToggleChange();
  }

  render() {
    let className = "nav-icon";
    if (this.props.isOpen)
      className += " open";
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