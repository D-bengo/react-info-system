import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <hr />
      {children}
      <hr />
      <Footer />
    </>
  );
}

export default Layout;
