function FooterNavbarItem() {
        const items = [
        { name: "DIGITAL COMICS", img: "/imgs/buy-comics-digital-comics.png" },
        { name: "DC MERCHANDISE", img: "/imgs/buy-comics-merchandise.png" },
        { name: "SUBSCRIPTION", img: "/imgs/buy-comics-subscriptions.png" },
        { name: "COMIC SHOP LOCATOR", img: "/imgs/buy-comics-shop-locator.png" },
        { name: "DC POWER VISA", img: "/imgs/buy-dc-power-visa.svg" },
    ];
    return (
        <section className="bg-primary">
            {items.map((item) => (
                <a href=""><img src={item.img} alt="" /> {item.name} </a>
            ))}
        </section>
    );
}

export default FooterNavbarItem;