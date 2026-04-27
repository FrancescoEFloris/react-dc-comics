function HeaderNavbarItem() {
    const items = [
        { name: "Characters" },
        { name: "Comics" },
        { name: "Movies" },
        { name: "TV" },
        { name: "Games" },
        { name: "Collectibles" },
        { name: "Videos" },
        { name: "Fans" },
        { name: "News" },
        { name: "Shop" }
    ];



    return (
        <>
            {items.map((item) => (
                <a href="">{item.name}</a>
            ))}
        </>
    );

}

export default HeaderNavbarItem;