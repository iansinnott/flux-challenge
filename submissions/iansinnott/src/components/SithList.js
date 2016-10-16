/* @flow */
import React from 'react';
import { Record } from 'immutable';

const Sith = Record({
  name: '',
  homeworld: '',
});

const tempSith = Sith({
  name: 'Jorak Uln',
  homeworld: 'Korriban',
});

type SithListItemProps = {
  sith: Sith,
};
const SithListItem = ({ sith }: SithListItemProps) => (
  <li className='css-slot'>
    <h3>{sith.name}</h3>
    <h6>Homeworld: {sith.homeworld}</h6>
  </li>
);

export class SithList extends React.Component {
  render() {
    return (
      <ul className='css-slots'>
        {[1,2,3,4,5].map((x, i) => (
          <SithListItem key={i} sith={tempSith} />
        ))}
      </ul>
    );
  }
}

export default SithList;
