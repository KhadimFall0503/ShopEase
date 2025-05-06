import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Import des icônes de lucide-react

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">© {new Date().getFullYear()} Khadim Fall. Tous droits réservés.</p>
            <p className="mb-0">ShopEase - Simplifiez votre shopping en ligne</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
