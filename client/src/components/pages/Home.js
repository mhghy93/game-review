import React, { Fragment } from 'react';
import Games from '../games/Games';
import LatestGames from '../games/LatestGames';

const Home = () => {
  return (
    <Fragment>
      <LatestGames />
      <Games />
    </Fragment>
  );
};

export default Home;
