import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/todolist">
          <a>To-do List</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="calculator">
          <a>Calculator</a>
        </Link>
        <Link href="drive">
          <a>Drive</a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
