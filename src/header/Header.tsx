import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav>
      <Link to='/'>useSWR</Link>
      <Link to='/redux'>Redux</Link>
    </nav>
  )
}