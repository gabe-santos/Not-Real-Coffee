export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center rounded-2xl border border-black px-fluid-12 py-[0px]">
      <span className="hidden md:block">Cart</span> [ {quantity} ]
    </div>
  );
}
