import React, { useState, createContext } from 'react';
import './App.css';
import TodoDetail from './Page/TodoDetail';
import Home from './Page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Page/Footer';
import NotFound from './Component/NotFound';

export const AppContext = createContext();

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState('');
  const [showForm, setShowForm] = useState(false);
  const resetState = () => {
    setTitle('');
    setDescription('');
    setProgress('');
    // setShowForm(false);
  };
  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          todoList,
          setTodoList,
          title,
          setTitle,
          description,
          setDescription,
          progress,
          setProgress,
          resetState,
          showForm,
          setShowForm,
        }}
      >
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo/:id' element={<TodoDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
