import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RenderSelectField } from "../Container/Global/RenderSelectField";
import logo from '../logo.svg';
import '../Container/App.css';

import {loadBrands} from "../Container/Actions";



class App extends Component {
  
  componentDidMount() {
    this.props.loadBrands(()=>{console.log('se cargaron las marcas');});
  };

  render() {
    const brands = this.props.brands.map(brand => brand.brand);
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
            name="brand"
            selected="Marca del auto"
            component={RenderSelectField}
            items={brands}
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
      brands: state.quote.brands,
  };
};

export default reduxForm({
  form: "carForm"
})(connect(mapStateToProps, { loadBrands})(App));

