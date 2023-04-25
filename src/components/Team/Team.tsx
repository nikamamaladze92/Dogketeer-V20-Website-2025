import React from 'react';
import XII from './XII';
import AllOthers from './AllOthers';
import people from './others';
import styles from './Team.module.scss';
import osp4 from './osp4';

const Team = () => {
  return (
    <div>
      <div className={styles.osp4Container}>
      {osp4.map((person, index) => (
      <XII
      key = {index}
      img = {person.img}
      name = {person.name}
      linkedin = {person.linkedin}
      github = {person.github}
      />
      ))}
      </div>
      <h3>Meet All Our Engineers</h3>
      <div className={styles.othersContainer}>
      {people.map((person, index) => (
      <AllOthers
      key = {index}
      name = {person.name}
      linkedin = {person.linkedin}
      github = {person.github}
      />
      ))}
      </div>
    </div>
  )
}

export default Team;