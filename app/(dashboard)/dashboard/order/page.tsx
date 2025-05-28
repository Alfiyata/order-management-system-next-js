import { DashboardCard } from "@/app/(dashboard)/dashboard/order/DashboardCard";
import { DataTable } from "@/app/(dashboard)/dashboard/order/DataTable";
import { Payment, columns } from "@/app/(dashboard)/dashboard/order/columns";

// type DataOrder = {
//   id: number;
//   status: string;
//   total: number | string;
// }

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function OrderPage() {
  const data = await getData();

  return (
    <div>
      <div className="mb-8 flex flex-col items-start justify-start">
        <p className="text-3xl font-bold">Dashboard Order Management</p>
        <p>Hello! Shindy</p>
      </div>
      <div>
        <DashboardCard />
      </div>
      <div className="w-full py-10">
        <p className="text-xl font-bold mb-4">Dashboard Order Management</p>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
