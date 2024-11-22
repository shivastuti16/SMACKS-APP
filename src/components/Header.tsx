import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <h1>SMACKS</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/order">Order</Link></li>
        <li><Link href="/notifications">Notifications</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
