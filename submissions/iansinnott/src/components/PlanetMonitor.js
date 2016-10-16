/* @flow */
import React from 'react';
import { connect } from 'react-redux';

type PlanetMonitorProps = {
  planetName: string,
};
const PlanetMonitor = ({ planetName }: PlanetMonitorProps) => (
  <h1 className='css-planet-monitor'>
    Obi-Wan currently on {planetName}
  </h1>
);

const mapStateToProps = (state) => ({
  planetName: state.getIn(['planetMonitor', 'name']),
});

export default connect(mapStateToProps)(PlanetMonitor);
