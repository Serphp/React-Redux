import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CommentSubmit from './components/CommentSubmit';
import CommentList from './components/CommentList';

function App() {

  return (
    <div className="App">
      <CommentSubmit />
      <h1>Hello App</h1>
      <CommentList />
    </div>
  );
}

export default App;
