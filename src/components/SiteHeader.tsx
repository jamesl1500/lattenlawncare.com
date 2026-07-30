import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/locations", label: "Locations" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <Link className="site-header__brand" href="/">
          Latten Lawncare
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} className="site-header__link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
