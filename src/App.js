import './App.scss';
import Form from './components/form/Form';
import List from './components/list/List';

function App() {
  const todoList = [
    {title: 'First TODO', subtitle: 'About this TODO', id: 1},
    {title: 'Second TODO', subtitle: 'About this TODO', id: 2},
  ];
  const keys = ['title', 'subtitle'];
  return (
    <div className="app">
      <div className="app-container">
        <Form keyList={keys}/>
        <List cardList={todoList}/>
      </div>
    </div>
  );
}

export default App;
