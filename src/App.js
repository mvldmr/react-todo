import './App.scss';
import Form from './components/form/Form';
import List from './components/list/List';

function App() {
  const todoList = [
    {title: 'First TODO', subtitle: 'About this TODO', id: 1},
    {title: 'Second TODO', subtitle: 'About this TODO', id: 2},
  ];
  const addTodo = (todo) => {
    console.log(todoList);
  }
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
