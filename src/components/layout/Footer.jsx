import "./FooterStyles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-muted">
        © {new Date().getFullYear()} Poornima Silote · Built with React
      </p>
    </footer>
  );
};

export default Footer;
