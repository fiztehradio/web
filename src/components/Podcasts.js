import React from "react";
import "./Podcasts.css";
import PodcastList from "../data/podcasts.json";
import NavButtons from "./NavButtons";
import SocialButtons from "./SocialButtons";
import {Link} from "react-router-dom";

class PodcastCard extends React.Component{
  render() {
    let podcast = this.props.info;
    return(
        <div className="podcast-info">
          <div className="image"><img src={podcast.image} alt={podcast.name}/></div>
          <div className="text">
            <div className="name">{podcast.name}</div>
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
          <Link to="/">
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