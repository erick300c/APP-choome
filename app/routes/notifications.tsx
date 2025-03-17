import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const notifications = [
    { id: 1, message: "Low stock for Cigar Brand B" },
    { id: 2, message: "New shipment received" },
  ];
  return json({ notifications });
}

export default function Notifications() {
  const { notifications } = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="mb-2 p-2 bg-yellow-100 rounded">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
