// import { useContext, useEffect } from "react";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import HoweDo from "../Components/HoweDo";
import PageNav from "../Components/PageNav";
import Testimonials from "../Components/Testimonials";
import WhyUS from "../Components/WhyUS";
// import { UserContext } from "../Context/UserContext";
// import { useNavigate } from "react-router-dom";

function HomePage() {
  // const { isLoggedin } = useContext(UserContext);

  // const navigate = useNavigate();
  // useEffect(function () {
  //   if (isLoggedin) {
  //     navigate("/user/dashboard");
  //   }
  // }, []);
  return (
    <div className="container">
      <div id="navbar">
        <PageNav />
      </div>
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="whyus">
          <WhyUS />
        </section>
        <section id="howwedo">
          <HoweDo />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contactus">
          <ContactUs />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
export default HomePage;
