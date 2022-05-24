import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';

const Navbar = ({ icon, title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <Link to='/'>
                    <i className={ icon }/>
                    { title }
                </Link>
            </h1>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Gitfinder',
    icon: 'fa-github fab'
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;