import './App.css';
import CommentSubmit from './components/CommentSubmit';
import CommentList from './components/CommentList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="bg-zinc-800 h-screen text-white">
      <div className=' flex-auto items-center justify-center h-full'>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<CommentList />} />
        <Route path="/create" element={<CommentSubmit />} />
        <Route path='/Edit/:id' element={<CommentSubmit />} />

      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
