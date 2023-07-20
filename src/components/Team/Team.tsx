import React from 'react';
import XII from './XII';
import AllOthers from './AllOthers';
import people from './others';
import styles from './Team.module.scss';
import osp4 from './osp4';
import docketeerXIII from './docketeerXIII';

import { useInView } from 'react-intersection-observer';
import { useSprings, config } from 'react-spring';


const Team = (): JSX.Element => {
  const [refXIII, inViewXIII] = useInView({ threshold: 0.2 });
  const [ref, inView] = useInView({ threshold: 0.2 });

  const animationsTwo = useSprings(
    8,
    [0, 150, 300, 450, 600].map((delay) => ({
      opacity: inViewXIII ? 1 : 0,
      transform: inViewXIII ? 'translateY(0)' : 'translateY(50px)',
      config: config.slow,
      delay: inViewXIII ? delay : 0,
    }))
  );

  const animations = useSprings(
    8,
    [0, 150, 300, 450].map((delay) => ({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
      config: config.slow,
      delay: inView ? delay : 0,
    }))
  );

  return (
    <div className={styles.teamContainer}>
      <h2>The Team Behind Docketeer XIII</h2>
      <div className={styles.docketeerXIIIContainer} ref={refXIII}>
        {docketeerXIII.map((person, index) => (
          <XII
            key={index}
            img={person.img}
            name={person.name}
            linkedin={person.linkedin}
            github={person.github}
            animation={animationsTwo[index]}
          />
        ))}
        </div>
        <h2>The Team Behind Docketeer XII</h2>
      <div className={styles.osp4Container} ref={ref}>
        {osp4.map((person, index) => (
          <XII 
            key={index}
            img={person.img}
            name={person.name}
            linkedin={person.linkedin}
            github={person.github}
            animation={animations[index]}
          />
        ))}
      </div>
      <h3>Meet All of Our Engineers!</h3>
      <div className={styles.othersContainer}>
        {people.map((person, index) => (
          <AllOthers
            key={index}
            name={person.name}
            linkedin={person.linkedin}
            github={person.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
