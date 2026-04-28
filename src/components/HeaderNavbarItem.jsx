import items from '../data/headnavitem';

function HeaderNavbarItem() {

    return (
        <div className='head-nav-container'>
            {items.map((item) => (
                <a className='head-anch' key={item.id} href=""> {item.name} </a>
            ))}
        </div>
    );

}

export default HeaderNavbarItem;