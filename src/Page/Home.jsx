import React, { useContext, useEffect } from 'react';
import '../Style/Home.scss';
import TodoForm from '../Component/TodoForm';
import Todo from '../Component/Todo';
import { AppContext } from '../App';

const Home = () => {
  const { todoList, resetState, setShowForm } = useContext(AppContext);

  useEffect(() => {
    resetState();
    setShowForm(false);
  }, []);

  return (
    <div className='Home'>
      <h1>Ma Todo List</h1>
      <TodoForm />
      <div className='todoList'>
        {todoList.map((item) => {
          return <Todo item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
