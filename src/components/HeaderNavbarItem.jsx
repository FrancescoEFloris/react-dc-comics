import items from '../data/headnavitem';

function HeaderNavbarItem() {

    return (
        <>
            {items.map((item) => (
                <a key={item.id} href=""> {item.name} </a>
            ))}
        </>
    );

}

export default HeaderNavbarItem;