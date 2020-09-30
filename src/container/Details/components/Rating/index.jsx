import React from 'react';
import PropTypes from 'prop-types';

import { RatingWrapper, RatingIconImg } from './styles';

const Rating = ({ icon }) => (
  <RatingWrapper>
    Rating:
    <RatingIconImg src={icon} />
  </RatingWrapper>
);

Rating.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Rating;
