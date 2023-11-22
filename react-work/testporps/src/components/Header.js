import { Link } from 'react-router-dom';
import './Header.css';
export default function Header(){
    return <>
      <header>
        <span>Home</span>
        <Link to="/about"><span>About Us</span></Link>
        <Link to="/contact"><span>Contact us</span></Link>
        <span>Gallery</span>
        <Link to="/product-list"><span>Product List</span></Link> 
        <Link to="/use-effect"><span>Use Effect</span></Link> 
        <span>Sign In</span>
        <span>Sign Up</span>
      </header>
    </>
}