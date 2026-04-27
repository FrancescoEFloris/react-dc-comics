function FooterNavLinks() {
    const navLinkSections = [
        {
            name: "DC COMICS",
            links: [
                { name: "Characters" },
                { name: "Comics" },
                { name: "Movies" },
                { name: "TV" },
                { name: "Games" },
                { name: "Videos" },
                { name: "News" },
            ]
        },
        {
            name: "SHOP",
            links: [
                { name: "Shop DC" },
                { name: "Shop DC Collectibles" },
            ]
        },
        {
            name: "DC",
            links: [
                { name: "Terms Of Use" },
                { name: "Privacy Policy" },
                { name: "Ad Choices" },
                { name: "Advertising" },
                { name: "Jobs" },
                { name: "Subscriptions" },
                { name: "Talent Workshops" },
                { name: "CPSC Certificates" },
                { name: "Ratings" },
                { name: "Shop Help" },
                { name: "Contact Us" },
            ]
        },
        {
            name: "SITES",
            links: [
                { name: "DC" },
                { name: "MAD Magazine" },
                { name: "DC Kids" },
                { name: "Dc Universe" },
                { name: "Dc Power Visa" },
            ]
        },
    ]
    return <div className="links-section">
        {navLinkSections.map((section) => (
            <div>
                <h3>{section.name}</h3>
                <ul>
                    {section.links.map((link) => (
                        <li>
                            <a href="">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        <img src="/imgs/dc-logo-bg.png" alt="" />
    </div>;
}

export default FooterNavLinks;