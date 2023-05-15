import React from 'react';
import './App.css';
import TodoDetail from './Page/TodoDetail';
import Home from './Page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Page/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo/:id' element={<TodoDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
