import NavBar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
