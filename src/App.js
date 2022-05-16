import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';

const App = () => (
  <div>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  </div>
);

export default App;
