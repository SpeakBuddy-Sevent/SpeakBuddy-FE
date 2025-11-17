
import { Hero } from "./components/Hero";
import HomePage from "./UI/Home";
import ReviewPage from "./UI/Review";
import FAQ from "./UI/FAQ";


export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <HomePage/>
        <ReviewPage/>
        <FAQ/>
      </main>
    </>
  );
}
