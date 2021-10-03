import React from "react";
import './Team.css';
import TeamList from "../data/team.json";
import NavButtons from "./NavButtons";
import SocialButtons from "./SocialButtons";
import {Link} from "react-router-dom";

class Card extends React.Component{
  render() {
    let person = this.props.info;
    return(
        <div className="card">
          <div className="avatar"><img src={person.avatar} alt={person.name}/></div>
          <div className="name">{person.name}</div>
          <div className="brief">{person.brief}</div>
          <div className={(person.brief.length < 35) ? "text" : "text after-wrap"}>{person.text}</div>
        </div>
    );
  }
}

class Team extends React.Component{
  render() {
    return(
      <div className={"team"}>
        <NavButtons theme="black"/>
        <SocialButtons theme="black"/>
        <Link to="./">
          <svg className="logo-text-black" viewBox="0 0 198.04 75" xmlns="http://www.w3.org/2000/svg">
            <use href="img/logo-text.svg#logo-text"/>
          </svg>
        </Link>

        <p className="team-header"> Команда Физтех.Радио </p>
        <div className="team-cards">
          {TeamList.map((person) =>
              <Card key={person.name}
                    info={person}
              />
          )}
        </div>
      </div>
    );
  }
}

export default Team;