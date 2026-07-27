"use client";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Admin Dashboard
        </h2>

        <p className="text-gray-500">
          Manage your Cartigo platform
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold">
            Admin
          </p>

          <p className="text-sm text-gray-500">
            Super Admin
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black font-bold text-white">
          A
        </div>
      </div>
    </header>
  );
}