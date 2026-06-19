interface Props {
  title: string;
}

export default function ProgramCard({ title }: Props) {
  return (
    <div className="rounded-xl border p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
}