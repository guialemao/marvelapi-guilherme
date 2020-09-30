import React from 'react';

import { RatingWrapper, RatingIconImg } from './styles';

const Rating = ({ icon }) => (
  <RatingWrapper>
    Rating:
    <RatingIconImg src={icon} />
  </RatingWrapper>
);

export default Rating;
