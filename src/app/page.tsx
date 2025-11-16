import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import { Hero } from "./components/Hero";
import HomePage from "./UI/Home";
import ReviewPage from "./UI/Review";
import FAQ from "./UI/FAQ";

export default function Home() {
  return (
    <>

      <Navbar />
      <main>
        <Hero/>
        <HomePage/>
        <ReviewPage/>
        <FAQ/>
      </main>
      <Footer />
    </>
  );
}
