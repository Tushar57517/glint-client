import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-white">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default Home;
