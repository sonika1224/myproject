import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/products" className="hover:underline">Products</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/admin" className="hover:underline">Admin</Link>
    </nav>
  );
}
