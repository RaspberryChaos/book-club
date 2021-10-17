import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
