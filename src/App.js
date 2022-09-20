import './App.scss';
import Form from './components/form/Form';
import List from './components/list/List';
import {useState} from 'react';

const DUMMY_LIST = [
  {title: 'First TODO', subtitle: 'About this TODO', id: 1},
  {title: 'Second TODO', subtitle: 'About this TODO', id: 2},
];

function App() {
  const addTodo = (todo) => {
    setTodoList(prevTodo => {
      return [todo, ...prevTodo];
    });
  }
  const [todoList, setTodoList] = useState(DUMMY_LIST);

  const keys = ['title', 'subtitle'];
  return (
    <div className="app">
      <div className="app-container">
        <Form keyList={keys} onAddTodo={addTodo}/>
        <List cardList={todoList}/>
      </div>
    </div>
  );
}

export default App;
