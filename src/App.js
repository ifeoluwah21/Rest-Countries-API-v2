
import './App.scss';
import React from 'react';
import Header from './components/Layout/Header';
import Form from './components/Form/Form';



function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Form />
      </main>
    </React.Fragment>
  );
}

export default App;
