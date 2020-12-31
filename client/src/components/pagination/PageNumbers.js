import React from 'react';
import { Fragment } from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const PageNumbers = ({ totalPages, type, currentPage, path }) => {
  let items = [];
  for (let number = 1; number <= Number(totalPages); number++) {
    items.push(
      <LinkContainer key={number} to={path + number}>
        <Pagination.Item active={number === currentPage}>
          {number}
        </Pagination.Item>
      </LinkContainer>
    );
  }

  return (
    <Fragment>
      <Pagination size={type}>
        <LinkContainer to={path + 1}>
          <Pagination.First />
        </LinkContainer>

        {Number(currentPage) === 1 ? (
          <Fragment></Fragment>
        ) : (
          <LinkContainer to={path + (Number(currentPage) - 1)}>
            <Pagination.Prev />
          </LinkContainer>
        )}

        {items[0]}

        {Number(totalPages) > 1 ? (
          <Fragment>{items[1]}</Fragment>
        ) : (
          <Fragment></Fragment>
        )}

        {Number(totalPages) > 2 ? (
          <Pagination.Ellipsis />
        ) : (
          <Fragment></Fragment>
        )}

        {Number(currentPage) === Number(totalPages) ? (
          <Fragment></Fragment>
        ) : (
          <LinkContainer to={path + (Number(currentPage) + 1)}>
            <Pagination.Next />
          </LinkContainer>
        )}

        <LinkContainer to={path + Number(totalPages)}>
          {Number(currentPage) > 2 ? (
            <Fragment>
              {items[totalPages - 1]}
              <Pagination.Last />
            </Fragment>
          ) : (
            <Pagination.Last />
          )}
        </LinkContainer>
      </Pagination>
    </Fragment>
  );
};

export default PageNumbers;
