import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const products = [
    { id: 1, name: "Cigarette Brand A", category: "Cigarettes", quantity: 100, price: 5.0 },
    { id: 2, name: "Cigar Brand B", category: "Cigars", quantity: 50, price: 10.0 },
  ];
  return json({ products });
}

export default function Products() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">{product.quantity}</td>
              <td className="p-2">${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
