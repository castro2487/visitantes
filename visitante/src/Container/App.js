import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RenderSelectField } from "../Container/Global/RenderSelectField";
import logo from '../logo.svg';
import '../Container/App.css';

import {loadCountries} from "../Container/Actions";



class App extends Component {
  
  componentDidMount() {
      this.props.loadCountries(()=>{console.log('se cargaron los paises');});
  };

  render() {
    const countries = this.props.countries.map(name => name.name);
    console.log(countries);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <Field
            name="country"
            selected="Seleccione un Pais"
            component={RenderSelectField}
            items={countries}
            onChange={(event, newValue, previousValue) => this.changeBrandHandler(event, newValue, previousValue)}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      carForm: state.form.carForm,
      countries: state.visitor.countries,
  };
};

export default reduxForm({
  form: "countriesForm"
})(connect(mapStateToProps, { loadCountries})(App));

