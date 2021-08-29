import React from "react";
import './SideNav.css';

class SideNav extends React.Component{
  render() {
    let className = "sidenav";
    if(this.props.isOpen)
      className += " open";
    return (
        <div className={className}>
          <a href="https://www.instagram.com/radiomipt/" target="_blank" rel="noreferrer">
            <img src="img/instagram.png" alt={"Instagram"}/>
          </a>
          <a href="https://vk.com/radiomipt" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 445 445" height="33">
              <title>Вконтакте</title>
              <path className="vk-color-1"
                    d="M 68.57,0 H 376.43 A 68.57,68.57,0,0,1,445,68.57
                   V 376.43 A 68.57,68.57,0,0,1,376.43,445
                   H 68.57 A 68.57,68.57,0,0,1,0,376.43
                   V 68.57 A 68.57,68.57,0,0,1,68.57,0
                   Z"
              />
              <path className="vk-color-2"
                    d="M 323.3,226.21 s 38.45-54.24,42.27-72.07
                   c 1.27-6.37-1.53-9.93-8.15-9.93 H 324.07
                   c -7.64,0-10.44,3.31-12.73,8.15,0,0-18,38.43-40,62.64-7,7.83-10.63,10.18-14.52,10.18-3.14,0-4.58-2.61-4.58-9.68
                   V 153.63c0-8.66-1-11.2-8.15-11.2 H 190.63
                   c -4.07,0-6.62,2.37-6.62,5.6,0,8.15,12.48,10,12.48,32.09
                   V 225.7 c 0,9.17-.51,12.73-4.84,12.73-11.46,0-38.71-39.47-54-84.29-3.06-9.17-6.37-11.71-15-11.71
                   H 89.28 c -4.84,0-8.4,3.31-8.4,8.15,0,8.91,10.44,50.17,51.44,105.43,27.5,37.18,63.66,57.3,96.26,57.3,19.86,0,24.7-3.31,24.7-11.71
                   V 273.06 c 0-7.13,2.8-10.19,6.88-10.19,4.58,0,12.67,1.47,31.58,20.12,22.41,21.39,23.94,30.3,36.16,30.3
                   h 37.43 c 3.82,0,7.39-1.78,7.39-8.15,0-8.4-11-23.43-27.76-41.25-6.88-9.17-18.08-19.1-21.65-23.68
                   C 318.21,234.86,319.74,231.81,323.3,226.21
                   Z"
              />
            </svg>
          </a>

          <a href="https://twitter.com/radiomipt" target="_blank" rel="noreferrer">
            <img width="49" height="49" src="img/twitter.png" alt={"Twitter"}/>
          </a>
        </div>
    );
  }
}

export default SideNav;