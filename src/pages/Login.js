import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveLoginInfo as loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { saveLogin } = this.props;
    saveLogin(this.state);
    const { history } = this.props;
    history.push('./carteira');
  }

  render() {
    const { email, password } = this.state;
    let isButtonAble = true;
    const PASSWORD_LENGTH = 6;
    const isValidPassword = (password.length >= PASSWORD_LENGTH);
    // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const regex = /\S+@\S+\.\S+/;
    const isValisEmail = regex.test(email);
    isButtonAble = !(isValisEmail && isValidPassword);
    return (
      <div className="Login">
        <h3 className="text-center">Login</h3>
        <section className="login-inputs">
          <input
            type="email"
            onChange={ this.handleChange }
            placeholder="E-mail"
            name="email"
            value={ email }
            data-testid="email-input"
          />
          <input
            type="password"
            onChange={ this.handleChange }
            placeholder="Senha"
            name="password"
            value={ password }
            data-testid="password-input"
          />
        </section>
        <button
          className="button"
          type="button"
          onClick={ this.handleClick }
          disabled={ isButtonAble }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (state) => dispatch(loginAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
