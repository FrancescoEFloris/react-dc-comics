import HeaderNavbarItem from './HeaderNavbarItem.jsx';

function Header() {
    return <header className='head-wrapper sticky-top'>
        <a href=""><img className='head-logo' src="/imgs/dc-logo.png" alt="" /></a>
        <HeaderNavbarItem />
    </header>;
}

export default Header;