import React from 'react';
import Routes from './routes';

import Header from './components/Header';
import Main from './pages/main';
import './styles.css';
import { Route } from 'react-router-dom';

const App = () => (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
)

export default App;
