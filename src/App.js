import './App.css';
import CommentSubmit from './components/CommentSubmit';
import CommentList from './components/CommentList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<CommentList />} />
        <Route path="/create" element={<CommentSubmit />} />
        <Route path='/Edit/:id' element={<CommentSubmit />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
