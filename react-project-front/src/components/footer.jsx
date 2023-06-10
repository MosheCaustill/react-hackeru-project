function Footer() {
  return (
    <footer className="border-top pt-2 text-center pb-2">
      <span>
      My <i className="bi bi-globe-europe-africa"></i> World
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
