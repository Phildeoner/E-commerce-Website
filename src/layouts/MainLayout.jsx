import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="pt-[150px] md:pt-44">{children}</main>
      <CallToAction />
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
