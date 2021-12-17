import React from "react";
import styles from "./Podcasts.module.css";
import PodcastList from "../data/podcasts.json";
import NavButtons from "./NavButtons";
import SocialButtons from "./SocialButtons";
import {Link} from "react-router-dom";
import SideNav from "./SideNav";

class PodcastCard extends React.Component{
  getLinkName(refName){
    switch(refName){
      case "spotify-link": return "Spotify";
      case "vk-link": return "VK";
      case "yandex-link": return "Яндекс.Музыка";
      case "castbox-link": return "Castbox";
      case "apple-link": return "Apple Podcasts";
      case "google-link": return "Google Podcasts";
      case "deezer-link": return "Deezer";
      default: return ""
    }
  }

  getLink(refName, refValue){
    if (refValue !== ""){
      return (
          <a href={refValue} className={styles.link} rel="noreferrer">
            <span> {this.getLinkName(refName)} </span>
          </a>
      );
    }
    else{
      return("");
    }
  }

  render() {
    let podcast = this.props.info;
    return(
        <div className={styles.podcastInfo}>
          <div className={styles.image}><img src={podcast.image} alt={podcast.name}/></div>
          <div className={styles.text}>
            <div className={styles.name}>{podcast.name}</div>
            <div className={styles.refs}>
              {Object.keys(podcast).slice(3).map((ref) =>
                this.getLink(ref, podcast[ref])
              )}
            </div>
            <div className={styles.description}>{podcast.text}</div>
          </div>
        </div>
    );
  }
}

class Podcasts extends React.Component{
  render() {
    return(
        <div className={styles.podcasts}>
          <NavButtons theme="black"/>
          <SocialButtons theme="black"/>
          <SideNav/>
          <Link to="/">
            <svg className={styles.logoTextBlack} viewBox="0 0 198.04 75" xmlns="http://www.w3.org/2000/svg">
              <use href="img/logo-text.svg#logo-text"/>
            </svg>
          </Link>


          <p className={styles.podcastsHeader}> Наши подкасты </p>
          <div className={styles.podcastsCards}>
            {PodcastList.map((podcastObj) =>
                <PodcastCard key={podcastObj.name}
                      info={podcastObj}
                />
            )}
          </div>
        </div>
    );
  }
}

export default Podcasts;