import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav style={{
        backgroundColor: 'transparent',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '1rem',
        zIndex: 1000

    }}>
        <ul  style={{
            display:'flex',
            flexDirection: 'row',
            gap: '10px',
            listStyle: 'none',
        }}>
            <li ><Link style={{textDecoration:'none', color:'white'}} to='/'>Auth Page</Link></li>
            <li ><Link style={{textDecoration:'none', color:'white'}} to='/chat'>Chat Page</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
