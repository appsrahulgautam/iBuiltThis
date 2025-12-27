import { LucideIcon } from "lucide-react";

export default function Empty({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex flex-col justify-center items-center border-2 rounded-sm mt-4 p-10">
      <Icon className="text-primary size-10" />
      <p className="mt-4 text-lg text-center">{title}</p>
    </div>
  );
}
