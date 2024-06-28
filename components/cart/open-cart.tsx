export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return <div className="relative flex items-center bg-glass text-lg pill">Cart ({quantity})</div>;
}
