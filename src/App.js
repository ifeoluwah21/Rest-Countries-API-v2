
import styles from './App.module.scss';
import React, { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Layout/Header';
import Form from './components/Form/Form';
import Countries from './components/Countries/Countries';
import CountriesContext from './store/countriesDataContext';
import Details from './components/Details/Details';



function App() {
  const countriesCtx = useContext(CountriesContext);
  const getName = name => {
    console.log(name);
    countriesCtx.findByName(name);
  }
  return (
    <Fragment>
      <Header />
      <main className={`${styles.main} ${countriesCtx.isLightMode ? `${styles[`main--lm`]}` : ` ${styles[`main--dm`]}`}`}>
        <Form />
        <Countries getName={getName} />
        {countriesCtx.isDetailsPageShown && ReactDOM.createPortal(<Details />, document.getElementById(`details`))}
      </main>
    </Fragment>
  );
}

export default App;
