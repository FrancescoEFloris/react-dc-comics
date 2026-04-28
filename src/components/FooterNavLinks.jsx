import navLinkSections from '../data/footnavlink';

function FooterNavLinks() {
    return (
        <div className="container-fluid links-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col">
                        <div className="row row-cols-3">
                            {navLinkSections.map((section) => (
                                <div className="foot-link-section" key={section.id}>
                                    <h3 className='text-white'>{section.name}</h3>
                                    <ul>
                                        {section.links.map((link) => (
                                            <li className="foot-list-item" key={link.id}>
                                                <a className="foot-link-anch" href="">
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-6  d-flex justify-content-center">
                        <img className='logo-footer' src="/imgs/dc-logo-bg.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterNavLinks;