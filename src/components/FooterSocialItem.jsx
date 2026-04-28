import items from '../data/footsocial';

function FooterSocialItem() {
    return (
        <div>
            <button className='signup-btn'>SIGN-UP NOW!</button>
            <div>
                <p className='follow'>FOLLOW US</p>
                {items.map((item) => (
                    <a className='social-btn' key={item.id} href=""><img src={item.img} alt="{item.name}" /></a>
                ))}
            </div>
        </div>
    );
}

export default FooterSocialItem;