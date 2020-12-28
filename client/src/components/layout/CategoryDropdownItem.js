import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryDropdownItem = ({ category }) => {
  return (
    <Fragment>
      <LinkContainer to={`/search/by/categories/?category=${category}`}>
        <NavDropdown.Item>{category}</NavDropdown.Item>
      </LinkContainer>
    </Fragment>
  );
};

CategoryDropdownItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryDropdownItem;
