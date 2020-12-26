import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const PlatformDropdownItem = ({ platform }) => {
  return (
    <Fragment>
      {typeof platform.platform === 'string' ? (
        platform.platform.split(',').map((gamePlatform) => (
          <LinkContainer
            key={gamePlatform}
            to={`/search/by/platforms/?platform=${gamePlatform}`}
          >
            <NavDropdown.Item key={gamePlatform}>
              {gamePlatform}
            </NavDropdown.Item>
          </LinkContainer>
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
