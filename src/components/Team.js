import React from "react";
import './Team.css';
import TeamList from "../data/team.json";

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