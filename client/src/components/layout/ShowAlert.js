import React, { Fragment, useState } from 'react';
import { Alert } from 'react-bootstrap';

const ShowAlert = () => {
  const [show, setShow] = useState(true);

  return (
    <Fragment>
      {show ? (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          Successfully Updated
        </Alert>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default ShowAlert;
