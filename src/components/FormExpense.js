import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { requestApiCurrenciesThunk } from '../actions';

class FormExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de débito',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.valueExpense = this.valueExpense.bind(this);
    // this.descriptionExpense = this.descriptionExpense.bind(this);
    // this.currencyExpense = this.currencyExpense.bind(this);
    // this.paymentExpense = this.paymentExpense.bind(this);
    // this.tagExpense = this.tagExpense.bind(this);
    // this.buttonSubmit = this.buttonSubmit.bind(this);
  }

  componentDidMount() {
    const { requestKeyCurrencies } = this.props;

    requestKeyCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  valueExpense() {
    const { value } = this.state;
    return (
      <label htmlFor="expenseValue">
        Valor:
        <input
          className="Input-value"
          id="expenseValue"
          onChange={ this.handleChange }
          name="value"
          value={ value }
          data-testid="value-input"
        />
      </label>
    );
  }

  descriptionExpense() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Description :
        <input
          id="description"
          type="text"
          onChange={ this.handleChange }
          name="description"
          value={ description }
          data-testid="description-input"
        />
      </label>
    );
  }

  currencyExpense() {
    const { currency } = this.state;
    const { currencies } = this.props;
    // console.log(currencies[1]);
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          value={ currency }
          name="currency"
          onChange={ this.handleChange }
          data-testid="currency-input"
        >
          {currencies.map((curr) => (
            <option
              key={ curr }
              data-testid={ curr }
              value={ curr }
            >
              { curr }
            </option>
          ))}
        </select>
      </label>);
  }

  paymentExpense() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de Pagamento:
        <select
          id="method"
          value={ method }
          name="method"
          onChange={ this.handleChange }
          data-testid="tag-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>);
  }

  tagExpense() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          value={ tag }
          name="tag"
          onChange={ this.handleChange }
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>);
  }

  buttonSubmit() {
    return (
      <button
        className="Button-wallet"
        type="button"
        // onClick={ this.handleClick }
        // disabled={ isButtonAble }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    return (
      <form className="FormExpense">
        { this.valueExpense() }
        { this.descriptionExpense() }
        { this.currencyExpense() }
        { this.paymentExpense() }
        { this.tagExpense() }
        { this.buttonSubmit() }
      </form>
    );
  }
}

FormExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  requestKeyCurrencies: PropTypes.func.isRequired,
};

// FormExpense.defaultProps = {
//   currencies: [],
// };

const mapStateToProps = (state) => ({
  currencies: state.walletReducer.currencies,
  // expenses: state.walletReducer.expenses,
});

const mapDispatchToProps = (dispatch) => ({ // recebe um objeto que recebe a dispatch que recebe uma action
  // saveCurrencyInfo: (payLoad) => dispatch(currencyInfo(payLoad)),
  requestKeyCurrencies: () => dispatch(requestApiCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
