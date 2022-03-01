import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
  return (
    <nav className='header'>
      <Link to='/'>useSWR</Link>
      <Link to='/redux'>Redux</Link>
    </nav>
  )
}