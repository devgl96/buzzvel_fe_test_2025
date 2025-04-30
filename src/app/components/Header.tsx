export function Header() {
  return (
    <header className="w-full mx-2 flex items-center justify-between">
      <div>
        <ul className="flex items-center gap-4">
          <li>teach</li>
          <li>Products</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="border-none">Log In</button>
        <button className="border-slate-700 rounded">Sign Up Now</button>
      </div>
    </header>
  );
}
