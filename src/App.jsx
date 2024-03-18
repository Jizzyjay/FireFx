import "./App.css";
import Navbar from "./components/molecules/Navbar";
import Logo from './assets/logo.svg'
import Banner from "./components/molecules/Banner";
import Offer from "./components/molecules/Offer";
import Footer from "./components/molecules/Footer";
import Subcribe from "./components/molecules/Subcribe";

function App() {
  const menuItems = [
    { label: "Mentorship Plan", link: "/mentorship-plan" },
    { label: "Mentorship Courses", link: "/mentorship-courses" },
    { label: "Fire Calculator", link: "/fire-calculator" },
    { label: "Blog", link: "/blog" },
    { label: "FAQ", link: "/faq" },
  ];

  return (
    <div>
      <Navbar logo={Logo} menuItems={menuItems} />
      <Banner />
      <Offer />
      <Subcribe />
      <Footer />
    </div>
  );
}

export default App;
