import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import Loading from '../layout/Loading';

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
        <Loading />
      )}
    </Fragment>
  );
};

GamePlatform.propTypes = {
  platform: PropTypes.string,
};

export default GamePlatform;
