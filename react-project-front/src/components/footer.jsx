function Footer() {
  return (
    <footer className="border-top pt-2 text-center pb-2">
      <span>
        Real<i className="bi bi-award"></i>App
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
