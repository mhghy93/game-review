import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const GamePlatform = ({ platform }) => {
  return (
    <Fragment>
      {typeof platform === 'string' ? (
        platform.split(',').map((gamePlatform) => (
          <Badge key={gamePlatform} className="p-3 ml-2" variant="success">
            {gamePlatform}
          </Badge>
        ))
      ) : (
        <p>Loading....</p>
      )}
    </Fragment>
  );
};

GamePlatform.propTypes = {
  platform: PropTypes.string,
};

export default GamePlatform;
