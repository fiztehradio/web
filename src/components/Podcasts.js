import React from "react";
import "./Podcasts.css";
import PodcastList from "../data/podcasts.json";

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