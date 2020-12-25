import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';

const CategoryDropdownItem = ({ category }) => {
  return (
    <Fragment>
      {typeof category.category === 'string' ? (
        category.category
          .split(',')
          .map((gameCategory) => (
            <NavDropdown.Item key={gameCategory}>
              {gameCategory}
            </NavDropdown.Item>
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
