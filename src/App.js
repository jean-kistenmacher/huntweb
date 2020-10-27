import React from 'react';
import api from './services/api';
import Main from './pages/main';

import Header from './components/Header';
import './styles.css';

const App = () => (
    <div className="App">
      <Header/>
      <Main />
    </div>
)

export default App;
