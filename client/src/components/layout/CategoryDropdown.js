import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import CategoryDropdownItem from './CategoryDropdownItem';
import { uniqueArray } from '../../utils/utils';

const CategoryDropdown = ({ categories }) => {
  let categoryArray = [];
  let uniqueCategories = [];
  if (categories.length > 0) {
    for (let i = 0; i < categories.length; i++) {
      categoryArray.push(categories[i].category);
    }
    uniqueCategories = uniqueArray(categoryArray);
  }
  return (
    <Fragment>
      {categories.length > 0 ? (
        <NavDropdown title="Categories" id="collasible-nav-dropdown">
          {uniqueCategories.map((category, index) => (
            <CategoryDropdownItem key={index} category={category} />
          ))}
        </NavDropdown>
      ) : (
        <NavDropdown
          title="Categories"
          id="collasible-nav-dropdown"
        ></NavDropdown>
      )}
    </Fragment>
  );
};

CategoryDropdown.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryDropdown;
