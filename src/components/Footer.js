import {NavItems, Links} from "./Nav"
import monochromeLogo from "./assets/monochromeLogo.png"

const Footer = () => {
    return(
        <footer className="footer_container">
            <div className="footer_item" id="footer_img_container">
                <img alt="placeholder" src={monochromeLogo}></img>
            </div>
            <div className="footer_item">
                <h4>Doormat Navigation</h4>
                <nav className="footer_nav">
                    <NavItems data={Links} name="footer_nav_ul"/>
                </nav>
            </div>
            <div className="footer_item">
                <h4>Contact</h4>
                <ul>
                    <li>111 S Michigan Ave, Chicago, IL 60603</li>
                    <li>111-111-1111</li>
                    <li>LittleLemon@example.com</li>
                </ul>
            </div>
            <div className="footer_item">
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="https://x.com/" className="social_media">twitter</a></li>
                    <li><a href="https://facebook.com" className="social_media">facebook</a></li>
                    <li><a href="https://instagram.com">instagram</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer