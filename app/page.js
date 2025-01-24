import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MainSection from "./components/Main";

export default function Home() {
  return (
    <div className="wrapper">
      <Nav/>
      <MainSection/>
      <Footer/>
    </div>
  );
}
