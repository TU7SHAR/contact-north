import Footer from "./(components)/Footer";
import Form from "./(components)/Form";
import Navbar from "./(components)/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="blob1"></div>
      <Form />
      <div className="blob res"></div>
      <div className="blob2 res"></div>
      <Footer />
    </>
  );
}
