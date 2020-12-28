import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import PlatformDropdownItem from './PlatformDropdownItem';
import { uniqueArray } from '../../utils/utils';

const PlatformDropdown = ({ platforms }) => {
  let platformArray = [];
  let uniquePlatforms = [];
  if (platforms.length > 0) {
    for (let i = 0; i < platforms.length; i++) {
      platformArray.push(platforms[i].platform);
    }
    uniquePlatforms = uniqueArray(platformArray);
  }

  return (
    <Fragment>
      {platforms.length > 0 ? (
        <NavDropdown title="Platforms" id="collasible-nav-dropdown">
          {uniquePlatforms.map((platform, index) => (
            <PlatformDropdownItem key={index} platform={platform} />
          ))}
        </NavDropdown>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

PlatformDropdown.propTypes = {
  platforms: PropTypes.array.isRequired,
};

export default PlatformDropdown;
