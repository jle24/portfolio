"use client"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer-container mt-auto mb-auto">
            <hr />
            <p className="text-center">
                © {new Date().getFullYear()} Jonathan Le's Portfolio
            </p>
            <div className="text-center text-2xl flex-row">
                <a
                    href="https://github.com/jle24"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github px-1"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/lejonathan24"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin px-1"></i>
                </a>
            </div>

        </footer>
    );
};

export default Footer;
