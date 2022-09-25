import React, {Fragment} from 'react';
import './App.scss';
import NewContainer from './new/NewContainer';
import ArchivedContainer from './archived/ArchivedContainer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Notfound from './utils/Notfound';
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
      <Route exact path='news' element={<NewContainer />} />
      <Route exact path='archived' element={<ArchivedContainer />} />
      <Route exact path='*' element={<Notfound />} />
      </Routes>
      </Fragment>
    </Router>
  );
}
export default App;