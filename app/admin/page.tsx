import {
  Package,
  Tags,
  Building2,
  Store,
} from "lucide-react";

import StatCard from "@/components/admin/StatCard";
import DashboardCard from "@/components/admin/DashboardCard";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Products"
          value={0}
          icon={Package}
        />

        <StatCard
          title="Categories"
          value={0}
          icon={Tags}
        />

        <StatCard
          title="Brands"
          value={0}
          icon={Building2}
        />

        <StatCard
          title="Stores"
          value={0}
          icon={Store}
        />
      </div>

      <DashboardCard title="Recent Activity">
        <p className="text-gray-500">
          No activity found.
        </p>
      </DashboardCard>
    </div>
  );
}