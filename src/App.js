import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/taskList';

function App() {

  return (
    <div className="App">
      <TaskForm />
      <h1>Hello App</h1>
      <TaskList />
    </div>
  );
}

export default App;
