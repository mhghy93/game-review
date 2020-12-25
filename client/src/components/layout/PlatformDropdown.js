import React from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import PlatformDropdownItem from './PlatformDropdownItem';

const PlatformDropdown = ({ platforms }) => {
  return (
    <NavDropdown title="Platforms" id="collasible-nav-dropdown">
      {platforms.map((platform) => (
        <PlatformDropdownItem key={platform.platform} platform={platform} />
      ))}
    </NavDropdown>
  );
};

PlatformDropdown.propTypes = {
  platforms: PropTypes.array.isRequired,
};

export default PlatformDropdown;
