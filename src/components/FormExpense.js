import React from 'react';

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
    this.descriptionExpense = this.descriptionExpense.bind(this);
    this.currencyExpense = this.currencyExpense.bind(this);
    this.paymentExpense = this.paymentExpense.bind(this);
    this.tagExpense = this.tagExpense.bind(this);
    this.buttonSubmit = this.buttonSubmit.bind(this);
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
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          description={ currency }
          name="currency"
          onChange={ this.handleChange }
          data-testid="currency-input"
        >
          <option description="EUR">EUR</option>
          <option description="CAD">CAD</option>
          <option value="USD">USD</option>
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
          description={ method }
          name="method"
          onChange={ this.handleChange }
          data-testid="tag-input"
        >
          <option description="Dinheiro">Dinheiro</option>
          <option description="Cartão de crédito">Cartão de crédito</option>
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
          description={ tag }
          name="tag"
          onChange={ this.handleChange }
          data-testid="tag-input"
        >
          <option description="Alimentação">Alimentação</option>
          <option description="Lazer">Lazer</option>
          <option description="Trabalho">Trabalho</option>
          <option description="Transporte">Transporte</option>
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

export default FormExpense;
