import items from '../data/footnavitem.js';

function FooterNavbarItem() {
        
    return (
        <section className="bg-primary foot-shop-container">
            {items.map((item) => (
                <a className='foot-shop-anch' key={item.id} href=""><img className='foot-shop-img' src={item.img} alt="" /> <span className='foot-shop-label'>{item.name}</span> </a>
            ))}
        </section>
    );
}

export default FooterNavbarItem;