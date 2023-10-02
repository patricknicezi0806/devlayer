type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <div className="flex items-center justify-center rounded-full border h-8 border-blue px-2  font-bold text-blue">
      {label}
    </div>
  );
}
