import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const PlatformDropdownItem = ({ platform }) => {
  return (
    <Fragment>
      <LinkContainer to={`/search/by/platforms/?platform=${platform}`}>
        <NavDropdown.Item>{platform}</NavDropdown.Item>
      </LinkContainer>
    </Fragment>
  );
};

PlatformDropdownItem.propTypes = {
  platform: PropTypes.string.isRequired,
};

export default PlatformDropdownItem;
