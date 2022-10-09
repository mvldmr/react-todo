import './App.scss';
import Form from './components/form/Form';
import List from './components/list/List';
import {Fragment, useState} from 'react';

const DUMMY_LIST = [
  {title: 'First TODO', subtitle: 'About this TODO', done: false, id: 1},
  {title: 'Second TODO', subtitle: 'About this TODO', done: false, id: 2},
];

function App() {
  const addTodo = (todo) => {
    setTodoList(prevTodo => {
      return [todo, ...prevTodo];
    });
  }
  const updateList = (id) => {
    setTodoList(prevTodo => {
      return prevTodo.filter((obj) => obj.id !== id);
    });
  }
  const [todoList, setTodoList] = useState(DUMMY_LIST);

  const keys = ['title', 'subtitle'];
  const list = todoList.length ? <List onUpdateList={updateList} cardList={todoList}/> : <h2>List is empty</h2>
  return (
    <Fragment>
      <Form keyList={keys} onAddTodo={addTodo}/>
      {list}
    </Fragment>
  );
}

export default App;
