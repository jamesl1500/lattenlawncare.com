export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <p className="footer__brand">Latten Lawncare</p>
      <p className="footer__meta">Fully insured • Serving Lorain County, Ohio</p>
      <p className="footer__meta">&copy; {year} Latten Lawncare. All rights reserved.</p>
    </footer>
  );
}
