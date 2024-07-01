export default function StatRating({ label, value }: { label: string; value: number | undefined }) {
  // Ensure value is between 1 and 5
  const clampedValue = value ? Math.max(1, Math.min(5, value)) : 0;

  return (
    <div className="flex w-full max-w-md items-center justify-between">
      <span className="text-sm uppercase">{label}</span>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index < clampedValue ? 'bg-black' : 'border border-black bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
