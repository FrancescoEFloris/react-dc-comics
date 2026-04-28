import items from '../data/footnavitem.js';

function FooterNavbarItem() {

    return (
        <section className="wrapper bg-primary p-4">
            <div className="container foot-shop-container">
                <div className='row row-cols-5'>
                    {items.map((item) => (
                        <div className="col text-center" key={item.id}>
                            <a className='foot-shop-anch' href="">
                                <img className='foot-shop-img p-1' src={item.img} alt="" />
                                <span className='foot-shop-label text-white'>{item.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FooterNavbarItem;