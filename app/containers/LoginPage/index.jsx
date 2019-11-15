import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import './login-page.scss';
import { userLogin } from 'containers/App/actions';

const LoginPage = (props) => {
  const { history: { push } } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pushHomeRoute = () => {
    push('/home');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { onUserLogin } = props;

    const payload = {
      username: email,
      password,
      pushRoute: pushHomeRoute,
    };
    onUserLogin(payload);
  };

  return (
    <div className="login-box-layout">
      <div className="login-box__label">App Login</div>
      <form action="">
        <div className="login-box__textfields">
          <input
            required
            className="login-box-textfield"
            outlined
            label="Email"
            icon="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="login-box-textfield"
            outlined
            label="Password"
            icon="lock"
            value={password}
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" rounded onClick={(e) => handleLogin(e)}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  onUserLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  // isAuthenticated: makeSelectIsAuthenticated(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (payload) => dispatch(userLogin(payload)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(LoginPage);
