import React from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import CategoryDropdownItem from './CategoryDropdownItem';

const CategoryDropdown = ({ categories }) => {
  return (
    <NavDropdown title="Categories" id="collasible-nav-dropdown">
      {categories.map((category) => (
        <CategoryDropdownItem key={category} category={category} />
      ))}
    </NavDropdown>
  );
};

CategoryDropdown.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryDropdown;
