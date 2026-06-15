import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <main>
      <Navbar />

      <h1 className="text-3xl font-bold text-center mt-10">
        Dashboard
      </h1>

      <p className="text-center mt-4">
        Welcome to the dashboard.
      </p>

      <Footer />
    </main>
  );
}