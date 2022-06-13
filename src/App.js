import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/search' element={<SearchPage/>}/>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;
