import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const report = {
    totalSales: 125.0,
    mostSoldProduct: "Cigarette Brand A",
    inventoryValue: 1000.0,
  };
  return json({ report });
}

export default function Reports() {
  const { report } = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Total Sales</h2>
          <p>${report.totalSales.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Most Sold Product</h2>
          <p>{report.mostSoldProduct}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Inventory Value</h2>
          <p>${report.inventoryValue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
