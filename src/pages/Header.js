import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    // const email = 'silvaij16@gmail.com';
    const despesaTotal = '0';
    const currency = 'BRL';
    return (
      <header className="Header">
        <section className="Header-info">
          <div>
            <span
              data-testid="email-field"
            >
              {`Email: ${email}`}
            </span>
          </div>
          <div className="Total">
            <span
              data-testid="total-field"
            >
              {`Despesa Total: R$ ${despesaTotal},00`}
            </span>
            <span
              data-testid="header-currency-field"
            >
              {` ${currency}`}
            </span>
          </div>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
