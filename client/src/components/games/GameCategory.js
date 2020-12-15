import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

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
        <p>Loading....</p>
      )}
    </Fragment>
  );
};

GameCategory.propTypes = {
  category: PropTypes.string,
};

export default GameCategory;
