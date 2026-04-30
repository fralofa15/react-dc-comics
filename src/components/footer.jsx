import "./footer.css";
function Footer() {
    return (
        <footer>
            <div className="footer-bg"></div>
            
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