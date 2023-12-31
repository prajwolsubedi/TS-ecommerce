import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";
import useScrollTop from "../hooks/useScrollTop"
const Offers = () => {
  useScrollTop();
  return (
    <div>
      <Navbar />
      <div className="bg-[#d6cfcf]">
      <h2 className="font-mono text-lg text-center p-52 ">
          No Offers Available Right Now
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
