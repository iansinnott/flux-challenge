/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { Subscription } from 'rxjs';

import { createWebSocketObservable } from '../lib/utils.js';
import { messageReceived } from '../modules/planet-monitor';

type PlanetMonitorProps = {
  planetName: string,
  dispatch: Dispatch,
};
// const PlanetMonitor = ({ planetName }: PlanetMonitorProps) => (
//   <h1 className='css-planet-monitor'>
//     Obi-Wan currently on {planetName}
//   </h1>
// );

class PlanetMonitor extends React.Component {
  props: PlanetMonitorProps;
  messageSubscription: Subscription;

  // Create a websocket connection
  componentDidMount() {
    const meessage$ = createWebSocketObservable('ws://localhost:4000')
      .map(msg => JSON.parse(msg.data.toString()))
      .do(msg => console.log(msg));

    this.messageSubscription = meessage$.subscribe(
      (msg) => this.props.dispatch(messageReceived(msg)),
      (err) => console.error('websocket error', err),
      () => console.info('WebSocket closed')
    );
  }

  componentWillUnmount() {
    this.messageSubscription.unsubscribe();
  }

  render() {
    const { planetName } = this.props;
    return (
      <h1 className='css-planet-monitor'>
        Obi-Wan currently on {planetName}
      </h1>
    );
  }
}

const mapStateToProps = (state) => ({
  planetName: state.getIn(['planetMonitor', 'name']),
});

export default connect(mapStateToProps)(PlanetMonitor);
