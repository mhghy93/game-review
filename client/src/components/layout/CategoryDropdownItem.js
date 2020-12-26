import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryDropdownItem = ({ category }) => {
  return (
    <Fragment>
      {typeof category.category === 'string' ? (
        category.category.split(',').map((gameCategory) => (
          <LinkContainer
            key={gameCategory}
            to={`/search/by/categories/?category=${gameCategory}`}
          >
            <NavDropdown.Item>{gameCategory}</NavDropdown.Item>
          </LinkContainer>
        ))
      ) : (
        <p>Loading....</p>
      )}
    </Fragment>
  );
};

CategoryDropdownItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryDropdownItem;
