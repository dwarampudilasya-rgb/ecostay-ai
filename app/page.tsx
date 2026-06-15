import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <div className="grid md:grid-cols-2 gap-6 p-8">
        <Card
          title="Eco Cottage"
          description="A peaceful eco-friendly cottage surrounded by nature."
        />

        <Card
          title="Mountain View Stay"
          description="Enjoy beautiful mountain views and fresh air."
        />
      </div>

      <Footer />
    </main>
  );
}