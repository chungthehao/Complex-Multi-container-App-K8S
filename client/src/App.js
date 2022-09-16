import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Fibonacci Cal - Updated!</h1>
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other page</Link>
        </header>
        <Routes>
          <Route path='/' element={<Fib />} />
          <Route path='/otherpage' element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
