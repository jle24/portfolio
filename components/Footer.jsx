"use client"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer-container mt-auto mb-auto">
            <hr />
            <p className="text-center">
                © {new Date().getFullYear()} Jonathan Le's Portfolio
            </p>
            

        </footer>
    );
};

export default Footer;
