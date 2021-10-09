import React from "react";
import styles from './Team.module.css';
import TeamList from "../data/team.json";
import NavButtons from "./NavButtons";
import SocialButtons from "./SocialButtons";
import {Link} from "react-router-dom";

class Card extends React.Component{
  render() {
    let person = this.props.info;
    return(
        <div className={styles.card}>
          <div className={styles.avatar}><img src={person.avatar} alt={person.name}/></div>
          <div className={styles.name}>{person.name}</div>
          <div className={styles.brief}>{person.brief}</div>
          <div className={(person.brief.length < 35) ? styles.text: `${styles.text} ${styles.afterWrap}`}>
            {person.text}
          </div>
        </div>
    );
  }
}

class Team extends React.Component{
  render() {
    return(
      <div className={styles.team}>
        <NavButtons theme="black"/>
        <SocialButtons theme="black"/>
        <Link to="/">
          <svg className={styles.logoTextBlack} viewBox="0 0 198.04 75" xmlns="http://www.w3.org/2000/svg">
            <use href="img/logo-text.svg#logo-text"/>
          </svg>
        </Link>

        <p className={styles.teamHeader}> Команда Физтех.Радио </p>
        <div className={styles.teamCards}>
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