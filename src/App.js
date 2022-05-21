import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Detail from './components/Detail';

const App = () => (
  <div>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  </div>
);

export default App;
