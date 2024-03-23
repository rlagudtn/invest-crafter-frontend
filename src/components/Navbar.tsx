// components/Navbar.tsx
import clsx from "clsx";
import Link from "next/link";
interface NavbarProps {
  className: string;
}
const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <nav className={clsx(className, "py-2 sm:py-3 md:py-4 lg:py-5")}>
    <Link href="/">홈</Link>
    <Link href="/about"></Link>
  </nav>
);

export default Navbar;