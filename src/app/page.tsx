import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login1 from "./components/Login";
import { Hero } from "./components/Hero";
import HomePage from "./UI/Home";
import ReviewPage from "./UI/Review";
import FAQ from "./UI/FAQ";
import Profile from "./UI/Profile";
import ProfileEdit from "./UI/ProfileEdit";

import { HeroKonsul } from "./UI/Konsultasi/HeroKonsul";
import HomeKonsul from "./UI/Konsultasi/HomeKonsul";

export default function Home() {
  return (
    <>
    {/* <Login/>
    <Register /> */}
      <main>
        {/* <Hero/>
        <HomePage/>
        <ReviewPage/>
        <FAQ/> */}
        <HomePage/>
        {/* <ProfileEdit /> */}
        {/* <HeroKonsul />
        <HomeKonsul /> */}
      </main>
    </>
  );
}
