import FooterNavbarItem from './FooterNavbarItem.jsx';
import FooterNavLinks from './FooterNavLinks.jsx';
import FooterSocialItem from './FooterSocialItem.jsx';
import navLinks from '../data/footnavlink';
import items from '../data/footsocial';

function Footer() {
    return <footer>
        <FooterNavbarItem />
        <FooterNavLinks navLinks={navLinks}/>
        <FooterSocialItem items={items} />
    </footer>;
}

export default Footer;