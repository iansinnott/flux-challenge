/* @flow */
import React from 'react';
import { Record } from 'immutable';

import './styles.css';

const ListItem = ({ sith }) => (
  <li className='css-slot'>
    <h3>{sith.name}</h3>
    <h6>Homeworld: {sith.homeworld}</h6>
  </li>
);

const Sith = Record({
  name: '',
  homeworld: '',
});

const tempSith = Sith({
  name: 'Jorak Uln',
  homeworld: 'Korriban',
});

export default class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <div className='css-root'>
          <h1 className='css-planet-monitor'>Obi-Wan currently on Tatooine</h1>

          <section className='css-scrollable-list'>
            <ul className='css-slots'>
              {[1,2,3,4,5].map((x, i) => (
                <ListItem key={i} sith={tempSith} />
              ))}
            </ul>

            <div className='css-scroll-buttons'>
              <button className='css-button-up'></button>
              <button className='css-button-down'></button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
