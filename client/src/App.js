import React, {Fragment} from 'react';
import './App.scss';
import NewContainer from './new/NewContainer';
import ArchivedContainer from './archived/ArchivedContainer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Notfound from './utils/Notfound';
import Home from './utils/Home';

function App() {
  return (
    <Router>
      <Fragment>
        <NavbarComponent/>
        <Routes>
      <Route exact path='home' element={<Home />} />
      <Route exact path='news' element={<NewContainer />} />
      <Route exact path='archived' element={<ArchivedContainer />} />
      <Route exact path='*' element={<Notfound />} />
      </Routes>
      </Fragment>
    </Router>
  );
}
export default App;