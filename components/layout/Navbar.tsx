export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Cartigo
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden gap-6 md:flex">
          <a href="#">Deals</a>
          <a href="#">Compare</a>
          <a href="#">Guides</a>
          <a href="#">Blog</a>
        </div>

        {/* Search Placeholder */}
        <div>
          <button className="rounded-md border px-4 py-2">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}