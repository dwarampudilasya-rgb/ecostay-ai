export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-xl font-bold">
        EcoStay
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-gray-700">
        <a href="/" className="hover:text-black">Home</a>
        <a href="/about" className="hover:text-black">About</a>
        <a href="/dashboard" className="hover:text-black">Dashboard</a>
        <a href="/login" className="hover:text-black">Login</a>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden text-2xl">
        ☰
      </div>
    </nav>
  );
}