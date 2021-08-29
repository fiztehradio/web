import React from "react";
import './Home.css';

class Home extends React.Component{
  render() {
    return(
        <div className="main">
          <div className="welcome">
            <img className="logo-image" src="img/logo-image.svg"  alt={"radio.mipt logo"}/>
            <img className="logo-text" src="img/logo-text.svg" alt={"radio.mipt name"}/>
            <svg className="arrow bottom" viewBox="0 0 511 511">
              <g>
                <path
                    d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213
			c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333
			C512.827,136.693,512.827,129.867,508.667,125.707z"
                />
              </g>
            </svg>
            <svg className="arrow right" viewBox="0 0 48 48">
              <g>
                <path
                    d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92
		c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962
		C12.825,47.157,12.57,47.255,12.314,47.255z"
                />
              </g>
            </svg>
          </div>
        </div>
    );
  }
}

export default Home;