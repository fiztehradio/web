import React from "react";
import "./Podcasts.css";
import PodcastList from "../data/podcasts.json";
import NavButtons from "./NavButtons";
import SocialButtons from "./SocialButtons";
import {Link} from "react-router-dom";

class PodcastCard extends React.Component{
  getLinkName(refName){
    switch(refName){
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
          <a href={refValue} className="link" rel="noreferrer">
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
    console.log(Object.keys(podcast).slice(3,-1));
    return(
        <div className="podcast-info">
          <div className="image"><img src={podcast.image} alt={podcast.name}/></div>
          <div className="text">
            <div className="name">{podcast.name}</div>
            <div className="refs">
              {Object.keys(podcast).slice(3).map((ref) =>
                this.getLink(ref, podcast[ref])
              )}
            </div>
            <div className="description">{podcast.text}</div>
          </div>
        </div>
    );
  }
}

class Podcasts extends React.Component{
  render() {
    return(
        <div className="podcasts">
          <NavButtons theme="black"/>
          <SocialButtons theme="black"/>
          <Link to="./">
            <svg className="logo-text-black" viewBox="0 0 198.04 75" xmlns="http://www.w3.org/2000/svg">
              <use href="img/logo-text.svg#logo-text"/>
            </svg>
          </Link>


          <p className="podcasts-header"> Наши подкасты </p>
          <div className="podcasts-cards">
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