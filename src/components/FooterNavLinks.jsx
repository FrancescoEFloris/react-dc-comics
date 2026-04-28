import navLinkSections from '../data/footnavlink';

function FooterNavLinks() {

    return <div className="links-section">
        {navLinkSections.map((section) => (
            <div className='foot-link-section' key={section.id}>
                <h3>{section.name}</h3>
                <ul>
                    {section.links.map((link) => (
                        <li className='foot-list-item' key={link.id}>
                            <a className='foot-link-anch' href="">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        <img src="/imgs/dc-logo-bg.png" alt="" />
    </div>;
}

export default FooterNavLinks;