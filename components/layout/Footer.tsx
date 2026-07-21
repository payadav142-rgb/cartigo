export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div>
          <h2 className="text-xl font-bold">Cartigo</h2>
          <p className="mt-2 text-sm text-gray-500">
            Compare smarter. Shop better.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Cartigo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}