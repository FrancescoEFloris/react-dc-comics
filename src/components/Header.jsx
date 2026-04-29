import HeaderNavbarItem from './HeaderNavbarItem.jsx';
import navItems from '../data/headnavitem';

function Header() {
    return <header className='head-wrapper sticky-top bg-white'>
        <a href=""><img className='head-logo' src="/imgs/dc-logo.png" alt="" /></a>
        <HeaderNavbarItem navItems={navItems}/>
    </header>;
}

export default Header;