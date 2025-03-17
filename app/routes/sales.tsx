import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const sales = [
    { id: 1, date: "2023-10-01", total: 50.0 },
    { id: 2, date: "2023-10-02", total: 75.0 },
  ];
  return json({ sales });
}

export default function Sales() {
  const { sales } = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Date</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id} className="border-b">
              <td className="p-2">{sale.date}</td>
              <td className="p-2">${sale.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
