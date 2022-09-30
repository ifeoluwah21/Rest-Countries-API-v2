
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Layout/Header';
import Form from './components/Form/Form';
import Countries from './components/Countries/Countries';
import Details from './components/Details/Details';

import styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { detailsActions } from './store/details-slice';


function App() {
  const countries = useSelector(state => state.countries.countries);
  const isLightMode = useSelector(state => state.theme.isLightMode)
  const isDetailsPageShown = useSelector(state => state.details.isDetailsPageShown);
  const dispatch = useDispatch();
  const getName = name => {
    dispatch(detailsActions.getDetails({ value: name, allCountries: countries }));
  }
  return (
    <Fragment>
      <Header />
      <main className={`${styles.main} ${isLightMode ? `${styles[`main--lm`]}` : ` ${styles[`main--dm`]}`}`}>
        <Form />
        <Countries getName={getName} />
        {isDetailsPageShown && ReactDOM.createPortal(<Details />, document.getElementById(`details`))}
      </main>
    </Fragment>
  );
}

export default App;
