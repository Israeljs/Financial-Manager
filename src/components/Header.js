import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = Number(expenses.reduce(
      (acc, { value, exchangeRates, currency }) => acc
      + (value * exchangeRates[currency].ask),
      0,
    )).toFixed(2);

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
              {`Despesa Total: R$ ${totalExpenses},00`}
            </span>
            <span
              data-testid="header-currency-field"
            >
              BRL
            </span>
          </div>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  expenses: state.walletReducer.expenses,
});

export default connect(mapStateToProps, null)(Header);
