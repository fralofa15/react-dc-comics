import "./footer.css";
function Footer() {
    return (
        <footer>
            <div className="footer-bg">
                    <div className="container footer-li">
                        <div>
                            <ul>
                                <li className="li-title">DC COMICS</li>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                            <ul>
                                <li className="li-title">SHOP</li>
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="li-title">DC</li>
                                <li>Terms Of Use</li>
                                <li>Privacy policy (New)</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="li-title">SITES</li>
                                <li>DC</li>
                                <li>MAD Magazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>
            </div>

            <div className="footer-bottom bg-dark text-white">
                <div className="container d-flex justify-content-between align-items-center py-4">
                    <button className="btn btn-outline-primary text-white">
                        SIGN-UP NOW!
                    </button>

                    <div className="d-flex align-items-center gap-3">
                        <span className="text-primary fw-bold">FOLLOW US</span>
                        <img src="/img/footer-facebook.png" width="30" />
                        <img src="/img/footer-twitter.png" width="30" />
                        <img src="/img/footer-youtube.png" width="30" />
                        <img src="/img/footer-pinterest.png" width="30" />
                        <img src="/img/footer-periscope.png" width="30" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;