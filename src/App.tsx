import { Suspense } from 'react'
import './App.css'
import { Loading } from './components/Loading'
import { Movie } from './Movie/Movie'

function App() {
  return (
    <div className="App">
      <Movie />
    </div>
  )
}

export default App
