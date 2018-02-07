import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RenderSelectField } from "../Container/Global/RenderSelectField";
import { RenderInputField } from "../Container/Global/RenderInputField";
import '../common/masterStyle.css'

import {loadCountries} from "../Container/Actions";



class App extends Component {
  
  componentDidMount() {
      this.props.loadCountries(()=>{console.log('se cargaron los paises');});
  };

  changeCountryHandler(event, newValue, previousValue) {
    const values = {...this.props.carForm.values};
  };

  render() {
    const countries = this.props.countries.map(name => name.name);
    console.log(countries);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ejercicio Intive</h1>
          <h4>Nombre: Roger Castro</h4>
        </header>
        <form>
          <div>
            <label>Nombre:</label>
            <div>
              <Field
                name="fullName"
                type="text"
                component={RenderInputField}
                maxLength="60"
              />
            </div>
          </div>
          <div>
            <label>País</label>
            <div>
              <Field
                name="country"
                selected="Seleccione un Pais"
                component={RenderSelectField}
                items={countries}
                onChange={(event, newValue, previousValue) => this.changeCountryHandler(event, newValue, previousValue)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      countries: state.visitor.countries,
  };
};

export default reduxForm({
  form: "countriesForm"
})(connect(mapStateToProps, { loadCountries})(App));

