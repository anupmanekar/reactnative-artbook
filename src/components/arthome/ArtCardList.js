/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import ArtCard from './ArtCard';

class ArtCardList extends Component {
  render() {
      let cards = [];
      let artsjson = this.props.artsData;
      for (let i = 0; i < artsjson.length; i++) {
          cards.push(
              <ArtCard key={i} title={artsjson[i].title} imageUri={artsjson[i].imageUri} />
          );
      }

    return cards;
  }
}

export default ArtCardList;
