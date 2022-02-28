import './App.css'
import { Movie as MovieSWR} from './Movie/Movie'
import { Movie as MovieRedux} from './MovieRedux/Movie';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<MovieSWR />}/>
            <Route path='/redux' element={<MovieRedux />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
