import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/todo"}>To DO</Link>
      </nav>

      {children}

      <footer>
        <li>This is footer</li>
      </footer>
    </>
  );
};

export default Layout;
