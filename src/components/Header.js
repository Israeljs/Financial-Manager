import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpense: '0',
      currency: 'BRL',
    };
  }

  render() {
    const { totalExpense, currency } = this.state;
    const { email } = this.props;

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
              {`Despesa Total: R$ ${totalExpense},00`}
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
  email: state.userReducer.email,
});

export default connect(mapStateToProps, null)(Header);
