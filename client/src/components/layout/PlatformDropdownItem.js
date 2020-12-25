import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';

const PlatformDropdownItem = ({ platform }) => {
  return (
    <Fragment>
      {typeof platform.platform === 'string' ? (
        platform.platform
          .split(',')
          .map((gamePlatform) => (
            <NavDropdown.Item key={gamePlatform}>
              {gamePlatform}
            </NavDropdown.Item>
          ))
      ) : (
        <p>Loading....</p>
      )}
    </Fragment>
  );
};

PlatformDropdownItem.propTypes = {
  platform: PropTypes.object.isRequired,
};

export default PlatformDropdownItem;
