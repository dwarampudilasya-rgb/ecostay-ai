import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main>
      <Navbar />

      <h1 className="text-3xl font-bold text-center mt-10">
        About Page
      </h1>

      <p className="text-center mt-4">
        This is the About page of EcoStay.
      </p>

      <Footer />
    </main>
  );
}