function HeaderNavbarItem({ navItems }) {

    return (
        <div className='head-nav-container'>
            {navItems.map((item) => (
                <a className='head-anch' key={item.id} href=""> {item.name} </a>
            ))}
        </div>
    );

}

export default HeaderNavbarItem;