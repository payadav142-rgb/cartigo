import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Products
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all products.
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="rounded-xl bg-black px-5 py-3 font-semibold text-white"
        >
          + Add Product
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Brand
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan={6}
                className="p-10 text-center text-gray-500"
              >
                No Products Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}