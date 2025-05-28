import { ShoppingCart, User, CreditCard } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DashboardCard() {
  return (

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
    <Card>
      <div className="flex flex-row justify-between space-y">
        <CardHeader className="w-full">
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <div className="mr-4">
          <ShoppingCart size={18} />
        </div>
      </div>
      <CardContent>
        <p className="font-bold text-3xl text-[#85c369]">$45,231.89</p>
        <CardDescription>+20.1% from last month</CardDescription>
      </CardContent>
    </Card>
    <Card>
      <div className="flex flex-row justify-between space-y">
        <CardHeader className="w-full">
          <CardTitle>Subscriptions</CardTitle>
        </CardHeader>
        <div className="mr-4">
          <User size={18} />
        </div>
      </div>
      <CardContent>
        <p className="font-bold text-3xl text-[#85c369]">+2350</p>
        <CardDescription>+180.1% from last month</CardDescription>
      </CardContent>
    </Card>
    <Card>
      <div className="flex flex-row justify-between space-y">
        <CardHeader className="w-full">
          <CardTitle>Sales</CardTitle>
        </CardHeader>
        <div className="mr-4">
          <CreditCard size={18} />
        </div>
      </div>
      <CardContent>
        <p className="font-bold text-3xl text-[#85c369]">+12,234</p>
        <CardDescription>+19% from last month</CardDescription>
      </CardContent>
    </Card>
  </div>
  )
}
