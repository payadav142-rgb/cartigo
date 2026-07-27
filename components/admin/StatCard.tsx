import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string | number;
  icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-gray-500">
          {title}
        </h3>

        <Icon
          size={22}
          className="text-gray-400"
        />
      </div>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}