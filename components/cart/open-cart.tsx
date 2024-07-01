import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <Button variant="glass" className={cn(className)}>
      Cart ({quantity})
    </Button>
  );
}
