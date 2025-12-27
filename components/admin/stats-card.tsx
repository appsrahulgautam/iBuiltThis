import { cn } from "@/lib/utils";

export default function StatsCard({
  all,
  approved,
  pending,
  rejected,
}: {
  all: number;
  approved: number;
  pending: number;
  rejected: number;
}) {
  const stats = [
    {
      label: "Total",
      count: all,
      color: "bg-primary/40",
    },
    {
      label: "Pending",
      count: pending,
      color: "bg-blue",
    },
    {
      label: "Approved",
      count: approved,
      color: "bg-red-800/40",
    },
    {
      label: "Rejected",
      count: rejected,
      color: "bg-yellow-800/30",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, count, color }) => (
        <div className={cn("status-badge-card p-6 rounded border-gray-700 border-[0.1px]", color)} key={label}>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="text-3xl font-bold">{count}</p>
        </div>
      ))}
    </div>
  );
}
