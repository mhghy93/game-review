import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';
import CategoryDropdownItem from './CategoryDropdownItem';

const CategoryDropdown = ({ categories }) => {
  let categoryArray = [];
  let uniqueCategories = [];
  let temp = [];
  if (categories.length > 0) {
    for (let i = 0; i < categories.length; i++) {
      categoryArray.push(categories[i].category);
    }
    for (let i = 0; i < categoryArray.length; i++) {
      if (categoryArray[i].includes(',')) {
        temp = categoryArray[i].split(',');
        uniqueCategories.push(temp[0]);
        uniqueCategories.push(temp[1]);
      } else {
        uniqueCategories.push(categoryArray[i]);
      }
    }
    uniqueCategories = uniqueCategories.filter(
      (item, index) => uniqueCategories.indexOf(item) === index
    );
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
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

CategoryDropdown.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryDropdown;
