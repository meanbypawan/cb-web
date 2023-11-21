import { Link } from 'react-router-dom';
import './Header.css';
export default function Header(){
    return <>
      <header>
        <span>Home</span>
        <Link to="/about"><span>About Us</span></Link>
        <Link to="/contact"><span>Contact us</span></Link>
        <span>Gallery</span>
        <span>Portfolio</span> 
        <span>Sign In</span>
        <span>Sign Up</span>
      </header>
    </>
}