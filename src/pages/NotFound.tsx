import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h1 className="text-2xl font-bold">404</h1>
      <p className="mt-2 opacity-80">page not found.</p>
      <Link to="/" className="mt-4 inline-block underline">back home</Link>
    </div>
  );
}
