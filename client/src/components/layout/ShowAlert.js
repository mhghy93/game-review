import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const ShowAlert = ({ alerts }) => {
  return (
    <Fragment>
      {alerts.map((alert) => (
        <Alert key={alert.id} variant={alert.alertType}>
          <p className="text-center">{alert.msg}</p>
        </Alert>
      ))}
    </Fragment>
  );
};

ShowAlert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(ShowAlert);
