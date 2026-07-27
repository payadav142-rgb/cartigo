type Props = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardCard({
  title,
  children,
}: Props) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold">
        {title}
      </h2>

      {children}
    </section>
  );
}