import React from 'react';
import _cx from 'classnames/bind';

// TODO: Import styles
const cx = _cx.bind({});

export default class App extends React.Component {
  render() {
    return (
      <div className={cx('App')}>
        <h1>Hey there app</h1>
      </div>
    );
  }
}
