/* @flow */
import React from 'react';

import './styles.css';
import SithList from './SithList.js';
import PlanetMonitor from './PlanetMonitor.js';

export default class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <div className='css-root'>
          <PlanetMonitor />

          <section className='css-scrollable-list'>
            <SithList />
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
