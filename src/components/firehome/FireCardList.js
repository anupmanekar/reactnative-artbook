/* eslint-disable prettier/prettier */

import React from 'react';
import FireCard from './FireCard';

const FireCardList = (props) => {
    let cards = [];
    let firejson = props.fireData;
    for (let i = 0; i < firejson.length; i++) {
        cards.push(
            <FireCard key={i} title={firejson[i].value.title} imageUri={firejson[i].value.imageUri} />
        );
    }
  return cards;
};

export default FireCardList;
