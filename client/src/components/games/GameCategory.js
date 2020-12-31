import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import Loading from '../layout/Loading';

const GameCategory = ({ category }) => {
  return (
    <Fragment>
      {typeof category === 'string' ? (
        category.split(',').map((gameCategory) => (
          <Badge key={gameCategory} className="p-3 ml-2" variant="danger">
            {gameCategory}
          </Badge>
        ))
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

GameCategory.propTypes = {
  category: PropTypes.string,
};

export default GameCategory;
